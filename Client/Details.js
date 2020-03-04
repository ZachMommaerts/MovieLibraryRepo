function getMovieFromDatabase(){
    var urlParams = new URLSearchParams(window.location.search);
    var movieId = urlParams.get('movieId');
  
    $.ajax({
      url: 'https://localhost:44325/api/movie',
      dataType: 'json',
      type: 'GET',
      contentType: 'application/json',
      data: JSON.stringify,
      movie = data,
  
    })
    return movieId;
  }
  
  function showMovieDeets(){
    document.getElementById("titler").innerHTML = movie.title;
    document.getElementById("genrer").innerHTML = movie.genre;
    document.getElementById("directorr").innerHTML = movie.director;
  }
  