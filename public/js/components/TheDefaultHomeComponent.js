export default {
    name: "TheDefaultHomeComponent",
    data() {
      let genres = null;
      let moviesByGenre = {};
      return {
        genres,
        moviesByGenre,
      };
    },
    created() {
      this.fetchGenres();
    },
    methods: {
      async fetchGenres() {
        try {
          const response = await fetch("http://localhost:5050/api/movie/get-genres");
          const data = await response.json();
          this.genres = data.data.genres;
          await this.fetchMoviesByGenre();
        } catch (error) {
          console.error(error);
        }
      },
      async fetchMoviesByGenre() {
        for (const genre of this.genres) {
          try {
            const response = await fetch(`http://localhost:5050/api/movie/movie-genre/${genre.id}`);
            const data = await response.json();
            this.moviesByGenre[genre.id] = data.data.results;
          } catch (error) {
            console.error(error);
          }
        }
      },
    },
    template: `
    <div>
      <h1>The Default Home Component</h1>
      <div v-if="genres">
        <h2>Genres</h2>
        <ul>
          <li v-for="genre in genres" :key="genre.id">
            <h3>{{ genre.name }}</h3>
            <div style="display: flex; overflow-x: scroll;">
              <div v-for="movie in moviesByGenre[genre.id]" :key="movie.id" style="flex: 0 0 auto; margin-right: 10px; width: 300px; border: 1px solid #ccc; padding: 10px;">
                <h4>{{ movie.title }}</h4>
                <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" :alt="movie.title" style="max-width: 100%; height: auto; margin-bottom: 10px;">
                <p>{{ movie.overview }}</p>
                <p><strong>Popularity:</strong> {{ movie.popularity }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    `,
  };
  