/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)

/***** Deliverable 2 *****/

header.style.color = "Blue"

/***** Deliverable 3 *****/

console.log('This is what the traveler object looks like: ', traveler)
let img = document.querySelector("#profile .photo")
let h2 = document.querySelector('#profile .name')
let em = document.querySelector('#profile .nickname')

img.textContent = traveler.photo
h2.textContent = traveler.name
em.textContent = traveler.nickname

// /***** Deliverable 4 *****/

allAnimalSightings = traveler.animalSightings
let animalSightingList = document.querySelector('ul#animals')

allAnimalSightings.forEach(function (animal) {

  let li = document.createElement('li')
  let p = document.createElement('p')
  let img = document.createElement('img')
  let a = document.createElement('a')
}) 

/***** Deliverable 5 *****/

// animalSightingList.querySelector([data-id='3']).remove()
// couldnt get this one to work i think i need more Setup ... didnt have enough time will work on again