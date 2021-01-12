/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = "pink"

/***** Deliverable 3 *****/
 console.log('This is what the traveler object looks like: ', traveler)
let travelerInfo = document.querySelector('.traveler')
let travelerName = travelerInfo.querySelector('h2')
let travelerNickname = travelerInfo.querySelector('em')
let travelerPhoto = travelerInfo.querySelector('img')
travelerName.textContent = `${traveler.name}`
travelerNickname.textContent = `${traveler.nickname}`
travelerPhoto.src = `${traveler.photo}`
travelerPhoto.alt = "Cairn terrier on wood floor"

/***** Deliverable 4 *****/

let sightingsArray = traveler.animalSightings
sightingsArray.forEach(function (sightingObject) {
    const newListItem = document.createElement('li')
    const newP = document.createElement('p')
    const newImg = document.createElement('img')
    const newA = document.createElement('a')

    newListItem.className = 'animal-sighting'
    newListItem["data-id"] = `${sightingObject.id}`
    newP.textContent = `${sightingObject.description}`
    newImg.src = `${sightingObject.photo}`
    newImg.alt = `${sightingObject.species}`
    newA.href = `${sightingObject.link}`
    newA.target = "_blank"
    newA.textContent = `Here's a video about the ${sightingObject.species} species!`

    newListItem.append(newP, newImg, newA)

    const sightings = document.querySelector('#animals')
    sightings.append(newListItem)
})



/***** Deliverable 5 *****/

let wrongSighting = sightingsArray.querySelector(`[data-id = 3]`)
wrongSighting.remove()