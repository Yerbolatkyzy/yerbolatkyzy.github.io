function createFilm(title, director, duration) {
    const film = {
        title: title,
        director: director,
        duration: duration,

    }

    return film; 
}

function averageDuration(films) {
    let avgDuration = 0;
    for(let i=0; i<films.length; i++) {
        avgDuration += films[i].duration;
    }

    avgDuration = avgDuration/films.length;

    return avgDuration;
}

let films = []
let tempFilm = createFilm("Quantumania", "Peyton Reed", 128);
films.push(tempFilm); 

tempFilm = createFilm("Plan", "Jean Richet", 124);
films.push(tempFilm); 

let avgDurationOfFilms = averageDuration(films);

// films.forEach(element => {
//     const winText = document.createElement(".win-text");
//     let docFragment = document.createDocumentFragment();
//     docFragment.appendChild(winText);


//     const title = document.createElement("p")
//     title.innerHTML = element.title;

//     winText.appendChild(title);
//     // const director = document.createElement("p")
//     // director.innerHTML - element.director;
//     // const duration = document.createElement("p")
//     // director.innerHTML - element.duration;
//     // document.querySelector(".title").innerHTML = element.title;
//     // document.querySelector(".director").innerHTML = element.director;
//     // document.querySelector(".duration").innerHTML = element.duration + " min";
//     document.querySelector(".win-text").appendChild(title);
//     document.querySelector(".win-text").appendChild(director);
//     document.querySelector(".win-text").appendChild(duration);


// });


// const director = document.createElement("p")
// director.innerHTML = element.director;
// const duration = document.createElement("p")
// director.innerHTML = element.duration;
// document.querySelector(".title").innerHTML = films[0].title;
// document.querySelector(".director").innerHTML = films[0].director;
// document.querySelector(".duration").innerHTML = films[0].duration + " min";

// document.querySelector(".title").innerHTML = films[1].title;
// document.querySelector(".director").innerHTML = films[1].director;
// document.querySelector(".duration").innerHTML = films[1].duration + " min";

document.getElementById("title").innerHTML = films[0].title;
document.getElementById("director").innerHTML = films[0].director;
document.getElementById("duration").innerHTML = films[0].duration + " min";

document.getElementById("title1").innerHTML = films[1].title;
document.getElementById("director1").innerHTML = films[1].director;
document.getElementById("duration1").innerHTML = films[1].duration + " min";

