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
$(document).ready(function () {
    $.ajax({
        url: "https://localhost:44325/api/movie"
    }).done(function (data) {
        console.log(data);
        $('#movieTitles')
            .append(data.map(function (val) {
                return "<td>" + val.Title + "</td>"
            }));
    });
});
