class MoviesController < ApplicationController

    def index
        movies = HTTParty.get('https://api.themoviedb.org/3/movie/now_playing?api_key=6b33e99e61919cabb1e978409b10470d&language=en-US&page=1')
        # byebug
        render :json => movies["results"]
    end
end
