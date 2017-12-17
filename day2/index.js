$(() => {
  var skillPoint = 50;
  var str = 0;
  var dex = 0;
  var int = 0;
  var lux = 0;

  // STR
  $('#minus-str').on('click', () => {
    if (skillPoint < 50 && str > 0) {
      skillPoint++;
      str--;
      updateComponent(skillPoint, '#str-progress', str);
    }
  });

  $('#plus-str').on('click', () => {
    if (skillPoint > 0 && str < 50) {
      skillPoint--;
      str++;
      updateComponent(skillPoint, '#str-progress', str);
    }
  });

  // DEX
  $('#minus-dex').on('click', () => {
    if (skillPoint < 50 && dex > 0) {
      skillPoint++;
      dex--;
      updateComponent(skillPoint, '#dex-progress', dex);
    }
  });

  $('#plus-dex').on('click', () => {
    if (skillPoint > 0 && dex < 50) {
      skillPoint--;
      dex++;
      updateComponent(skillPoint, '#dex-progress', dex);
    }
  });

  // INT
  $('#minus-int').on('click', () => {
    if (skillPoint < 50 && int > 0) {
      skillPoint++;
      int--;
      updateComponent(skillPoint, '#int-progress', int);
    }
  });

  $('#plus-int').on('click', () => {
    if (skillPoint > 0 && int < 50) {
      skillPoint--;
      int++;
      updateComponent(skillPoint, '#int-progress', int);
    }
  });

  // LUX
  $('#minus-lux').on('click', () => {
    if (skillPoint < 50 && lux > 0) {
      skillPoint++;
      lux--;
      updateComponent(skillPoint, '#lux-progress', lux);
    }
  });

  $('#plus-lux').on('click', () => {
    if (skillPoint > 0 && lux < 50) {
      skillPoint--;
      lux++;
      updateComponent(skillPoint, '#lux-progress', lux);
    }
  });

  $('#random').on('click', () => {
    skillPoint = 50;
    while (skillPoint != 0) {
      skillPoint = 50;
      str = Math.floor((Math.random() * 100) / 2);
      dex = Math.floor((Math.random() * 100) / 2);
      int = Math.floor((Math.random() * 100) / 2);
      lux = Math.floor((Math.random() * 100) / 2);
      skillPoint -= str + dex + int + lux;
    }
    updateComponent(skillPoint, '#str-progress', str);
    updateComponent(skillPoint, '#dex-progress', dex);
    updateComponent(skillPoint, '#int-progress', int);
    updateComponent(skillPoint, '#lux-progress', lux);
  });
});

function updateComponent(skillPoint, progress, value) {
  $('#skill-point').html(skillPoint);
  $(progress).css('width', computePercent(value) + '%');
  $(progress).html(value);
}

function computePercent(value) {
  return (value / 50) * 100;
}
