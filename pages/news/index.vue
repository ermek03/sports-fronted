<template>
  <section>
    <Banner :data="{title:'Новости', sub_title:'Последние новости только у нас' , image: '/img/banner.jpg'}"></Banner>
    <div class="container">
      <div class="news-links">
        <div class="link-text">
          <a type="button" class="text-uppercase" :class="{active: this.category === 'football'}" @click="changeCategory('football')">Футбол</a>
        </div>
        <div class="link-text">
          <a type="button" class="text-uppercase" :class="{active: this.category === 'futsal'}" @click="changeCategory('futsal')">Футзал</a>
        </div>
        <div class="link-text">
          <a type="button" class="text-uppercase" :class="{active: this.category === 'volleyball'}" @click="changeCategory('volleyball')">Волейбол</a>
        </div>
      </div>

      <div class="news-blog">
        <div class="news-card">
          <!--/.Carousel Wrapper-->
          <div class="row m-0" v-if="news !== null">
            <div class="col-sm-12 col-md-6 col-lg-4 p-b-0 p-t-0" v-for="(news,key) in news.results" :key="key">
              <swiper class="swiper" :options="swiperOption">
                <swiper-slide :style="'background-image:url(' + news.image + ')'" class="swiper-slide" v-if="news.image"></swiper-slide>
                <swiper-slide style="background-image:url('/img/no-photo.png')" v-else></swiper-slide>
              </swiper>
              <div class="news-description">
                <div class="news-title">
                  <h2 class="text-uppercase">
                    <a type="button" @click.stop="dialog_show = {'open':true, 'id': news.link}">
                      {{ news.title }}
                    </a>
                  </h2>
                </div>
                <div class="news-text">
                  <p v-if="news.description.length > 100">
                    {{ news.description.slice(0, 97) }}...
                  </p>
                  <p v-else>
                    {{ news.description }}
                  </p>
                  <p> {{ news.date }}</p>
                </div>
              </div>
            </div>
          </div>
          <div style="align-items: center; text-align: center" v-else class="m-t-15">
            <v-progress-circular
              :size="70"
              :width="7"
              color="#F46D6D"
              indeterminate
            ></v-progress-circular>
          </div>
          <!-- show modal dialog-->
          <ShowModal :dialog="dialog_show" @close="dialog_show = {'open':false}" v-if="dialog_show.id !== undefined"></ShowModal>

          <div class="pagination m-t-24" v-if="news!== null">
            <a type="button" v-for="(page,key) in news.paginations" :key="key" :class="{'active': page.link === null}"
               @click.stop="changePage(page.number)">{{ page.number }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Banner from '@/components/Banner'
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import ShowModal from "@/components/news/ShowModal";

export default {
  name: "news",

  components: {
    Banner,
    Swiper,
    SwiperSlide,
    ShowModal
  },

  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
      },

      dialog_show: {'open': false},
      news: null,
      category: 'football',
      page: 1
    }
  },
  methods: {
    async getData() {
      this.news = null
      this.news = await this.$repositories.news.all(this.category, this.page)
    },
    async changePage(page_number) {
      this.page = page_number
      await this.getData()
    },
    async changeCategory(category) {
      this.category = category
      this.page = 1
      await this.getData()
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
@import "assets/scss/main.scss";

.news-links {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  .link-text {
    padding: 48px 15px 0px 15px;

    a {
      text-decoration: none;
      color: $black-color;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 18px;
      letter-spacing: 0.2px;
    }

    a.active, a:hover {
      color: #F46D6D;
      text-decoration: none;
    }
  }
}

.swiper {
  width: 100%;
  height: 320px;
  z-index: 0;
  margin-top: 40px;

  .swiper-slide {
    background-position: center;
    background-size: cover;
    display: flex; /*this is  what was missing */
    flex-flow: column; /*this is  what was missing too*/
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    background-color: $white-color;
    border-radius: 8px;
  }
}

.news-description {
  .news-title {
    text-align: center;
    padding-top: 16px;

    h2 {
      a {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        text-align: left;
        line-height: 18px;
        display: flex;
        letter-spacing: 0.2px;
        color: #F46D6D;
      }

      .news-text {
        font-style: normal;
        font-weight: $regular;
        font-size: 16px;
        line-height: 120%;
        letter-spacing: 0.015em;
        color: #333333;
      }
    }
  }

}

@media screen and (min-width: 1904px) {
  .container {
    max-width: 1185px;
  }
}

/* Pagination links */
.pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  a {
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
    letter-spacing: 0.015em;
    color: #000000;
  }

  /* Style the active/current link */
  a.active {
    background-color: $pink-color;
    color: white;
    pointer-events: none;
    cursor: default;
  }

  /* Add a grey background color on mouse-over */
  a:hover:not(.active) {
    background-color: #ddd;
  }
}
</style>


