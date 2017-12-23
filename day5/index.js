let R = 0;
let B = 0;
let G = 0;

$(() => {

  $('#R').on('input', function() {
    checkRGB('#R', $(this).val());
  });

  $('#G').on('input', function() {
    checkRGB('#G', $(this).val());
  });

  $('#B').on('input', function() {
    checkRGB('#B', $(this).val());
  });

  $('#H1').on('input', function() {
    checkH1('#H1', $(this).val());
  });

  $('#S1').on('input', function() {
    checkSL('#S1', $(this).val());
  });

  $('#L').on('input', function() {
    checkSL('#L', $(this).val());
  });

  $('#H2').on('input', function() {
    checkH2('#H1', $(this).val());
  });

  $('#S2').on('input', function() {
    checkSV('#S2', $(this).val());
  });

  $('#V').on('input', function() {
    checkSV('#V', $(this).val());
  });
});

function changeColorRGB() {
  $('#color').css('background-color', `rgb(${R}, ${G}, ${B})`);
}

function changeColorHSLHSV() {
  let H = $('#H1').val();
  let S = $('#S1').val();
  let L = $('#L').val();
  $('#color').css('background-color', `hsl(${H}, ${S}%, ${L}%)`);
}

function deleteLastChar(id) {
  $(id).val(
    function(index, value) {
      return value.substr(0, value.length - 1);
    })
}

function checkH2(id, input) {
  if (!(input >= 0 && input <= 360)) {
    alert('Please input the Number between 0 and 360!');
    deleteLastChar(id);
  } else {
    hsv();
  }
}

function checkSV(id, input) {
  if (!(input >= 0 && input <= 100)) {
    alert('Please input the Number between 0 and 100!');
    deleteLastChar(id);
  } else {
    hsv();
  }
}


function checkH1(id, input) {
  if (!(input >= 0 && input <= 360)) {
    alert('Please input the Number between 0 and 360!');
    deleteLastChar(id);
  } else {
    hsl();
  }
}

function checkSL(id, input) {
  if (!(input >= 0 && input <= 100)) {
    alert('Please input the Number between 0 and 100!');
    deleteLastChar(id);
  } else {
    hsl();
  }
}

function checkRGB(id, input) {
  if (!(input >= 0 && input <= 255)) {
    alert('Please input the Number between 0 and 255!');
    deleteLastChar(id);
  } else {
    R = $('#R').val();
    G = $('#G').val();
    B = $('#B').val();

    $('#H1').val(rgbToHsl(R, G, B)[0] * 360);
    $('#S1').val(rgbToHsl(R, G, B)[1] * 100);
    $('#L').val(rgbToHsl(R, G, B)[2] * 100);

    $('#H2').val(rgbToHsv(R, G, B)[0] * 360);
    $('#S2').val(rgbToHsv(R, G, B)[1] * 100);
    $('#V').val(rgbToHsv(R, G, B)[2] * 100);

    changeColorRGB();
  }
}

function hsv() {
  R = parseInt(hsvToRgb($('#H2').val() / 360, $('#S2').val() / 100, $('#V').val() / 100)[0]);
  G = parseInt(hsvToRgb($('#H2').val() / 360, $('#S2').val() / 100, $('#V').val() / 100)[1]);
  B = parseInt(hsvToRgb($('#H2').val() / 360, $('#S2').val() / 100, $('#V').val() / 100)[2]);

  $('#R').val(R);
  $('#G').val(G);
  $('#B').val(B);

  $('#H1').val(rgbToHsl(R, G, B)[0] * 360);
  $('#S1').val(rgbToHsl(R, G, B)[1] * 100);
  $('#L').val(rgbToHsl(R, G, B)[2] * 100);

  changeColorHSLHSV();
}

function hsl() {
  R = parseInt(hslToRgb($('#H1').val() / 360, $('#S1').val() / 100, $('#L').val() / 100)[0]);
  G = parseInt(hslToRgb($('#H1').val() / 360, $('#S1').val() / 100, $('#L').val() / 100)[1]);
  B = parseInt(hslToRgb($('#H1').val() / 360, $('#S1').val() / 100, $('#L').val() / 100)[2]);

  $('#R').val(R);
  $('#G').val(G);
  $('#B').val(B);

  $('#H2').val(rgbToHsv(R, G, B)[0] * 360);
  $('#S2').val(rgbToHsv(R, G, B)[1] * 100);
  $('#V').val(rgbToHsv(R, G, B)[2] * 100);

  changeColorHSLHSV();
}
