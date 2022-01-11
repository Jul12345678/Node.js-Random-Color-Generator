import color from 'randomcolor';

// argv[2]
let hueValue = process.argv[2];
let luminosityValue = process.argv[3];

var randomColor = color({
  hue: hueValue,
  luminosity: luminosityValue,
});
console.log(randomColor);
