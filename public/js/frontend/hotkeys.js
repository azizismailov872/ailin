var keys = {};
var dom = location.hostname

$(document).keydown(function(e) {
  keys[e.which] = true;
  // 8.1
  if (keys[18] && keys[49]) {
    document.location.replace("/main");
  }
  // 8.2
  if (keys[18] && keys[50]) {
    document.location.replace("/audiobooks/genres");
  }
  // 8.3
  if (keys[18] && keys[51]) {
    document.location.replace("/trainings/genres");
  }
  // 8.4
  if (keys[18] && keys[52]) {
    document.location.replace("/volunteers");
  }
  // 8.5
  if (keys[18] && keys[53]) {
    document.location.replace("/podcasts/genres");
  }
  // 8.6
  if (keys[18] && keys[54]) {
    document.location.replace("/about");
  }
  // 7
  if (keys[17] && keys[32]) {
    $('.nav-button').click();
    $('.nav-button').focus();
  }
  // 5 и 6 не известно что перелистывать
  // с 1 по 4 все это есть в браузере 
});

$(document).keyup(function(e) {
  delete keys[e.which];
});
