/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

document.querySelector("#header").style.color = "teal"

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

document.querySelector("h2").textContent = traveler.name
document.querySelector("em").textContent = traveler.nickname 
document.querySelector("img").src = traveler.photo
document.querySelector("img").alt = traveler.name

/***** Deliverable 4 *****/
let ani = document.querySelector("#animals")
let id = traveler.animalSightings.id 
let description = traveler.animalSightings.description
let photo = traveler.animalSightings.photo 
let species = traveler.animalSightings.species
let link = traveler.animalSightings.link

traveler.animalSightings.forEach(function (postObj) {
    ani.innerHTML +=
    `<li data-id="${id}">
  <p>${description}</p>
  <img src="${photo}" alt="${species}"/>
  <a href="${link}" target="_blank">Here's a video about the ${species} species!</a>
</li>`
})



/***** Deliverable 5 *****/
