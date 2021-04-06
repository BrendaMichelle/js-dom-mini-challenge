/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = "blue"


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const profileDiv = document.querySelector("#profile")
profileDiv.innerHTML = `
    <img src = ${traveler.photo} alt = ${traveler.name} >
    <h2> ${traveler.name} </h2>
    <em> ${traveler.nickname} </em>
`



/***** Deliverable 4 *****/

const animalsUl = document.querySelector("#animals")
animalsUl.innerHTML = 
    traveler.animalSightings.forEach(function(sighting)) {
        <li data-id = "${sighting.id}">
        <p>${sighting.description}</p>
        <img src="${sighting.photo}" alt="${sighting.species}"/>
        <a href="${sighting.link}" target="_blank">Here's a video about the ${sighting} species!</a>
        </li>
    }


/***** Deliverable 5 *****/



