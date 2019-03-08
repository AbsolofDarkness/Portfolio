function loadQuote () {
    const quoteBody = $("#quoteText");
    const quoteAuthor = $("#quoteAuthor");

    let randNum = Math.floor(Math.random() * quotes.length);

    quoteBody.text(quotes[randNum].quote);
    quoteAuthor.text(quotes[randNum].author);
}

$('.navbar-collapse a').click(function() {
    /* always close responsive nav after click */
    $('.navbar-collapse').collapse("hide");
});

jQuery(".scroll_to").on("click", function(e){
    var jump = $(this).attr("href");
    var new_position = $(jump).offset();
    $("html, body").stop().animate({scrollTop: new_position.top - 90}, 500);
    e.preventDefault();
});

particlesJS.load("particles-js", "./globalAssets/particles.json", () => {
    console.log("Particles Config Loaded");
})

window.onload = () => {
    loadQuote();
};