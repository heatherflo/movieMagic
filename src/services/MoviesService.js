

class MoviesService {

  async getMovies() {
    const response = await movieApi.get('discover/movie')
  }


}

export const moviesService = new MoviesService()