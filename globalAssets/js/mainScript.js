jQuery(".scroll_to").on("click", function(e){
    var jump = $(this).attr("href");
    var new_position = $(jump).offset();
    $("html, body").stop().animate({scrollTop: new_position.top - 90}, 500);
    e.preventDefault();
});