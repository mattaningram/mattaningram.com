function generateRandomM() {
    var min = 1, max = 2;
    $(".m-logo-wrap").load("mlogos/" + Math.floor (Math.random() * (max - min + 1) + min) + ".html");
}

$(document).ready(function() {
    setTimeout(generateRandomM, 750);

    $( ".m-logo-wrap" ).click(function() {
      generateRandomM();
    });
});
