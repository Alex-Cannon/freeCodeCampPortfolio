// Script.js for site
var challenges = [];
var projects = [];
var certsVisible = true;

$(document).ready(function() {

  // Fetch Challenges
  $.getJSON('/challenges/javascript', (data) => {
    challenges = data;
    challenges.forEach((item, i) => {
      $("#challenge-list").append(
        '<div class="card" >' +
          '<div class="card-header" id="head-' + i + '" onclick="return handleCard(event);">' +
            (item.data ? item.data.title : 'Challenge') +
          '</div>' +
          '<div class="card-body" id="challenge-' + i + '">'+
            '<div class="card-body-open">' +
              item.html +
            '</div>' +
          '</div>' +
        '</div>'
      );

      $("#challenge-" + i).children().hide();
    });
  });

  $("#certifications").click((e) => {
    certsVisible = !certsVisible;
    
    if (certsVisible) {
      $(".show-certifications").children().show();
    } else {
      $(".show-certifications").children().hide();
    }
  });
});

// Handle Pagination buttons

// Handle Card collapse
function handleCard(e) {
  const target = e.srcElement.id[e.srcElement.id.length - 1];
  challenges[target].visible = !challenges[target].visible;

  if (challenges[target].visible) {
    $("#challenge-" + target).children().show();
  } else {
    $("#challenge-" + target).children().hide();
  }
}

function toggleMe(target) {
  console.log("$("+target+")");
  $(target).children().show();
}