/***** Deliverable 1 *****/
const header = document.querySelector("#header")
// console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = 'orange'


/***** Deliverable 3 *****/
// console.log('This is what the traveler object looks like: ', traveler)
const image = document.querySelector('#profile img')
const h2 = document.querySelector('#profile h2')
const em = document.querySelector('#profile em')
// console.log(em)
image.src = traveler.photo 
image.alt = traveler.name
h2.textContent = traveler.name
em.textContent = traveler.nickname

/***** Deliverable 4 *****/

traveler.animalSightings.forEach(function(animalSighting) {
const li = document.createElement('li')
const p = document.createElement('p')
const img = document.createElement('img')
const a = document.createElement('a')

li.dataset.id = animalSighting.id

p.textContent = animalSighting.description

// img.source = animalSighting.photo
//not showing image - fixed
img.src = animalSighting.photo
img.alt = animalSighting.species

a.href = animalSighting.link
a.target = "_blank"
a.textContent = `Here's a video about the ${animalSighting.species} species!`

li.append(p, img, a)

const ul = document.querySelector('#animals')
ul.append(li)
})


/* <li data-id="{animalSighting id}">
  <p>{animal sighting description}</p>
  <img src="{animal sighting photo}" alt="{animal sighting species}"/>
  <a href="{animal sighting link}" target="_blank">Here's a video about the {animal sighting species} species!</a>
</li> */

// animalSightings: [
//     {
//       id: 1,
//       travelerId: 1,
//       species: "frog",
//       photo: "pics/frog.jpg",
//       link: "https://youtu.be/Fa_I68L_APY",
//       description: "I saw this beautiful green frog resting on a leaf!"
//     },

/***** Deliverable 5 *****/

const removeAnimal = document.querySelector("[data-id='3']")
removeAnimal.remove() //don't forget ()