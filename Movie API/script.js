//API used https://www.omdbapi.com
$(document).ready(function(){
    $("button").on('click',function(e){
        e.preventDefault();
        var movie = $("#movieName").val();
        var APIUrl = "https://www.omdbapi.com/?s="+ movie + "&type=movie" + "&r=json" ;
        console.log(APIUrl);
        $("#results").empty();
       $.ajax({
          type:'GET',
          dataType: 'JSON',
          url:APIUrl,
          success: function(data){
              console.log('success',data);
              $.getJSON(APIUrl, function(data){
                    
                    var movies = data.Search;
                    var notFound = data.Response;
                    //Made a var notFound to recieve the response from the API if !false then
                    //there a movie to search for the it returns false then it was empty or the
                    //movie didn't exist 
                    console.log(notFound)
                    if(notFound != "False")
                    {
                        $("#results").append("<h3>Results for " + movie + "<h/3></br>");
                            for(var i = 0; i < movies.length; i++)
                                $('#results').append("<li>" + movies[i].Title + "( " + movies[i].Year + " )" + "<img src='" + movies[i].Poster + "'" + " </li> </br>")
                    }
                    else{
                                 $("#results").append("<h1 style='color: red; text-aling: center'>No movies found</h1>")
                        }
                    })
          },
          error: function(data){
                  $("#results").append("<h1 style='color: red, text-aling: center'>No movies found</h1>")
          }
       });
    });
});