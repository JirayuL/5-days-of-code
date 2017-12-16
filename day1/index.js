$(() => {
  $('#flee').onmouseover = randomPosition();
})

// $(document).ready(main());
//
// function main() {
//   document.getElementById('flee').onmouseover = randomPosition();
// }

function randomPosition(e) {
  var x = Math.random()*100;
  $('flee').style.top = x+"%";
  $('flee').style.left = x+"%";
}
