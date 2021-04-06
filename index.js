/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = 'red'


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const travelerImageObj = document.querySelector("div#profile").children[0]
travelerImageObj.src = traveler.photo
travelerImageObj.alt = 'dog'

const travelerName = document.querySelector("div#profile").children[1]
travelerName.innerText = traveler.name

const travelerNickName = document.querySelector("div#profile").children[2]
travelerNickName.innerText = traveler.nickname


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

function createAllSightings() {
animalSightingsArray.forEach(function(sighting){
    singleSighting(sighting)
})
}

createAllSightings()



/***** Deliverable 5 *****/

const removeUsingDataId = document.querySelector("ul#animals").children[2]
removeUsingDataId.remove()
