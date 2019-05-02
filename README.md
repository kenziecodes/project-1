# Project-1
## Project title
Mom's movies
## Team members
Mackenzie Roberts
kenziecodes
Bryce Rippey
scroobi
Jordan Stephens
jcs5317
## Project description
Mom's movies is a one stop shop for picking a movie. Our application will allow the user to search by genre, decade, and by rating
we plan to display 5 movie titles as search results then go into greater detail about each movie. we want to add a scrolling featture so when you click on each movie title it brings you to some more in depth information about it.
example of the format each movie will be in
Movie title
TMDB information: genre, rating, description, popularity
rotten tomatoes information
then we will display either a preview or a gif depending on how difficult the implementation is of each. 
## Sketch of final product
heading "Mom's Movies"
genre, year and rating forum to search for desired criteria
next to that wll be the 5 movie titles that their search returns
underneath that will display each title and informatioin from TMDB
**sketch is on paper!!**
## APIs to be used
TMDB
https://api.themoviedb.org/3/movie/550?api_key=605fb8e2ccd3028b0de23babc676329e
Rotten Tomatoes
Giphy
//javascript, jQuery
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
xhr.done(function(data) { console.log("success got data", data); });
my API key
1lQHsuUDCMrbyRsZgOW4Hpi6ug0A6kCT
and/or Youtube
## Rough breakdown of tasks
### very very rough
- [] make a sketch
- [] make a bootstrap layout
- [] set up all our variables
- [] research jquery UI to implement in the decade dropdown
- [] obtain API keys for all 3 APIs
- [] link in and get TMDB functioning
- [] link in and get Rotten Tomatoes functioning
- [] link in and get Giphy functioning

