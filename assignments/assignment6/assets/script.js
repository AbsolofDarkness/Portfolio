var topics = ["Skyrim", "Halo", "Mario", "Sonic", "Nintendo", "Fallout", "Pacman", "Retro"];

window.onload = function () {
    // Load initial buttons
    for (var x = 0; x < topics.length; x++) {
        var btnTemplate = $(`<button type="button">`);
        btnTemplate.html(topics[x].toUpperCase());
        btnTemplate.attr("data-topic-name", topics[x]);
        btnTemplate.addClass("btn btn-primary");
        $(".buttonsGroup").append(btnTemplate);
    } 
};

$(document).on("click", ".btn-primary", function() {
    var btnObj = $(this);
    var apiKey = "iFkESqFN8XZuiJjTQdHwo3xVErShIKR4"
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" 
        + btnObj.attr("data-topic-name") + "&limit=10&offset=0&rating=G&lang=en";

    $(".gifArea").html("");

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        for(var y = 0; y < response.data.length; y++) {
            var gifDiv = $(`<div class="gifs">`);
            var gifRating = $(`<p class="gifRatingText">`);
            var gifArea = $(".gifArea");
            var gifTemp = $("<img>");
            gifTemp.attr("gifStill", response.data[y].images.fixed_height_still.url);
            gifTemp.attr("gifAnimated", response.data[y].images.fixed_height.url);
            gifTemp.attr("gifAniStatus", false);
            gifTemp.attr("src", response.data[y].images.fixed_height_still.url);
            gifRating.text(`Rating: ${response.data[y].rating}`);
            gifDiv.prepend(gifRating);
            gifDiv.append(gifTemp);
            gifArea.prepend(gifDiv);
        }
    });
});

$(document).on("click", "img", function() { 
    var clickedImage = $(this);

    if (clickedImage.attr("gifAniStatus") === "false") {
        clickedImage.attr("src", clickedImage.attr("gifAnimated"));
        clickedImage.attr("gifAniStatus", true);
    }

    else if (clickedImage.attr("gifAniStatus") === "true") {
        clickedImage.attr("src", clickedImage.attr("gifStill"));
        clickedImage.attr("gifAniStatus", false);
    }
});

// Add adding buttons to top list
$(".btn-success").on("click", function() {

    if ($("#searchTerm").val() === "") {
        return;
    }
    else {
        var inputBoxText = $("#searchTerm").val().trim();

        var buttonTemplate = $(`<button type="button" class="btn btn-primary">`);
        buttonTemplate.html(inputBoxText.toUpperCase());
        buttonTemplate.attr("data-topic-name", inputBoxText);
        $(".buttonsGroup").append(buttonTemplate);

        $("#searchTerm").val("");
    }
});


