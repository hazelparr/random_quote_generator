var fonts = ["Cookie", "Courgette", "Fredoka One", "Great Vibes",
            "Kaushan Script", "Pacifico", "Philosopher", "Playball",
            "Vidaloka"]

var bg = ["img-one", "img-two", "img-three", "img-four", "img-five", "img-six"]

$(document).ready( function() {
    console.log("Hello cruel world!");
    randomQuote();
    
}); //ready

function randomQuote() {
    
    //api call
    $.ajax({
        url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
        headers: {
            "X-Mashape-Key": "bN4gHSemJYmshDpWbwxS5XwJxZEQp163lBUjsnfVD2UuPkdH05",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json"
        },
        data: {
            cat: "famous"
        },
        success: function(result) {
            
            var parsedQuote = JSON.parse(result);
            var quote = parsedQuote.quote;
            var author = parsedQuote.author;
            var font = Math.floor(Math.random() * fonts.length);
            var background = Math.floor(Math.random() * bg.length);

            $(".quote").text(quote);
            $(".author").text("- " + author);
            console.log(result);
            $(".container").css("font-family", fonts[font]);
            $("body").removeClass();
            $("body").addClass(bg[background]);
            
            $(".twitter").on("click", function() {
            $(".buttonsDiv a").attr("href", 
            "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + 
            '"' + quote + " " + author + '"');
            });
        } 


    }); // ends ajax


} // ends randomQuote

$("#new-quote").on("click", function() {
    randomQuote();
    });