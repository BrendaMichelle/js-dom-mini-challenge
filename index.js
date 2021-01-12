
//D1
const header = document.querySelector("#header")
console.log("Here's your header: ", header)

//D2
header.style.color = "green"

//D3
let travelerObj = document.querySelector(".traveler #profile")
console.log("this is what the traveler obj looks like", travelerObj)

let h2 = document.querySelector("#profile .name")
h2.textContent = traveler.name
console.log(h2)

let em = document.querySelector("#profile .nickname")
em.textContent = traveler.nickname

let img = document.querySelector("#profile .photo")
img.src = traveler.photo
img.alt = traveler.name

//D4
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

// /***** Deliverable 5 *****/

const lineItem3 = document.querySelector("li[data-id='3']") 
lineItem3.remove()
