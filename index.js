/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "green"


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const h2 = document.querySelector('h2')
h2.textContent = traveler.name

const em = document.querySelector('em')
em.textContent = traveler.nickname

const img = document.querySelector('#profile img')
img.src = traveler.photo
img.alt = traveler.name


/***** Deliverable 4 *****/
animalSightingsArray = traveler.animalSightings

animalSightingsArray.forEach(function (animalObject) {
  const ul = document.querySelector('ul#animals')
  ul.innerHTML +=
  `<li data-id="${animalObject.id}">
    <p>${animalObject.description}</p>
    <img src="${animalObject.photo}" alt="${animalObject.species}"/>
    <a href="${animalObject.link}" target="_blank">Here's a video about the ${animalObject.species} species!</a>
</li>`
})

/***** Deliverable 5 *****/
const dataId3 = document.querySelector("li[data-id='3']")
dataId3.remove()