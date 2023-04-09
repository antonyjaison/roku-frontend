export default {
  name: "TheDefaultHomeComponent",
  data() {
    let moviesByGenre = {};
    return {
      moviesByGenre,
    };
  },
  created() {
    this.fetchMovies();
  },
  methods: {
    async fetchMovies() {
      try {
        const response = await fetch(
          `http://localhost:5050/api/movie/animated`
        );
        const data = await response.json();
        console.log(data);
        this.moviesByGenre[0] = data.data.results;
      } catch (error) {
        console.error(error);
      }
    },
    
  },
  template: `
      <div class="kids_wrapper">
        <div v-if="moviesByGenre[0]">
          <h2>Animated Movies</h2>
            <div class="movies">
              <div
                v-for="movie in moviesByGenre[0]"
                :key="movie.id"
              >
                <img
                  :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
                  :alt="movie.title"
                  style="max-width: 100%; height: auto; margin-bottom: 10px;"
                />
                <h4>{{ movie.title }}</h4>
                <p><strong>Rating:</strong> {{ movie.vote_average }}</p>
                <button>Play</button>
              </div>
            </div>
        </div>
      </div>
    `,
};
