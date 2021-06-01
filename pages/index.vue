<template>
  <section>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(slider, i) in $store.getters['sliders/sliders']" :index="i" :key="i" :style="'background-image:' + 'url('+slider.image+')'">
        <h2>{{ slider.title }}</h2>
        <h4>{{ slider.text }}</h4>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="container">
      <div class="big-buttons">
        <div class="row text-center justify-content-center">
          <div class="col-sm-4">
            <nuxt-link to="/sport-areas">
              <div class="big-button">
                <div>
                  <img src="/icon/soccer-court.png" class="img-button" alt="Спортивные площадки">
                  <p>Смотреть площадки</p>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="col-sm-4">
            <nuxt-link to="/map">
              <div class="big-button">
                <div>
                  <img src="/icon/marker-icon.png" class="img-button" alt="Показать на карте все площадки">
                  <p>Показать на карте</p>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="col-sm-4">
            <nuxt-link to="/news">
              <div class="big-button">
                <div>
                  <img src="/icon/news-icon.png" class="img-button" alt="Читать новости">
                  <p>Читать новости</p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="categories-slider">
      <div class="container">
        <div class="flex flex-between">
          <div class="name"><p>Вид площадки</p></div>
          <div class="more">
            <nuxt-link to="/sport-areas">ПОКАЗАТЬ ВСЕ ></nuxt-link>
          </div>
        </div>

        <div class="category-blog" v-if="$store.getters['categories/categories'].length > 0">
          <client-only placeholder="Loading...">
            <div class="slider">
              <carousel-3d :disable3d="true" :space="365" :controls-visible="true" :controls-width="60"
                           :controls-height="60" :height="230">
                <slide v-for="(category, i) in $store.getters['categories/categories']" :key="i" :index="i">
                  <nuxt-link :to="'/sport-areas?category='+ category.id">
                    <img :src="category.image" alt="">
                    <figcaption style="text-align: center">
                      <nuxt-link :to="'/sport-areas?category='+ category.id">{{ category.title }}</nuxt-link>
                    </figcaption>
                  </nuxt-link>
                </slide>
              </carousel-3d>
            </div>
          </client-only>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="sports-area">
        <div class="flex flex-between">
          <div class="name"><p>Спортивные площадки</p></div>
          <div class="more">
            <nuxt-link to="/sport-areas">ПОКАЗАТЬ ВСЕ ></nuxt-link>
          </div>
        </div>
        <div class="sport-area-blog">
          <div class="row">
            <div class="col-sm-4 col-md-4" v-for="area in $store.getters['sport-areas/sport_areas']" v-bind:key="area.id">
              <div class="sport-area-cart">
                <div>
                  <nuxt-link :to="'/sport-areas/' + area.id">
                    <div class="card-image">
                      <img :src="area.image" class="sport-area-image" :alt="area.title">
                    </div>
                  </nuxt-link>
                  <h2>{{ area.title }}</h2>
                  <p class="area-address">{{ area.address }}</p>
                  <div class="area-price">
                    <p>{{ area.price }} сом/час</p>
                  </div>
                  <div class="flex flex-between area-footer">
                    <div class="area-favorites">
                      <button @click.stop="">
                        <img src="/icon/favorites.png" alt="favorites">
                      </button>
                    </div>
                    <div class="area-more-detail">
                      <nuxt-link :to="'/sport-areas/' + area.id">Подробнее ></nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="news-slider">
      <div class="container">
        <div class="flex flex-between">
          <div class="name"><p>Новости</p></div>
          <div class="more">
            <nuxt-link to="/news">ПОКАЗАТЬ ВСЕ ></nuxt-link>
          </div>
        </div>
        <div class="news-blog" v-if="news !== null">
          <client-only placeholder="Loading...">
            <div class="slider">
              <carousel-3d
                :display="5"
                :controls-visible="true"
                :controls-width="60"
                :controls-height="60"
                :width="400"
                :height="310"
                :autoplay="true"
                :autoplayTimeout="5000"

              >
                <slide v-for="(news, i) in news.results" :index="i" :key="i">
                  <img :src="news.image" :alt="news.title" v-if="news.image">
                  <img src="/img/no-photo.png" :alt="news.title" v-else>
                  <figcaption v-if="news.description.length > 55">
                    {{ news.description.slice(0, 55) }} ...
                  </figcaption>
                  <figcaption v-else>
                    {{ news.description }}
                  </figcaption>
                </slide>
              </carousel-3d>
            </div>
          </client-only>
        </div>
      </div>
    </div>

    <div class="review">
      <div class="container">
        <div class="flex flex-between">
          <div class="name"><p>Отзывы</p></div>
          <div class="more">
            <a type="button" @click.stop="dialog_add = true">Оставить отзыв</a>
          </div>
          <!-- add modal dialog-->
        </div>
        <div class="review-blog">
          <div class="review-cart" v-for="(feedback, key) in feedbacks" :key="key">
            <p>{{ feedback.text }}</p>
            <div class="ion-avatar">
              <img src="/icon/avatar.png" alt="">
              <p>{{ feedback.user_name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AddModal :getData="getFeedback" :dialog="dialog_add" @close="dialog_add = false"></AddModal>
  </section>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import AddModal from "@/components/feedbacks/AddModal";

export default {
  name: 'Sports.kg',
  title: 'Sports.kg',
  components: {
    Swiper,
    SwiperSlide,
    AddModal
  },
  data() {
    return {
      news_all: [],
      dialog_add: false,
      swiperOption: {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      news: null,
      feedbacks: [],
    }
  },
  methods: {
    async getData() {
      this.news = await this.$repositories.news.all('football', 1)
      this.feedbacks = await this.$repositories.feedback.list()
    },
    async getFeedback() {
      this.feedbacks = await this.$repositories.feedback.list()
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
@import "assets/scss/main.scss";

.swiper {
  height: 70vh;
  max-width: 100%;
  z-index: 0;

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex; /*this is  what was missing */
    flex-flow: column; /*this is  what was missing too*/
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    background-color: $white-color;
    background-position: center;
    background-size: cover;
  }

  .swiper-slide h2 {
    font-size: 40px;
    color: $white-color;
  }

  .swiper-slide h4 {
    font-size: 16px;
    color: $white-color;
    margin-top: 15px;
  }
}

.big-buttons {
  margin-top: -110px;

  a {
    color: #212529;
    text-decoration: none;
  }

  .big-button {
    /*width: 300px;*/
    margin-bottom: 15px;
    height: 230px;
    background-color: $white-color;
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.11), -5px 0px 10px rgba(0, 0, 0, 0.11);
    border-radius: 10px;

    display: flex; /*this is  what was missing */
    flex-flow: row; /*this is  what was missing too*/
    align-items: center;
    justify-content: center;
    text-align: center;

    .img-button {
      height: 100px;
    }

    p {
      width: 178px;
      height: 66px;
      margin-top: 10px;

      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 24px;
      letter-spacing: 0.2px;
    }

    :hover {
      p {
        color: $pink-color;
      }
    }
  }
}

.name {
  width: 50%;

  p {
    font-weight: 700;
    font-size: 36px;
    line-height: 30px;
    letter-spacing: 0.2px;
    color: #000000;
    margin: 0px;
  }
}

.more {
  display: flex;
  align-items: center;

  a {
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0.2px;
    color: $pink-color;
    text-decoration: none;
  }
}

.news-slider {
  width: 100%;
  left: 0;
  height: 560px;
  margin-top: 54px;
  padding-top: 60px;
  background: #F4F7FF;

  .slider {

    .carousel-3d-container {
      .carousel-3d-slider {
        .carousel-3d-slide {
          border-radius: 10px;
          border: 0.5px solid #BDBDBD;

          img {
            width: 100%;
            object-fit: cover;
          }
        }
      }

      figure {
        margin: 0;
      }

      figcaption {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        bottom: 0;
        position: absolute;
        bottom: 0;
        padding: 15px;
        font-size: 12px;
        min-width: 100%;
        box-sizing: border-box;
      }
    }
  }

  .news-blog {
    width: 100%;
    height: auto;
    margin-top: 60px;
  }
}

.categories-slider {
  width: 100%;
  left: 0;
  height: 470px;
  margin-top: 54px;
  padding-top: 60px;
  background: #F4F7FF;

  .slider {

    .carousel-3d-container {
      .carousel-3d-slider {

        .carousel-3d-slide {
          width: 350px !important;
          border-radius: 10px;
          border: 0.5px solid #BDBDBD;

          a {
            font-size: 14px;
            color: white;
          }

          img {
            width: 100%;
            object-fit: cover;
          }
        }
      }

      figure {
        margin: 0;
      }

      figcaption {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        bottom: 0;
        position: absolute;
        bottom: 0;
        padding: 15px;
        font-size: 12px;
        min-width: 100%;
        box-sizing: border-box;
      }
    }
  }

  .category-blog {
    width: 100%;
    height: auto;
    margin-top: 60px;
  }
}

.review {
  margin-top: 54px;

  .review-blog {
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    justify-content: space-between;

    .review-cart {
      width: 30%;
      height: 175.37px;
      background: $white-color;
      margin: 30px auto;

      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;

      border: 1px solid #F4F7FF;
      box-sizing: border-box;
      box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.11), -5px 0px 10px rgba(0, 0, 0, 0.11);
      border-radius: 10px;

      p {
        padding: 0 40px;
        margin: 0;
        font-size: 14px;
        font-weight: $regular;
        line-height: 24px;
        letter-spacing: 0.03em;
        color: #333333;
      }

      .ion-avatar {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -30px;
        text-align: center;
        z-index: 1;

        img {
          width: 62px;
          height: 62px;
          margin: 0 auto;
        }

        p {
          height: 0;
          font-size: 14px;
          font-weight: $regular;
          line-height: 24px;
          letter-spacing: 0.03em;
          color: #333333;
        }
      }
    }
  }
}

@media screen and (min-width: 1904px) {
  .container {
    max-width: 1185px;
  }
}

@media screen and (max-width: 768px) {
  .name {
    p {
      font-size: 30px;
    }
  }
  .sports-area {
    margin-top: 54px;

    .sport-area-blog {
      .col-sm-4 {
        flex: 0 0 50%;
        max-width: 50%;
      }
    }
  }
  .review {
    .review-blog {
      .review-cart {
        width: 45%;
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .name {
    p {
      font-size: 25px;
    }
  }
  .more {
    a {
      font-size: 13px;
    }
  }

  .big-buttons {
    margin-top: -68px;

    .col-sm-4 {
      width: 33.333333%;
      padding: 0 9px;
    }

    .big-button {
      height: auto;
      padding-top: 10px;

      img {
        height: 50px !important;
      }

      p {
        width: 70px;
        font-size: 14px;
        height: auto;
      }
    }
  }
  .sports-area {
    margin-top: 30px;

    .sport-area-blog {
      .col-sm-4 {
        flex: 0 0 100%;
        max-width: 100%;
      }
    }
  }

  .news-slider {
    margin-top: 30px;
    padding-top: 37px;
    height: 525px;

    .news-blog {
      margin-top: 30px;
    }
  }

  .categories-slider {
    margin-top: 30px;
    padding-top: 37px;
    height: 400px;

    .category-blog {
      margin-top: 30px;
    }
  }

  .review {
    margin-top: 30px;

    .review-blog {
      margin-top: 0;

      .review-cart {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 410px) {
  .news-slider {
    height: 470px;
  }

  .categories-slider {
    height: 400px;
  }
}
</style>
