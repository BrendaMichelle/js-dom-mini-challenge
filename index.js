/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = "green"



/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
let imgToUpdate = document.querySelector("#profile img")
imgToUpdate.src = traveler.photo
imgToUpdate.alt = traveler.name

let h2ToUpdate = document.querySelector("#profile h2")
h2ToUpdate.textContent = traveler.name

let emToUpdate = document.querySelector("#profile em")
emToUpdate.textContent = traveler.nickname

/***** Deliverable 4 *****/


let ul = document.querySelector("#animals")
traveler.animalSightings.forEach(function (sighting){
    ul.innerHTML += `
    <li data-id="${sighting.id}">
        <p>${sighting.description}</p>
        <img src="${sighting.photo}" alt="${sighting.species}"/>
    <a href="${sighting.link}" target="_blank">Here's a video about the species!</a>
    </li>`
})

/***** Deliverable 5 *****/



let unwantedAnimal = document.querySelector("[data-id='3']")
unwantedAnimal.remove()

