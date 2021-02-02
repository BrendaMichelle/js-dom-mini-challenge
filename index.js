/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = 'green'


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const profile = document.querySelector('#profile')
const nameData = profile.querySelector('h2')
nameData.textContent = traveler.name

const nickname = profile.querySelector('em')
nickname.textContent = traveler.nickname

const image = profile.querySelector('img')
image.src = traveler.photo
image.alt = traveler.name

/***** Deliverable 4 *****/

traveler.animalSightings.forEach(function(sighting){

    const sightData = document.createElement('div')
    sightData.className = 'sighting'
    
    sightData.innerHTML = `<li data-id=${sighting.id}>
    <p>${sighting.description}</p>
    <img src=${sighting.photo} alt=${sighting.species}/>
    <a href=${sighting.link} target="_blank">Here's a video about the ${sighting.species} species!</a>
  </li>`

    const animals = document.querySelector('#animals')
    animals.append(sightData)
})


/***** Deliverable 5 *****/

const removeEl = document.querySelector("[data-id='3']")
removeEl.remove()