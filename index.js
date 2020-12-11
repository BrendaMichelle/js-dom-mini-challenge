/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = "blue"

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const img = document.querySelector(".traveler img")
const h2 = document.querySelector(".traveler h2")
const em = document.querySelector(".traveler em")

img.src = traveler.photo 
img.alt = traveler.name
h2.textContent = traveler.name 
em.textContent = traveler.nickname
/***** Deliverable 4 *****/
function addSighting(animalSighting) {
const animalsUl = document.querySelector("#animals")
const li =  document.createElement("li")
li.dataset.id = animalSighting.id
li.innerHTML = `
<p>${animalSighting.description}</p>
 <a href="${animalSighting.link}" target="_blank">Here's a video about the ${animalSighting.link} species!</a>`
 animalsUl.append(li)
}

traveler.animalSightings.forEach(addSighting)


/***** Deliverable 5 *****/
