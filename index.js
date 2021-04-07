/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = 'red'

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const profileName = document.querySelector('#profile')
const profileH2 = document.querySelector('#profile h2')
// console.log(profileName)
// // profileName.textContent = `Name: ${traveler.name}`
// const profileEm = document.querySelector('div#profile em')
// nickName.textContent = `Nickname: ${traveler.nickname}`

const profileImg = document.querySelector('img')
profileImg.src = traveler.photo
profileImg.alt = traveler.name
profileH2.textContent = traveler.name

const profileEm = profileName.querySelector('em')
profileEm.textContent = traveler.nickname
profileImg.scr = '/Users/susanavik/Flatiron/phase3/mini-challenges/js-dom-mini-challenge/pics/butterfly.JPG'

/***** Deliverable 4 *****/

function renderAllAnimalSightings() {
    traveler.animalSightings.forEach(function (animalSightingObj) {
        const li = document.createElement('li')
        li.dataset.id = animalSightingObj.id
        // li.dataset.something = "someValue"

        li.innerHTML = `
        <p>${animalSightingObj.description}</p>
        <img src="${animalSightingObj.photo}" alt="${animalSightingObj.species}"/>
        <a href="${animalSightingObj.link}" target="_blank">Here's a videeo about the ${animalSightingObj.species}`

        const animalCollectionUl = document.querySelector('ul')
        animalCollectionUl.append(li)
    })
}

renderAllAnimalSightings()

// const animals = document.querySelector('ul')
// console.log(animals)

// const animalLi = document.createElement('li')
// animalLi.classList.add()
// animalLi.dataset.id = travelersArray[0].id
// animals.ul = travelers.forEach 

// ```js
// <li data-id="{animalSighting id}">
//   <p>{animal sighting description}</p>
//   <img src="{animal sighting photo}" alt="{animal sighting species}"/>
//   <a href="{animal sighting link}" target="_blank">Here's a video about the {animal sighting species} species!</a>
// </li>
// ```

/***** Deliverable 5 *****/

const sightingtoRemove = document.querySelector('[data-id="3"]')
console.log(sightingtoRemove)
sightingtoRemove.remove()

