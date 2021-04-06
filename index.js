/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "#721bd0" 


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const travelerName = document.querySelector("#profile > h2")
travelerName.textContent = traveler.name

const travelerNickname = document.querySelector("#profile > em")
travelerNickname.textContent = traveler.nickname

const travelerPhoto = document.querySelector("#profile > img")
travelerPhoto.src = traveler.photo

/***** Deliverable 4 *****/

const animals = document.querySelector("ul#animals")

const addAnimal = (animalObj) => {
  const animalListing = document.createElement("li")
  animalListing.dataset.id = animalObj.id
  animalListing.innerHTML = `<p>${animalObj.description}</p>
  <img src=${animalObj.photo} alt=${animalObj.species}/>
  <a href=${animalObj.link} target="_blank">Here's a video about the ${animalObj.species} species!</a>`
  animals.append(animalListing)
}

traveler.animalSightings.forEach(addAnimal)

/***** Deliverable 5 *****/

let wrongAnimal = document.querySelector('[data-id = "3"]')
wrongAnimal.remove()