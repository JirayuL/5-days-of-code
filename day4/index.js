$(() => {
  const query = window.location.search.substring(1);
  const array = query.split('&');
  array.forEach((item) => {
    const keyvalue = item.split('=')
    let value = computePercent(keyvalue[1]);
    $('#' + keyvalue[0]).css('width', value+'%');
    $('#' + keyvalue[0]).html(keyvalue[1]);
  })


  $('#back').on('click', () => {
    window.location = '../day2/index.html';
  });
});

function computePercent(value) {
  return (value / 50) * 100;
}
