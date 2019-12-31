function converter(a) {
  let userInput = a.toString();

  if(userInput.length < 8) {
    console.log('hex');
    return hexToRGB(userInput);
  } else {

    let rgb = userInput;
    let newRGB = rgb.slice(4, rgb.length-1);
    let userArr = newRGB.split(',');
    let r = parseInt(userArr[0]);
    let g = parseInt(userArr[1]);
    let b = parseInt(userArr[2]);
    console.log(userArr);
    console.log('r', r);
    console.log('g', g);
    console.log('b', b);
    return rgbToHex(r, g, b);
  }

  function hexToRGB(input) {
    let hex = input;
    let hexArray = [];
    let r, g, b;

    if(hex.charAt(0) === '#') {
      hex = hex.slice(1);
      hexArray = hex.split('');
    }

    if(hexArray.length < 3 || hexArray.length === 4 || hexArray.length > 6) {
      rgb = 'Please enter the correct input';
    } else if (hexArray.length < 4) {
      r = (hexArray[0] + hexArray[0]);
      g = (hexArray[1] + hexArray[1]);
      b = (hexArray[2] + hexArray[2]);

      rgb = 'rgb(' + parseInt(r, 16) + ', ' + parseInt(g, 16) + ', ' + parseInt(b, 16) + ')';
    } else if (hexArray.length < 6) {
      r = (hexArray[0] + hexArray[1]);
      g = (hexArray[2] + hexArray[3]);
      b = (hexArray[4]);

      rgb = 'rgb(' + parseInt(r, 16) + ', ' + parseInt(g, 16) + ', ' + parseInt(b, 16) + ')';
    } else if (hexArray.length === 6) {
      r = (hexArray[0] + hexArray[1]);
      g = (hexArray[2] + hexArray[3]);
      b = (hexArray[4] + hexArray[5]);

      rgb = 'rgb(' + parseInt(r, 16) + ', ' + parseInt(g, 16) + ', ' + parseInt(b, 16) + ')';
    }
    return `Convert from #${hex} to ${rgb}`;
    // pake
    // parseInt('a', 16);
  }

  function rgbToHex(r, g, b) {
    const hex = "#" + ((r << 16) + (g << 8) + b).toString(16);
    return `Convert from ${a} to ${hex}`;
  }
}

converter('rgb(255,255,255)')
converter('#fff000')
