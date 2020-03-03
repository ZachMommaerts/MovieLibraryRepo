(function($){
    function processForm( e ){
        var dict = {
            
        	Title : this["Title"].value,
            Director: this["Director"].value,
            Genre: this["Genre"].value
        };

        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }
    $('#my-form').submit( processForm );
})(jQuery); 

(function($){
    function processForm( e ){
        var dict = {
            
        	Title : this["Title"].value,
            Director: this["Director"].value,
            Genre: this["Genre"].value
        };

        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'GET',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $(selectedMovie) = data.filter(function(el){
                    return (el.Title == dict.Title || el.Director == dict.Director || el.Genre == dict.Genre)
                });
                $(document).ready(function() {
                    var movie_data = "";
                    $.getJSON("https://localhost:44325/api/movie", function(selectedMovie) {
                      $.each(selectedMovie, function(key, value) {
                        movie_data +=
                          "<tr>" +
                          "<td>" +
                          value.title +
                          "</td>" +
                          "<td>" +
                          value.genre +
                          "</td>" +
                          "<td>" +
                          value.director +
                          "</td>" +
                          "</tr>";
                      });
                      $("#Results_Table").append(movie_data);
                    });
                  });
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }
    $('#search').submit( processForm );
})(jQuery); 


$(document).ready(function() {
    var movie_data = "";
    $.getJSON("https://localhost:44325/api/movie", function(data) {
      $.each(data, function(key, value) {
        movie_data +=
          "<tr>" +
          "<td>" +
          value.title +
          "</td>" +
          "<td>" +
          value.genre +
          "</td>" +
          "<td>" +
          value.director +
          "</td>" +
          "</tr>";
      });
      $("#Results_Table").append(movie_data);
    });
  });
