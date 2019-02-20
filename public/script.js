$(document).ready(function() {
  var topCard = 
  '<div class="card">' +
    '<div class="card-body">';
  var bottomCard =
    '</div>' +
  '</div>';

  $.getJSON('/challenges/javascript', (data) => {
    data.forEach(html => {
      console.log(html);
      $("#challenge-list").append(
        topCard + html + bottomCard
      );
    })
  });
});