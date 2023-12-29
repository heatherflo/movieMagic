import { logger } from "../utils/Logger"
import { movieApi } from "./AxiosService"


class MoviesService {

  async getMovies() {
    const response = await movieApi.get('discover/movie')
    logger.log('GOT movies', response.data)
  }


}

export const moviesService = new MoviesService()