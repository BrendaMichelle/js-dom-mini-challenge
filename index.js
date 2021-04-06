/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

const headColor = document.querySelector('h1#header')
headColor.style.color = "purple"

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

// const profileDiv = document.querySelector('#profile')
// profileDiv.innerHTML = `
//     <img src=${traveler.photo}alt=${traveler.name}
//     <h2>${traveler.name}</h2>
//     <em>${traveler.nickname}</em>
// `

const newPic = document.querySelector('#profile > img')
newPic.src = traveler.photo
newPic.alt = traveler.name

const newName = document.querySelector('#profile > h2')
newName.textContent = traveler.name

const newNickName = document.querySelector("#profile > em")
newNickName.textContent = traveler.nickname




/***** Deliverable 4 *****/


const animalsList = document.querySelector('ul#animals')

traveler.animalSightings.forEach(function (sightingObj) {
    const renderOneSighting = document.createElement('li')
    renderOneSighting.innerHTML = `
    <li data-id="${sightingObj.id}">
    <p>${sightingObj.description}</p>
    <img src="${sightingObj.photo}" alt="${sightingObj.species}"/>
    <a href="${sightingObj.link}" target="_blank">Here's a video about the ${sightingObj.species} species!</a>
    </li>
    `

    animalsList.appendChild(renderOneSighting)
})

// function renderOneSighting(sightingObject) {

//     const sightingsList = document.createElement('li')
//     sightingsList.dataset.id = sightingObject.id

//     sightingsList.innerHTML = 
//     `<li data-id="${sightingObject.id}">
//         <p>${sightingObject.description}</p>
//         <img src="${sightingObject.photo}" alt="${sightingObject.species}"/>
//         <a href="${sightingObject.link}" target="_blank">Here's a video about the {animal sighting species} species!</a>
//     </li>`

// const sightingLi = document.querySelector('#animals')
// sightingLi.append(sightingsList)
// }

// function renderAllSightings() {
//     traveler.animalSightings.forEach(function (sightingObject) {
//         renderOneSighting(sightingObject)
//     })
// }

// renderAllSightings



// /***** Deliverable 5 *****/

const badEntry = document.querySelector("[data-id='3']")
badEntry.remove();