/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

// const h1 = document.querySelector('#header')
// h1.style.color = "purple"

header.style.color = "purple"

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const trvlrH2 = document.querySelector(`h2`)
trvlrH2.innerText = traveler.name

const trvlrEm = document.querySelector(`em`)
trvlrEm.innerText = traveler.nickname

const trvlrImg = document.querySelector(`img`)
trvlrImg.src = traveler.photo
trvlrImg.alt = "raffy photo"

/***** Deliverable 4 *****/

const ul = document.querySelector(`ul#animals`)

traveler.animalSightings.forEach( function (sightings) {
    const newLi = document.createElement(`li`)
    newLi.dataset.id = sightings.id

    const newP = document.createElement(`p`)
    newP.textContent = sightings.description

    const newImg = document.createElement(`img`)
    newImg.src = sightings.photo
    newImg.alt = sightings.species

    const newA = document.createElement(`a`)
    newA.href = sightings.link
    newA.textContent = `Here's a video about the ${sightings.species} species!` 


    newLi.append(newP, newImg, newA)
    ul.append(newLi)
})



/***** Deliverable 5 *****/

document.querySelector(`[data-id='3']`).remove()
