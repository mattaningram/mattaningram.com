function generateRandomM() {
  $.getJSON("/assets/m-search.json", function (data) {

    var randIndex = Math.floor( Math.random() * data.length );
    $(".m-logo-wrap").load(data[randIndex].url);
  });
}

$(document).ready(function() {
    setTimeout(generateRandomM, 750);

    $( ".m-logo-wrap" ).click(function() {
      generateRandomM();
      ga('send', {
        hitType: 'event',
        eventCategory: 'mLogo',
        eventAction: 'Clicked'
      });
    });
});
