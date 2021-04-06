/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = 'purple'

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const firstProfImg = document.querySelector('#profile img')
firstProfImg.src = "pics/raffy.jpg"
firstProfImg.alt = "Raffy"

const firstProfName = document.querySelector('div#profile h2')
firstProfName.innerHTML = "Raffy"

const firstProfNickname = document.querySelector('div#profile em')
firstProfNickname.innerHTML = "Rafferty"

/***** Deliverable 4 *****/

function oneSighting(sightingObj) {

    const animalSightingsList = document.createElement('li')
    // animalSightings.classList.add('')
    animalSightingsList.dataset.id = sightingObj.id

    animalSightingsList.innerHTML = `<li data-id="${sightingObj.id}">
    <p>${sightingObj.description}</p>
    <img src="${sightingObj.photo}" alt="${sightingObj.species}"/>
    <a href="${sightingObj.link}" target="_blank">Here's a video about the ${sightingObj.species} species!</a>
  </li>`

  const animalList = document.querySelector('ul#animals')
  animalList.append(animalSightingsList)
}

function allSightings() {
    traveler.animalSightings.forEach(function(sightingObj) {
        oneSighting(sightingObj)
    })
}

allSightings()

/***** Deliverable 5 *****/

const woopsyAnimal = document.querySelector("[data-id='3']")
woopsyAnimal.remove()
