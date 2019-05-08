//jQuery UI for selection dropdown
$(document).ready(function () {
  $('#to-top').addClass('hide');

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
    //continued jQuery UI for genre selction dropdown
    $("#genre")
      .selectmenu()
      .selectmenu("menuWidget")
      .addClass("overflow");
  });
  //Search tmdb data with button click to get results
  $("#movie-button").on("click", function (e) {
    e.preventDefault();
    //empty to prevent validation from appending to titles after search
    $('#movie-titles').empty();
    $('#movies').empty();
    // emptying the results

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
      // Validation if user selection returns no results
      if(data.results.length === 0){
         $('#to-top').addClass('hide');
        // let user know that there is no movies
        $("#movie-titles").append("<h3>No results, Please make new selections!");
        
        // return so selections are needed before another search is done
        return;
      }

      // limit results to 5
      var results = data.results.slice(0, 5);
 
      // console.log(data.results)
      $('#to-top').removeClass('hide');

      results.forEach(function (movie) { 
        // ajax call for data to show gif based on title
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie.title + "&api_key=dZ3DvkFrBrsASzC1EK3wYeA4yOHnTllQ";
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function (response) {

          // Creating a div to hold the movie
          console.log(response);
          // appending search results with anchor tag for scroll to overview and gif  
          $("#movie-titles").append('<div class="spacer"><a href="#'+movie.id+'">' + movie.title + '</a></div>');

          // build our row
          var $row = $("<div class='row movie-container' id='"+movie.id+"'>");

          // add our movie content to the newly created row
          $row.append('<div class="col-sm-6"><h1>' + movie.title + '</h1><p>' + movie.overview + '</p> <h3><p>' + "Moms score out of 10: " + movie.vote_average + '</p></h3></div>');

          $row.append('<div class="col-sm-6"><img class="movie-giff img-fluid rounded fixed-right" src="' + response.data[0].images.original.url + '"></div>');
          // Setting the src attribute of the image to a property pulled off the result item.

          // append row to #movies div
          $("#movies").append($row);
        });
      });

    });
  });
});
