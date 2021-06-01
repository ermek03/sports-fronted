import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
  apiKey: process.env.YANDEX_API_KEY,
  lang: 'ru_RU',
  version: '2.1',
  coordorder: 'latlong'
} // настройки плагина

Vue.use(YmapPlugin, settings);
