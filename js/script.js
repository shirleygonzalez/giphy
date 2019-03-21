// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){

    var searchInput = $("input").val();

    console.log(searchInput);


  $.ajax({
        url:'https://api.giphy.com/v1/gifs/search?q='+searchInput+'&rating=pg&api_key=dc6zaTOxFJmzC',
        method: "GET",
        success: function(response) {
            var imageUrl= response.data[1].images.fixed_width.url;
            console.log(imageUrl);
             $('body').append('<img src='+imageUrl+'/>');
        }
    });

});

