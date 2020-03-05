function displayMovie() {
  $("#MovieTitle").html(movie["title"]);
  $("#MovieDirector").html(movie["director"]);
  $("#MovieGenre").html(movie["genre"]);
}
function getMovie() {
  let params = new URLSearchParams(window.location.search);
  movieId = params.get("movieId");
  $.ajax({
      url: 'https://localhost:44325/api/movie/' + movieId,
      dataType: 'json',
      type: 'get',
      contentType: 'application/json',
      success: function (data) {
          movie = data;
          displayMovie();
      }
  });
}
var movie;
function putMovie() {
  $.ajax({
      url: "https://localhost:44325/api/movie/",
      type: "put",
      dataType: "text",
      data: JSON.stringify(movie),
      contentType: "application/json",
      success: function () {
          displayMovie();
      }
  });
};
$(document).ready(getMovie);