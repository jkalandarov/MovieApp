const mainPage = {
  navbar: {
    tvSeries: {
      name: 'TV Series',
      link: '/tvseries',
      submenus: {
        topRated: '/tvseries/toprated', 
        trending: '/tvseries/trending',
        new: '/tvseries/new',
        byGenre: '/tvseries/byGenre',
        customFilter: '/tvseries/custom-filter'
      }
    },
    movies: {
      name: 'Movies',
      link: '/movies',
      submenus: {
        byYear: '/movies/byYear',
        byActor: '/movies/byActor',
        byDirector: '/movies/byDirector',
        byGenre: '/movies/genre',
        customFilter: '/movies/custom-filter'
      }
    },
    cartoons: {
      name: 'Cartoons',
      link: '/cartoons',
      submenus: {
        byYear: '/cartoons/byYear',
        byActor: '/cartoons/byActor',
        byDirector: '/cartoons/byDirector',
        byGenre: '/cartoons/genre',
        customFilter: '/cartoons/custom-filter'
      }
    }
  }
}

module.exports = {mainPage};
