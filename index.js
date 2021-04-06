/***** Deliverable 1 *****/
const header = document.querySelector('h1#header')
console.log("Here's your header:", header)
 // used elements and element selector tool to find the correct tag that Amazon Trip text sits in

/***** Deliverable 2 *****/

header.style.color = 'green'
/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const travelerName = document.querySelector('div#profile').children[1]
travelerName.textContent = traveler.name

const travelerNickname = document.querySelector('div#profile').children[2]
travelerNickname.textContent = traveler.nickname

const photo = document.querySelector('div#profile').children[0]
photo.src = traveler.photo
photo.alt = "puppy dog"

/***** Deliverable 4 *****/

const sightingsList = document.querySelector('ul#animals')
const animalSightingsArray = traveler.animalSightings

function singleSighting(object) {

    let sightingInstance =  document.createElement('li')

    sightingInstance.innerHTML = `<li data-id=${object.id}>
    <p>${object.description}</p>
    <img src="${object.photo}" alt="{animal sighting species}"/>
    <a href="${object.link}" target="_blank">Here's a video about the ${object.species} species!</a>
  </li>`

  sightingsList.append(sightingInstance)
}

function createAllSightings(array) {
array.forEach(function(sighting){
    singleSighting(sighting)
})
}

createAllSightings(animalSightingsArray)

/***** Deliverable 5 *****/


document.querySelector('ul#animals').children[2].remove()

//HOW DO I GET TO "data-id-3" directly using a method and 
//AND NOT BY FINDING THE INDEX?