function displayMovieInfo(){
var genre = ""

var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=605fb8e2ccd3028b0de23babc676329e&with_genres=" + 28 + "&primary_release_year=" + 2018 + "&certification_country=US&certification=" + R + "&sort_by=popularity.desc";

var test = "/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10";

$.ajax ({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response)
})

/*var baseURL = "https://api.themoviedb.org/"
var configData = "";
var base = "";

var getCongif = function () {
    var url
}*/