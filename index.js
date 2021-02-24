/***** Deliverable 1 *****/

const header = document.querySelector("#header")
console.log("Here's your header:", header)

/***** Deliverable 2 *****/
header.style.color = "green"



/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
const nickname = document.querySelector("h2")
nickname.innerText = traveler.nickname
const name = document.querySelector("em")
name.innerText = traveler.name
const image = document.querySelector("img")
image.src="pics/raffy.jpg"


/***** Deliverable 4 *****/
const animalSightings = traveler.animalSightings
console.log(animalSightings)
const div = document.createElement('div')
div.classList.add('animalSighting')
div.dataset.id = animalSightings[0].id
div.innerHTML =' <li data-id={animalSighting.id}> <p>{animalSighting.descript}</p> <img src="{animal sighting photo}" alt="{animal sighting species}"/> <a href="{animal sighting link}" target="_blank">Here is a video about the {animal sighting species} species!</a> </li> '

animalSightings.forEach(function (animalSighting){
    const div = document.createElement('div')
    div.classList.add('animalSighting')
   
    div.innerHTML = `<li data-id="${animalSighting.id}">
    <p>${animalSighting.description}</p>
    <img src="${animalSighting.photo}" alt="${animalSighting.species}"/>
    <a href="${animalSighting.link}" target="_blank">Here's a video about the ${animalSighting.species} species!</a>
  </li>`
    const collection = document.querySelector('ul')
    collection.append(div) 



})


const collection = document.querySelector('ul')
collection.append()

/***** Deliverable 5 *****/
abc = document.querySelectorAll('[data-id]')
bca = abc[2]
bca.remove()