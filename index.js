/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "purple";


/***** Deliverable 3 *****/
const div = document.createElement('div');
div.id = "profile"

div.innerHTML = `<div id="profile">
                <img src="${traveler.photo}"
                alt="${traveler.name}">
                <h2>${traveler.name}</h2>
                <em>${traveler.nickname}</em>
                </div>`;

const travelerDiv = document.querySelector("div.traveler");
travelerDiv.prepend(div);

// console.log('This is what the traveler object looks like: ', traveler)


/***** Deliverable 4 *****/
const animal = document.createElement('li');

traveler.animalSightings.forEach( function(sighting) {
    animal.innerHTML += `<li data-id="${sighting.id}">
    <p>${sighting.description}</p>
    <img src="${sighting.photo}" alt="${sighting.species}"/>
    <a href="${sighting.link}" target="_blank">Here's a video about the ${sighting.species} species!</a>
    </li>`
});

const animalsUl = document.querySelector('ul#animals');

animalsUl.append(animal);



/***** Deliverable 5 *****/

const intruder = document.querySelector('[data-id="3"]');
console.log(intruder)
intruder.remove();