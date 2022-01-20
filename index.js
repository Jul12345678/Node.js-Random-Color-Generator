import chalk from 'chalk';
import randomColor from 'randomcolor';

const color = randomColor({
  hue: process.argv[2],
  luminosity: process.argv[3],
});

console.log(
  chalk.hex(color).bold(`###############################
###############################
###############################
#####                     #####
#####        ${color}      #####
#####                     #####
###############################
###############################
###############################`),
);
