
function GetButtonNoParams(){
    $(function (){
        var $moviesList = $('#movies');
        $.ajax({
            type: 'GET',
            url: 'https://localhost:44352/api/movie',
            success: function(movies) { 
                console.log('success', movies);
                $.each(movies, function(i, movie){ //goes through array of data and manipulates each item 
                    $moviesList.append('<li>name: ' + movie.Title +', Genre: ' + movie.Genre + ', Director: ' + movie.Director + '</li>');  
                    //append being called on undefined - look up documentation on append  jquery     
            });
        }
        });
    });
}

