/***** Deliverable 1 *****/
const header = document.querySelector("h1#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = '#228B22'


/***** Deliverable 3 *****/
let travelerProfile = document.querySelector('div#profile')

let travelerImg = travelerProfile.querySelector('img')
travelerImg.src = traveler.photo
travelerImg.alt = traveler.name

let travelerName = travelerProfile.querySelector('h2')
travelerName.textContent = traveler.name

let travelerNickName = travelerProfile.querySelector('em')
travelerNickName.textContent = traveler.nickname


console.log('This is what the traveler object looks like: ', traveler)

/***** Deliverable 4 *****/
let animalSightingList = document.querySelector('ul#animals')

let sightings = traveler.animalSightings

// let animalLi = document.createElement('li')
// let animalDescription = document.createElement('p')
// let animalPhoto = document.createElement('img')
// let animalLink = document.createElement('a')

// animalLi.setAttribute('id', 'aSighting')

sightings.forEach(function(sighting) {
    let animalLi = document.createElement('li')
    let animalDescription = document.createElement('p')
    let animalPhoto = document.createElement('img')
    let animalLink = document.createElement('a')

    animalLi.setAttribute('data-id', sighting.id)
    animalDescription.textContent = sighting.description
    animalPhoto.src = sighting.photo
    animalPhoto.alt = sighting.species
    animalLink.href = sighting.link 
    animalLink.target = "_blank"
    animalLink.textContent = `Here's a video about the ${sighting.species} species!`

    animalLi.append(animalDescription, animalPhoto, animalLink)

    animalSightingList.append(animalLi)
})
/***** Deliverable 5 *****/
// let removeThis = animalSightingList.querySelector(`[data-id='3']`)

animalSightingList.querySelector(`[data-id='3']`).remove()