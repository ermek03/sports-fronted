<template>
  <section>
    <div class="container">
      <div class="row" v-if="area !== null">
        <div class="col-12">
          <h4 class="m-b-5 w-100">{{ area.title }}</h4>
        </div>
        <div class="col-sm-12 col-md-7 col-lg-7">
          <div class="thumb-example">
            <!-- swiper1 -->
            <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
              <swiper-slide class="slide-3" :style="'background-image:url(' + area.image + ')'"></swiper-slide>
              <swiper-slide class="slide-3" v-for="gallery in area.galleries" :key="gallery.id" :style="'background-image:url(' + gallery.image + ')'"></swiper-slide>
              <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
              <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            </swiper>
            <!-- swiper2 Thumbs -->
            <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
              <swiper-slide class="slide-1" :style="'background-image:url(' + area.image + ')'"></swiper-slide>
              <swiper-slide class="slide-1" v-for="gallery in area.galleries" :key="gallery.id" :style="'background-image:url(' + gallery.image + ')'"></swiper-slide>
            </swiper>
          </div>
        </div>

        <div class="col-sm-12 col-md-5 col-lg-5">
          <div class="right-sight-item">
            <h5> {{ area.price }} cом/час</h5>
          </div>
          <div class="right-sight-item">
            <div class="right-sight-item-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="place_24px">
                  <path id="icon/maps/place_24px" fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM7 9C7 6.24 9.24 4 12 4C14.76 4 17 6.24 17 9C17 11.88 14.12 16.19 12 18.88C9.92 16.21 7 11.85 7 9ZM9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C12.8932 6.5 13.7185 6.9765 14.1651 7.75C14.6116 8.5235 14.6116 9.4765 14.1651 10.25C13.7185 11.0235 12.8932 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9Z"
                        fill="#333333"/>
                </g>
              </svg>
              <h6>{{ area.address }}</h6>
            </div>
            <div class="right-sight-item-icon" v-for="insfrastructure in area.infrastructure" :key="insfrastructure.id">
              <img class="insfrastructure-img" :src="insfrastructure.image" :alt="insfrastructure.title">
              <p>{{ insfrastructure.title }}</p>
            </div>
          </div>
          <div class="right-sight-item">
            <div class="right-sight-item-icon" v-if="area.phone_1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="local_phone_24px">
                  <path id="icon/maps/local_phone_24px" fill-rule="evenodd" clip-rule="evenodd"
                        d="M4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.61 14.99 15.86 14.89 16.12 14.89C16.22 14.89 16.33 14.9 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3ZM6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02Z"
                        fill="#333333"/>
                </g>
              </svg>
              <a :href="'tel:' + area.phone_1">{{ area.phone_1 }}</a>
            </div>
            <div class="right-sight-item-icon" v-if="area.phone_2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="local_phone_24px">
                  <path id="icon/maps/local_phone_24px" fill-rule="evenodd" clip-rule="evenodd"
                        d="M4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.61 14.99 15.86 14.89 16.12 14.89C16.22 14.89 16.33 14.9 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3ZM6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02Z"
                        fill="#333333"/>
                </g>
              </svg>
              <a :href="'tel:' + area.phone_2">{{ area.phone_2 }}</a>
            </div>
          </div>
          <div class="right-sight-item">
            <div class="right-sight-item-icon">
              <p class="m-0 m-r-10">Соцсети:</p>

              <a :href="'https://wa.me/' + area.whats_app_phone" v-if="area.whats_app_phone" target="_blank">
                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" class="m-r-10">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M18.5 37C28.7173 37 37 28.7173 37 18.5C37 8.28273 28.7173 0 18.5 0C8.28273 0 0 8.28273 0 18.5C0 28.7173 8.28273 37 18.5 37Z" fill="#25D366"/>
                  <path
                    d="M24.498 20.382C24.197 20.232 22.731 19.515 22.458 19.416C22.185 19.315 21.985 19.266 21.785 19.566C21.588 19.861 21.014 20.53 20.841 20.728C20.666 20.923 20.492 20.938 20.195 20.803C19.895 20.653 18.932 20.338 17.792 19.318C16.904 18.523 16.308 17.548 16.132 17.248C15.958 16.948 16.113 16.783 16.262 16.633C16.398 16.498 16.563 16.288 16.713 16.11C16.859 15.929 16.907 15.809 17.01 15.614C17.11 15.404 17.059 15.239 16.985 15.09C16.91 14.94 16.313 13.47 16.063 12.884C15.823 12.3 15.576 12.374 15.391 12.374C15.219 12.359 15.02 12.359 14.82 12.359C14.62 12.359 14.297 12.433 14.023 12.718C13.75 13.018 12.978 13.738 12.978 15.193C12.978 16.648 14.048 18.058 14.197 18.268C14.346 18.463 16.302 21.463 19.297 22.753C20.011 23.053 20.567 23.233 21.001 23.382C21.715 23.609 22.366 23.577 22.881 23.503C23.455 23.412 24.648 22.782 24.897 22.077C25.152 21.372 25.152 20.787 25.077 20.652C25.003 20.517 24.807 20.442 24.507 20.307L24.498 20.382ZM19.061 27.75H19.045C17.275 27.75 15.521 27.27 13.99 26.37L13.63 26.156L9.88 27.131L10.885 23.486L10.646 23.111C9.656 21.535 9.13 19.72 9.13 17.851C9.13 12.406 13.585 7.966 19.072 7.966C21.726 7.966 24.217 9.001 26.093 10.876C27.968 12.735 29.002 15.226 29.002 17.866C28.998 23.31 24.542 27.751 19.067 27.751L19.061 27.75ZM27.52 9.449C25.24 7.245 22.24 6 19.045 6C12.463 6 7.104 11.334 7.101 17.893C7.101 19.989 7.65 22.033 8.696 23.838L7 30L13.335 28.348C15.081 29.291 17.045 29.792 19.045 29.795H19.051C25.636 29.795 30.997 24.459 31 17.899C31 14.723 29.76 11.734 27.505 9.488"
                    fill="white"/>
                </svg>
              </a>
              <a :href="'https://www.instagram.com/' + area.instagram +'/'" v-if="area.instagram" target="_blank">
                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                    <path
                      d="M18.5 36.999C28.7172 36.999 37 28.7163 37 18.499C37 8.28176 28.7172 -0.000976562 18.5 -0.000976562C8.28273 -0.000976562 0 8.28176 0 18.499C0 28.7163 8.28273 36.999 18.5 36.999Z"
                      fill="url(#paint0_linear)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M18.5 24.2821C15.3395 24.2821 12.7681 21.7107 12.7681 18.5498C12.7681 15.3894 15.3395 12.8179 18.5 12.8179C21.6609 12.8179 24.2323 15.3894 24.2323 18.5498C24.2323 21.7104 21.6605 24.2821 18.5 24.2821ZM15.1899 18.5494C15.1899 16.725 16.6755 15.2401 18.5 15.2401C20.3249 15.2401 21.8098 16.7253 21.8098 18.5494C21.8098 20.3748 20.3253 21.8599 18.5 21.8599C16.6755 21.8599 15.1899 20.3748 15.1899 18.5494Z"
                          fill="white"/>
                    <path
                      d="M24.4167 14.0032C23.6685 14.0032 23.0601 13.3948 23.0601 12.647C23.0601 11.8992 23.6685 11.2908 24.4167 11.2908C25.1644 11.2908 25.7729 11.8992 25.7729 12.647C25.7729 13.3948 25.1644 14.0032 24.4167 14.0032Z"
                      fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M29.6282 24.0637C29.6282 27.16 27.1099 29.6782 24.0137 29.6782H12.986C9.89024 29.6782 7.37158 27.16 7.37158 24.0637V13.0361C7.37158 9.94028 9.89024 7.42163 12.986 7.42163H24.0137C27.1099 7.42163 29.6282 9.94028 29.6282 13.0361V24.0637ZM24.0137 9.8438H12.986C11.2258 9.8438 9.79376 11.2759 9.79376 13.0361V24.0637C9.79376 25.8239 11.2258 27.2564 12.986 27.2564H24.0137C25.7739 27.2564 27.2063 25.8244 27.2063 24.0637V13.0361C27.2063 11.2759 25.7742 9.8438 24.0137 9.8438Z"
                          fill="white"/>
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear" x1="-1.57498e-07" y1="36.9994" x2="37" y2="-0.000644484" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#DC5441"/>
                      <stop offset="1" stop-color="#D81DA3"/>
                    </linearGradient>
                    <clipPath id="clip0">
                      <rect width="37" height="37" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="col-7">
          <p class="stadium-description"> {{ area.text }}</p>
        </div>

        <div class="col-12">
          <yandex-map class="m-t-24"
                      :coords="coords"
                      zoom="12"
                      style="width: 100%; height: 60vh;"
          >

            <ymap-marker
              :marker-id="1"
              marker-type="placemark"
              :coords="[ area.latitude, area.longitude ]"
              :hint-content="area.address"
              :balloon="{header: area.title, body: area.price + ' сом', footer: area.address}"
              :icon="{layout: 'default#image', imageHref: '/img/marker.png', imageSize: [26, 30], imageOffset: [-12, -30]}"
            ></ymap-marker>

          </yandex-map>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: "sport-area-detail",

  components: {
    Swiper,
    SwiperSlide
  },

  data() {
    return {
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      },

      area: null,
      coords: [
        42.876366, 74.603710
      ],
    }
  },
  methods: {
    async getData() {
      this.area = await this.$repositories.sport_area.detail(this.$route.params.id)
    }
  },
  async mounted() {
    await this.getData()
    await this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop

    })
  }
}
</script>

<style lang="scss" scoped>
@import "assets/scss/main.scss";

.thumb-example {
  height: 480px;
  background-color: black;
}

.stadium-description {
  line-height: 150%;
  letter-spacing: 0.2px;
}

.right-sight-item {
  padding: 16px 0;
  border-bottom: 1px solid #C4C4C4;

  .right-sight-item-icon {
    display: flex;
    margin: 8px 0;
    align-items: center;

    p {
      margin-left: 16px;
      margin-bottom: 0;
    }

    h6 {
      margin-left: 16px;
    }

    a {
      margin-left: 16px;
    }

    .insfrastructure-img {
      height: 20px;
    }
  }

  h5 {
    margin: 0;
  }
}

.swiper {
  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  &.gallery-top {
    height: 75%;
    width: 100%;
  }

  &.gallery-thumbs {
    height: 25%;
    box-sizing: border-box;
    padding: 20px 0;
  }

  &.gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }

  &.gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
}

@media screen and (min-width: 1904px) {
  .container {
    max-width: 1185px;
  }
}
</style>


