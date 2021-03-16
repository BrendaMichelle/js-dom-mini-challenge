/***** Deliverable 1 *****/

const header = document.querySelector('h1#header')
// console.log("Here's your header:", header)

/***** Deliverable 2 *****/
// console.dir(header) to see what's available for you to target
header.style.color = 'purple'

/***** Deliverable 3 *****/

const profile = document.querySelector("div#profile")

const h2 = profile.querySelector('h2')
h2.innerHTML = traveler.name

const em = document.querySelector('em')
em.innerHTML = traveler.nickname

const img = profile.querySelector('img')
img.src = traveler.photo
img.alt = traveler.name

// console.log('This is what the traveler object looks like: ', traveler)


/***** Deliverable 4 *****/

traveler.animalSightings.forEach(function (animalSightingObject) {
    const li = document.createElement('li')
    li.dataset.id = animalSightingObject.id
    li.innerHTML = `
    <p>Description: ${animalSightingObject.description}</p>
    <img src="${animalSightingObject.photo}" alt="${animalSightingObject.species}"/>
    <a href="${animalSightingObject.link}" target="_blank">Here's a video about the ${animalSightingObject.species} species!</a>
  `
  
  const ul = document.querySelector('ul')
  ul.append(li)

}) 

/***** Deliverable 5 *****/

const dataId3 = document.querySelector('[data-id="3"]')
dataId3.remove()