/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
updateTitle = header.style.color = "Green"


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

let travelerProfile = document.querySelector(".traveler")
let imgUrl = travelerProfile.querySelector("img")
imgUrl.src = traveler.photo
imgUrl.alt = traveler.name

let nameUpdate = travelerProfile.querySelector("h2")
nameUpdate.textContent = traveler.name

let nicknameUpdate = travelerProfile.querySelector("em")
nicknameUpdate.textContent = traveler.nickname


/***** Deliverable 4 *****/
animalSightingsArr = traveler.animalSightings

animalSightingsArr.forEach(function (sightingObj){
    let liTag = document.createElement('li')
    let pTag = document.createElement('p')
    let imgTag = document.createElement('img')
    let aTag = document.createElement('a')

    liTag.setAttribute('data-id', sightingObj.id )
    pTag.textContent = sightingObj.description
    imgTag.src = sightingObj.photo
    imgTag.alt = sightingObj.species
    aTag.href = sightingObj.link
    aTag.target = "blank"
    aTag.textContent = `Here's a video about the ${sightingObj.species} species!`

    let animalSightingList = document.querySelector('ul#animals')

    liTag.append(pTag, imgTag, aTag)
    animalSightingList.append(liTag)
    
})


/***** Deliverable 5 *****/
animalSightingList.querySelector(`[data-id='3']`).remove()