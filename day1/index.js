$(() => {
  $('#flee').on('mouseover', () => {
    var x = Math.random()*100;
    var y = Math.random()*100;
    $('#flee').css('top', x + '%');
    // $('#flee').css('top', 'x+"%');
    $('#flee').css('left', y + '%');
  });
  $('#red').on('click', () => {
    alert('Correct!')
  });
  $('#blue').on('click', () => {
    alert('Try again!')
  });
  $('#ans').on('click', () => {
    alert('Correct!')
  });
})
