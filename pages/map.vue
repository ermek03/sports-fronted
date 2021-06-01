<template>
  <section>
    <Banner :data="{title:'Находите спортивные площадки', sub_title:'Cпортивные площадки на карте' , image: '/img/banner.jpg'}"></Banner>
    <div class="container">
      <div class="sports-area">
        <div class="sport-area-blog">
          <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-3">
              <div class="filter-block">
                <select class="form-control" v-model="filterParams.category" @change="getDataPagination">
                  <option value="" selected="selected">Выберите вид спорта</option>
                  <option v-for="category in $store.getters['categories/categories']" :value="category.id" :key="category.id">{{ category.title }}</option>
                </select>

                <div class="filter-card">
                  <h3>Цена</h3>
                  <div class="form-group m-t-15">
                    <label for="From">От</label>
                    <input type="number" class="form-control" id="From" placeholder="0" v-model="filterParams.price_min" @input="getDataPagination">
                  </div>
                  <div class="form-group m-b-24">
                    <label for="Before">До</label>
                    <input type="number" class="form-control" id="Before" placeholder="0" v-model="filterParams.price_max" @input="getDataPagination">
                  </div>
                </div>

                <div class="filter-card" v-if="getSelectedType && getSelectedType.types.length >0">
                  <h3>Вид поля</h3>
                  <div class="form-check" :class="{ 'm-b-24': index === getSelectedType.types.length - 1}" v-for="(type,index) in getSelectedType.types" :key="type.id">
                    <input class="form-check-input" type="checkbox" :value="type.id" v-model.lazy="filterParams.type" :id="'defaultCheck-'+type.id"
                           @change="getDataPagination()">
                    <label class=" form-check-label" :for="'defaultCheck-'+type.id">
                      {{ type.title }}
                    </label>
                  </div>
                </div>

                <div class="filter-card" v-if="getSelectedType && getSelectedType.infrastructures.length > 0">
                  <h3>Инфраструктура</h3>
                  <div class="form-check" :class="{ 'm-b-24': index === getSelectedType.infrastructures.length - 1}"
                       v-for="(infrastructure,index) in getSelectedType.infrastructures" :key="infrastructure.id">
                    <input class="form-check-input" type="checkbox" :value="infrastructure.id" v-model.lazy="filterParams.infrastructure" :id="infrastructure.id"
                           @change="getDataPagination()">
                    <label class="form-check-label" :for="infrastructure.id">
                      {{ infrastructure.title }}
                    </label>
                  </div>
                </div>
                <div class="filter-button">
                  <button @click="clearForm">Очистить</button>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-8 col-lg-9">
              <div class="flex-w">
                <div class="m-t-5 m-b-24">
                  <input type="text" class="form-control sports-area-search" placeholder="Кг спорт" v-model="filterParams.search" @input="getDataPagination">
                </div>
              </div>


              <div class="row">
                <yandex-map class="m-t-24"
                            :coords="coords"
                            zoom="12"
                            style="width: 100%; height: 60vh;"
                >

                  <ymap-marker v-for="(area,key) in areas" v-bind:key="key"
                               :marker-id="key"
                               marker-type="placemark"
                               :coords="[area.latitude, area.longitude]"
                               :hint-content="area.address"
                               :balloon="{header: area.title, body: area.price + ' сом', footer: area.address}"
                               :icon="{layout: 'default#image', imageHref: '/img/marker.png', imageSize: [26, 30], imageOffset: [-12, -30]}"
                  ></ymap-marker>

                </yandex-map>

              </div>

              <Pagination :objects="areas" :current_page="paginationParams.page" @pageChanged="paginationParams.page = $event"
                          :getData="getData"></Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Banner from '@/components/Banner'
import Pagination from '@/components/core/Pagination'

export default {
  name: "sport-areas",

  components: {
    Banner, Pagination
  },
  data() {
    return {
      areas: [],
      paginationParams: {
        page: 1,
        per_page: 9,
      },
      filterParams: {
        search: "",
        category: "",
        type: [],
        infrastructure: [],
        price_min: '',
        price_max: ''
      },
      coords: [
        42.876366, 74.603710
      ],
    }
  },
  watch: {
    pagination: {
      handler() {
        this.getData();
      },
      deep: true
    }
  },
  methods: {
    async getData() {
      const filterParams = Object.assign({}, this.filterParams)
      filterParams.infrastructure = await filterParams.infrastructure.toString()
      filterParams.type = await filterParams.type.toString()
      const params = await Object.assign({}, this.paginationParams, filterParams)
      this.areas = await this.$repositories.sport_area.in_map(params)
    },
    async getDataPagination() {
      this.paginationParams.page = 1
      await this.getData()
    },
    clearForm() {
      this.filterParams = {
        search: "",
        category: "",
        type: [],
        infrastructure: [],
        price_min: '',
        price_max: ''
      }
      this.getDataPagination()
    }
  },
  computed: {
    getSelectedType() {
      let type = null
      this.$store.getters["categories/categories"].forEach(obj => {
        if (obj.id === this.filterParams.category) {
          type = obj
        }
      })
      return type
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
@import "assets/scss/main.scss";

.sports-area-search {
  width: 100%;
}

.filter-block {
  .form-control {
    width: 100%;
    height: auto;
    background: #FFFFFF;
    border: 0.5px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 10px;
    margin-top: 7px;
  }

  .filter-card {
    width: 100%;
    height: auto;
    background: #FFFFFF;
    border: 0.5px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 24px;
    margin-top: 24px;

    h3 {
      font-style: normal;
      font-weight: $medium;
      font-size: 16px;
      line-height: 14px;
      letter-spacing: 0.2px;
      color: #000000;
      padding-top: 24px;
      padding-left: 48px;
    }

    .form-check {
      padding-top: 13px;
      left: 48px;
      padding-bottom: 2px;

      .form-check-input {
        zoom: 1.5;
        margin-top: 0;
        margin-left: -0.7rem;
      }

      .form-check-label {
        font-style: normal;
        font-weight: $regular;
        font-size: 14px;
        letter-spacing: 0.2px;
        color: #000000;
        padding-left: 10px;
      }
    }

    .form-group {
      padding-top: 5px;
      padding-left: 48px;

      label {
        font-weight: $regular;
        font-size: 14px;
        line-height: 14px;
        letter-spacing: 0.2px;
        color: #000000;
      }

      .form-control {
        width: 80% !important;
        border: 0.5px solid #828282;
        box-sizing: border-box;
        border-radius: 4px;
      }
    }
  }

  .filter-button {
    button {
      height: 44px;
      width: 100%;
      background: #F46D6D;
      box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.11), -2px 0px 5px rgba(0, 0, 0, 0.11);
      border-radius: 6px;
      color: $white-color;
      font-weight: 500;
      font-size: 14px;
      line-height: 150%;
      letter-spacing: 0.01em;
    }

    button:focus {
      outline: 0;
      box-shadow: none !important;
    }
  }
}

.flex-sb-m {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex-w {
  .form-control {
    height: 40px !important;
    background: #FFFFFF;
    border: 0.5px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 10px;

    font-weight: $regular;
    font-size: 16px;
    color: #000000;
  }
}
</style>
