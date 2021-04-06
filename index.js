/***** Deliverable 1 *****/
const header = document.querySelector('#header')
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "purple"


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
const travelerInfo = document.querySelector('div#profile h2')
travelerInfo.innerText = traveler.name

const travelerNickname = document.querySelector('div#profile em')
travelerNickname.innerText = traveler.nickname

const travelerPhoto = document.querySelector('div#profile img')
travelerPhoto.src = traveler.photo
travelerPhoto.alt = traveler.name



/***** Deliverable 4 *****/



function sightingsLister(oneSighting) {
    

    const newLi= document.createElement('li')
    newLi.classList.add('sighting-container')
    newLi.dataset.id = oneSighting.id

    newLi.innerHTML = `<li class="sighting-container">
        <p class="description">${oneSighting.description}</p>
        <img src="${oneSighting.photo}" alt="${oneSighting.species}" />
        <a href=${oneSighting.link}> target="_blank"> Here's a video about the ${oneSighting.species} species!</a>
    </li>`

    const sightings = document.querySelector("ul#animals")
    sightings.append(newLi)
}

function listAllSightings(){
    const arrayOfSightings = traveler.animalSightings
    arrayOfSightings.forEach(function(oneSighting) {
        sightingsLister(oneSighting)
    })
}

listAllSightings()

/***** Deliverable 5 *****/

const thirdLi = document.querySelectorAll(".sighting-container")[4]
thirdLi.remove()

// const adDiv = document.getElementById('')
// adDiv.remove()