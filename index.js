/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = "orange"

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
const person = document.querySelector(`h2`)
person.textContent= traveler.name
const alias = document.querySelector(`em`)
alias.textContent= traveler.nickname
const pic = document.querySelector(`img`)
pic.alt= traveler.name
pic.src= traveler.photo




/***** Deliverable 4 *****/

const animal= createElement(`li`)

traveler.animalSightings.forEach (function(sighting) {
    animal.innerHTML += `<li data-id = "${sighting.id}">
    <p>"${sighting.description}"</p>
    <img src= "${sighting.photo}" alt= "${sighting.species}"/>
    <a href="${sighting.link}" target="_blank">Here's a video about the "${sighting.species}" species!</a>
  </li>`
})

const animalsU1 = document.querySelector('ul#animals');

animalsUl.append(animal);


/***** Deliverable 5 *****/
