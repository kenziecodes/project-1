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
<script>
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.themoviedb.org/3/search/multi?include_adult=false&page=1&language=en-US&api_key=605fb8e2ccd3028b0de23babc676329e",
  "method": "GET",
  "headers": {},
  "data": "{}"
}
// $.ajax(settings).done(function (response) {
  console.log(response);

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/search/keyword?page=1&api_key=605fb8e2ccd3028b0de23babc676329e",
    "method": "GET",
    "headers": {},
    "data": "{}"
  }
  // $.ajax(settings).done(function (response) {
    console.log(response);

    //what are the best dramas
    "URL: /discover/movie ? with_genres = 18 & sort_by=vote_average.desc & vote_count.gte=10"
    <label for="year">Select a Year</label>
    <select name="year" id="year"></select>
  </fieldset>
  <button id="movie-button">Submit!</button>
</form>
</div>
</div>

</script>