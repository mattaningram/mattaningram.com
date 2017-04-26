var mLogos;
var mLogosRemaining;

$.getJSON("/assets/m-search.json", function (data) {
  mLogos = data;
  mLogosRemaining = data.slice();
});

function generateRandomM() {
  var randIndex = Math.floor( Math.random() * mLogosRemaining.length );
  $(".m-logo-wrap").load(mLogosRemaining[randIndex].url);
  mLogosRemaining.splice(randIndex, 1);

  if ( mLogosRemaining.length === 0 ) {
    mLogosRemaining = mLogos.slice();
  }
}

$(document).ready(function() {
    setTimeout(generateRandomM, 750);

    $( ".m-homepage-wrap" ).click(function() {
      generateRandomM();
      ga('send', {
        hitType: 'event',
        eventCategory: 'mLogo',
        eventAction: 'Clicked'
      });
    });
});
