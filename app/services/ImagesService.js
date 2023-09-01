import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";



class ImagesService {
  async getImages() {
    let res = await api.get('api/images')

    AppState.randomImage = res.data
  }
}
export const imagesService = new ImagesService()