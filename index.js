/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)

/***** Deliverable 2 *****/

header.style.color = "Blue"

/***** Deliverable 3 *****/

console.log('This is what the traveler object looks like: ', traveler)

let img = document.querySelector("#profile .photo")
//img.textContent = traveler.photo
img.src = traveler.photo
img.alt = traveler.name

let h2 = document.querySelector('#profile .name')
h2.textContent = traveler.name

let em = document.querySelector('#profile .nickname')
em.textContent = traveler.nickname

// /***** Deliverable 4 *****/

const allAnimalSightings = traveler.animalSightings
let animalSightingList = document.querySelector('#animals')

allAnimalSightings.forEach(function (animal) {
animalSightingList.innerHTML += `
  <li data-id="${animal.id}">
  <p>${animal.description}</p>
  <img src="${animal.photo}" alt="${animal.species}"/>
  <a href="${animal.link}" target="_blank">Here's a video about the ${animal.species} species!</a>
</li>`
  
}) 

/***** Deliverable 5 *****/

const lineItem3 = document.querySelector("li[data-id='3']") 
lineItem3.remove()






















// animalSightingList.querySelector([data-id='3']).remove()
// couldnt get this one to work i think i need more Setup ... didnt have enough time will work on again