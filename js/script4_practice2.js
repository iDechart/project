"use strict";
let numberOfFilms

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start()

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
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
}

rememberMyFilms()

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Prosmotreno dovolno malo filmov')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Vi klassicheskiy zritel')
    } else if ( personalMovieDB.count >= 30) {
        console.log('Da vi konoman')
    } else {
        console.log('Oshibka')
    }
}
detectPersonalLevel()

// function showMyDB() {
//     personalMovieDB.privat === false ? console.log(personalMovieDB) : console.log('Private information')
// }

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }
}

showMyDB(personalMovieDB.privat)

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        // const a = prompt(`Your favorite genre # ${i}`, '')
        // personalMovieDB.genres.push(a)
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre # ${i}`, '');

    }
}

writeYourGenres()


