
class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of Movie class
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Example array of Movie instances
const movies = [
    new Movie("Movie 1", "Studio 1", "PG"),
    new Movie("Movie 2", "Studio 2", "R"),
    new Movie("Movie 3", "Studio 3", "PG-13"),
    new Movie("Movie 4", "Studio 4", "PG"),
    new Movie("Movie 5", "Studio 5", "G"),
];

// Using the getPG static method to filter movies with rating "PG"
const pgMovies = Movie.getPG(movies);
console.log(pgMovies);

