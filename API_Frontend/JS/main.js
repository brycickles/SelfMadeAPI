var $moviesList = $('#movies'); //#movies is id of list in homepage
var $title = $('#Title'); //#Title is id of button
var $genre = $('#Genre');
var $director = $('#Director');

function addMovie(movie){ 
    $moviesList.append(`<li id = ${movie.MovieId}>name: ${movie.Title}, Genre: ${movie.Genre}, 
    Director: ${movie.Director} <button id="${movie.MovieId}" onClick="DeleteButton(${movie.MovieId})">Delete Movie</button>
                                <button id="${movie.MovieId}" onClick="PutButton(${movie.MovieId})">Edit Movie</button></li> `);  

}

function GetButtonNoParams(){
    $(function (){
        $.ajax({
            type: 'GET',
            url: 'https://localhost:44352/api/movie', //mine
            //url: 'https://localhost:44313/api/movie', //matts
            success: function(movies) { 
                //console.log('success', movies);
                $.each(movies, function(i, movie){ //goes through array of data and manipulates each item 
                    addMovie(movie);
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
                addMovie(newMovie);
            }, 
            error: function(){ 
                alert('error saving movie');
            }
        });
    });
}

function PutButton(id){ 
    $(function (){
        var movie = { 
            Title: $title.val(),
            Genre: $genre.val(), 
            Director: $director.val(),   
            MovieId: id, 
        };

        var url = 'https://localhost:44352/api/movie/' + id + '/' + movie
        console.log(url);
        $.ajax({    
            type: 'PUT',
            url: 'https://localhost:44352/api/movie/' + id, //mine
            //url: 'https://localhost:44313/api/movie/' + id, //matts
            data: movie, //this movie object is being passed as the body parameter, held as data
            success: function(){     
                alert('success');          
            }, 
            error: function(){ 
                alert('error saving movie');
            }
        })
    });
}

function DeleteButton(id){ 
    $(function (){
        $.ajax({
            type: 'DELETE',
            url: 'https://localhost:44352/api/movie/' + id, //mine
            //url: 'https://localhost:44313/api/movie/ + id', //matts
            sucess: function(){
                alert('Success');
            },
            error: function(){ 
                alert('error deleting movie');
            }
        })

    });
}