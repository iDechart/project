"use strict";

// if (4 == 4) {
//     console.log('Ok!');
// } else {
//     console.log('Error!')
// }

const num = '51';

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!')
// }
//
// (num === 50) ? console.log('Ok!') : console.log('Error');

switch (num) {
    case 49:
        console.log('Neverno');
        break
    case 100:
        console.log('Ne-Ok');
        break
    case 50:
        console.log('Ok!');
        break
    default:
        console.log('Ne v etot raz');
        break

}