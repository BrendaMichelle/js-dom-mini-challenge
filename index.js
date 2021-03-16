/***** Deliverable 1 *****/
const header = document.querySelector("h1#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = "orange"

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

//1. Find the element that we're interested in
const profile = document.querySelector('div#profile')


const img = profile.querySelector('img')
//2 .Actually update the property of that element
img.src = traveler.photo
img.alt = traveler.name

const h2 = profile.querySelector('h2')
h2.textContent = traveler.name

const em = profile.querySelector('em')
em.textContent = traveler.nickname

console.log(em)
/***** Deliverable 4 *****/

traveler.animalSightings.forEach(function (animalSighting){
//console.log(animalSighting)

const li = document.createElement('li')
li.dataset.id = animalSighting.id

li.innerHTML = `
<p>${animalSighting.description}</p>
<img src="${animalSighting.photo}" alt="${animalSighting.species}"/>
<a href="${animalSighting.link}" target="_blank">Here's a video about the ${animalSighting.species} species!</a>`

console.log(li)
const ul = document.querySelector('ul#animals')
ul.append(li)
})



/***** Deliverable 5 *****/
// 1. Find the element that you're interested in deleting

const liToRemove = document.querySelector('[data-id="3"]')
console.log(liToRemove)

// 2. Actually remove it
liToRemove.remove()