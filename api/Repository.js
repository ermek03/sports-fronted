import SliderRepository from "@/api/SliderRepository";
import SportAreasRepository from "@/api/SportAreasRepository";
import CategoryRepository from "@/api/CategoryRepository";
import NewsRepository from "@/api/NewsRepository";

export default ($axios, app) => ({
  slider: SliderRepository($axios, app),
  feedback: SliderRepository($axios, app),
  sport_area: SportAreasRepository($axios, app),
  category: CategoryRepository($axios, app),
  news: NewsRepository($axios, app),
})
