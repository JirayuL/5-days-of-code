$(() => {
  $('#flee').on('mouseover', () => {
    var x = Math.random();
    var y = Math.random();
    $('#flee').css('top', 'x+"%');
    $('#flee').css('left', 'y+"%"');
  });
})
