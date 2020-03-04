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
        "<td>" +
        '<a href="Details.html"><button type="submit">Details</button></a>' +
        "</tr>";
    });
    $("#myTable").append(movie_data);
  });
});
  $(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
});


