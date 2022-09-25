const mainPage = {
  navbar: {
    tvSeries: {
      name: 'TV Series',
      link: '/tvseries',
      submenus: {
        topRated: this.link + '/toprated', 
        trending: this.link + '/trending',
        new: this.link + '/new',
        byGenre: this.link + '/genre',
        customFilter: this.link + '/custom-filter'
      }
    },
    movies: {
      name: 'Movies',
      link: '/movies',
      submenus: {
        byYear: this.link + '/byYear',
        byActor: this.link + '/byActor',
        byDirector: this.link + '/byDirector',
        byGenre: this.link + '/genre',
        customFilter: this.link + '/custom-filter'
      }
    },
    cartoons: {
      name: 'Cartoons',
      link: '/cartoons',
      submenus: {
        byYear: this.link + '/byYear',
        byActor: this.link + '/byActor',
        byDirector: this.link + '/byDirector',
        byGenre: this.link + '/genre',
        customFilter: this.link + '/custom-filter'
      }
    }
  }
}

module.exports = {mainPage};

console.log(mainPage.navbar.tvSeries);