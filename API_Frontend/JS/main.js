var $moviesList = $('#movies'); //#movies is id of list in homepage
var $title = $('#Title'); //#Title is id of button
var $genre = $('#Genre');
var $director = $('#Director');


function GetButtonNoParams(){
    $(function (){
        $.ajax({
            type: 'GET',
            url: 'https://localhost:44352/api/movie', //mine
            //url: 'https://localhost:44313/api/movie', //matts
            success: function(movies) { 
                //console.log('success', movies);
                $.each(movies, function(i, movie){ //goes through array of data and manipulates each item 
                    $moviesList.append('<li>name: ' + movie.Title +', Genre: ' + movie.Genre + ', Director: ' + movie.Director + '</li>');  
                    //append being called on undefined - look up documentation on append  jquery     
            });
        },
        error: function(){ 
            alert('error loading movies');
        }
        });
    });
}

//adds new things to the backend
function PostButton(){ 
    $(function (){
        var movie = { 
            Title: $title.val(),
            Genre: $genre.val(), //; used in tutorial vid - recheck at end
            Director: $director.val(),      
        };

        $.ajax({
            type: 'POST',
            url: 'https://localhost:44352/api/movie', //mine
            //url: 'https://localhost:44313/api/movie', //matts
            data: movie, //points to movie object declared at beginning of function 
            success: function(newMovie){
                $moviesList.append('<li>name: ' + newMovie.Title +', Genre: ' + newMovie.Genre + ', Director: ' + newMovie.Director + '</li>');  
            }, 
            error: function(){ 
                alert('error saving movie');
            }
        })
    });
}

function PutButton(){ 

}

function DeleteButton(){ 
    
}