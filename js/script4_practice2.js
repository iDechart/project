"use strict";
let numberOfFilms
numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '')
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b
    } else {
        console.log('Error')
        i--
    }
}

if (personalMovieDB.count < 10) {
    console.log('Prosmotreno dovolno malo filmov')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Vi klassicheskiy zritel')
} else if ( personalMovieDB.count >= 30) {
    console.log('Da vi konoman')
} else {
    console.log('Oshibka')
}

console.log(personalMovieDB);

