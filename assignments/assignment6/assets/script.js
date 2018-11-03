// Key: iFkESqFN8XZuiJjTQdHwo3xVErShIKR4

var topics = ["Skyrim", "Halo", "Mario", "Sonic", "Nintendo", "Fallout", "Pacman", "Retro"];

window.onload = function () {

    // Load initial buttons
    for (var x = 0; x < topics.length; x++) {
        var btnTemplate = $(`<button type="button">`);
        btnTemplate.html(topics[x]);
        btnTemplate.attr("data-topic-name", topics[x]);
        btnTemplate.addClass("btn btn-primary");
        $(".buttonsGroup").append(btnTemplate);
    }

    
}