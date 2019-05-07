//jQuery UI for select function
$(document).ready(function () {
  var $genre = $("#genre");
  var $year = $("#year");
  var $rating = $("#rating");
  $year
    .selectmenu()
    .selectmenu("menuWidget")
    .addClass("overflow");
  $rating
    .selectmenu()
    .addClass("overflow");
  // this is the ajax call for the tmdb API
  $.ajax({
    url:
      "https://api.themoviedb.org/3/genre/movie/list?api_key=605fb8e2ccd3028b0de23babc676329e&language=en-US",
    method: "GET"
  }).then(function (data) {
    data.genres.forEach(function (genre) {
      var $option = $("<option value='" + genre.id + "'>").text(
        genre.name
      );
      $("#genre").append($option);
    });
    $("#genre")
      .selectmenu()
      .selectmenu("menuWidget")
      .addClass("overflow");
  });
  //Search tmdb data with button click to get results
  $("#movie-button").on("click", function (e) {
    e.preventDefault();
    var genreId = $("#genre").val();
    var yearToSearch = $('.select-year > select').val() || '2019';
    var ratingToSearch = $('.select-rating > select').val();
    var genreUrl =
      "https://api.themoviedb.org/3/discover/movie?api_key=605fb8e2ccd3028b0de23babc676329e&with_genres=" +
      genreId +
      "&primary_release_year=" + yearToSearch + "&certification_country=US&certification=" + ratingToSearch + "&sort_by=popularity.desc";
    $.ajax({
      url: genreUrl,
      method: "GET"
    }).then(function (data) {
      console.log(data.results)


      // If results is empty prompt the user?


      // limit results to 5
      var results = data.results.slice(0, 5);
      // emptying the results
      $('#movie-titles').empty();
      $('#movies').empty();
      console.log(data.results)
      results.forEach(function (movie) {

        // bryce
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + movie.title + "&api_key=dZ3DvkFrBrsASzC1EK3wYeA4yOHnTllQ";
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function (response) {

          // Creating a div to hold the movie
          console.log(response);


          // appending search results
          $("#movie-titles").append('<div><h1>' + movie.title + '</h1></div>');

          // build our row
          var $row = $("<div class='row'>");

          // add our movie content to the newly created row
          $row.append('<div class="col-sm-6"><h1>' + movie.title + '</h1></div>', '<p>' + movie.overview + '</p>');
          $row.append('<div class="col-sm-6"><img class="rounded fixed-right" src="' + response.data[0].images.original.url + '"></div>');
          // Setting the src attribute of the image to a property pulled off the result item. Variable needed for img to still and animate on click?

          // append row to #movies div
          $("#movies").append($row);
        });

      });

    });
  });
});
