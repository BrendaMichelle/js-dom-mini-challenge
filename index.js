/***** Deliverable 1 *****/
const header = document.querySelector('h1#header')
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
const headerColor = document.querySelector('h1#header')
headerColor.style.color = "red"


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const profile = document.querySelector('div#profile')
const image = profile.querySelector('img')
image.src = traveler.photo
image.alt = traveler.name

const h2 = profile.querySelector('h2')
h2.textContent = traveler.name

const em = profile.querySelector('em')
em.textContent = traveler.nickname

/***** Deliverable 4 *****/

traveler.animalSightings.forEach(function (animalSighting){

const li = document.createElement('li')
li.dataset.id = animalSighting.id

li.innerHtml = `
<p>${animalSighting.description}</p>
<img src="${animalSighting.photo}" alt="${animalSighting.species}"/>
<a href="${animalSighting.link}" target="_blank">Here's a video about the ${animalSighting.species} species!</a>`

const ul = document.querySelector('ul#animals')
ul.append(li)


})


/***** Deliverable 5 *****/
