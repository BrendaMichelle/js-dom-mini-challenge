/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)

/***** Deliverable 2 *****/
header.style.color = "cornflowerblue"

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const travelerName = document.querySelector("div h2")
travelerName.innerHTML = traveler.name

const travelerNickname = document.querySelector("div em")
travelerNickname.innerHTML = traveler.nickname

const travelerPhoto = document.querySelector("div img")
travelerPhoto.src = traveler.photo
travelerPhoto.alt = traveler.name

/***** Deliverable 4 *****/
function createOneSighting(sightingObj) {
    const list = document.createElement("li")
    list.dataset.id = sightingObj.id

    list.innerHTML = `
        <p>${sightingObj.description}</p>
        <img src="${sightingObj.photo}" alt="${sightingObj.species}"/>
        <a href="${sightingObj.link}" target="_blank">Here's a video about the ${sightingObj.species} species!</a>
    `

    const animals = document.querySelector("div h4")
    animals.append(list)
}

traveler.animalSightings.forEach(createOneSighting)

/***** Deliverable 5 *****/
const differentSighting = document.querySelector("li[data-id='3']")
differentSighting.remove()
