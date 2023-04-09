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
          const response = await fetch(`http://localhost:5050/api/movie/animated`);
          const data = await response.json();
          this.moviesByGenre[0] = data.data.results;
        } catch (error) {
          console.error(error);
        }
      },
    },
    template: `
      <div>
        <h1>The Kids Home Component</h1>
        <div v-if="moviesByGenre[0]">
          <h2>Animated Movies</h2>
          <ul>
            <div style="display: flex; flex-wrap:wrap;">
              <div
                v-for="movie in moviesByGenre[0]"
                :key="movie.id"
                style="
                  flex: 0 0 auto;
                  margin-right: 10px;
                  width: 300px;
                  border: 1px solid #ccc;
                  padding: 10px;
                "
              >
                <h4>{{ movie.title }}</h4>
                <img
                  :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
                  :alt="movie.title"
                  style="max-width: 100%; height: auto; margin-bottom: 10px;"
                />
                <p>{{ movie.overview }}</p>
                <p><strong>Popularity:</strong> {{ movie.popularity }}</p>
              </div>
            </div>
          </ul>
        </div>
      </div>
    `,
  };  