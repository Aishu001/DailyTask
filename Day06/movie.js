//my version

class Movie {
    constructor(title, studio, rating) {
      this.MovieTitle = title;
      this.ProdcionName = studio;
      this.PublicReview = rating === "" ? "PG" : rating;
    }
  
    getPG() {
      return this.filteredArr.filter((movie) => movie.rating === "PG");
    }
  }
  
  let film = new Movie("Casino Royale", "Enon Production", "");
  film.filteredArr = [
    {
      title: "Title 1",
      studio: "Studio 1",
      rating: "PG"
    },
    {
      title: "Title 2",
      studio: "Studio 2",
      rating: "R"
    },
    {
      title: "Title 3",
      studio: "Studio 3",
      rating: "PG"
    }
  ];
  
  console.log(film.getPG());
  