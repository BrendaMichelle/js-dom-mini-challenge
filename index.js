/***** Deliverable 1 *****/
const header = document.querySelector("h1#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color ="pink"


/***** Deliverable 3 *****/
 console.log('This is what the traveler object looks like: ', traveler)
let first = document.querySelector('[id="profile"] h2')
first.textContent= `${traveler.name}`
let nickname= document.querySelector('[id="profile"] em')
nickname.textContent = `${traveler.nickname}`
let pic =  document.querySelector('[id="profile"] img')
pic.src = `${traveler.photo}`
pic.alt =`${traveler.name}`

/***** Deliverable 4 *****/
function create(animalSighting){

const collection =document.querySelector("ul#animals")
collection.innerHTML += `
<li data-id="${animalSighting.id}">
  <p>${animalSighting.description}</p>
  <img src="${animalSighting.photo}" alt="${animalSighting.species}"/>
  <a href="${animalSighting.link}" target="_blank">Here's a video about the ${animalSighting.species} species!</a>
</li>`
}
traveler.animalSightings.forEach(function(animalSighting) {
create(animalSighting)
})
/***** Deliverable 5 *****/
const mistake = document.querySelector("[data-id='3']")
mistake.remove()