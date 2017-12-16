$(() => {
  $('#flee').on('mouseover', () => {
    var x = Math.random()*100;
    var y = Math.random()*100;
    $('#flee').css('top', x + '%');
    // $('#flee').css('top', 'x+"%');
    $('#flee').css('left', y + '%');
  });
})
