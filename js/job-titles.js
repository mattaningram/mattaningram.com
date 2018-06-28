var jobTitles = [ 'UX Designer',
                  'UI Designer',
                  'Graphic Designer',
                  'Visual Designer',
                  'Digital Designer',
                  'Product Designer',
                  'Data Visualizer',
                  'Digital Product Designer',
                  'Front End Designer',
                  'Web Designer'];

var titlesRemaining = jobTitles.slice();

function randomTitle() {
  var randIndex = Math.floor( Math.random() * jobTitles.length );
  var myDescription = document.getElementsByClassName('my-description')[0];

  if (!!myDescription) {
    if (myDescription.innerText) {
      myDescription.innerText = jobTitles[randIndex];
    }
    else if (myDescription.textContent) {
      myspan.textContent = jobTitles[randIndex];
    }

    titlesRemaining.splice(randIndex, 1);

    if ( titlesRemaining.length === 0 ) {
      titlesRemaining = jobTitles.slice();
    }
  }
}

$(document).ready(function() {
  setInterval(function() {
    randomTitle();
  }, 3000);
});
