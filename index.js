/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = "green"

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

document.querySelector("div#profile img").src = traveler.photo
document.querySelector("div#profile img").alt = traveler.name
document.querySelector("div#profile h2").textContent = traveler.name
document.querySelector("div#profile em").textContent = traveler.nickname


/***** Deliverable 4 *****/
traveler.animalSightings.forEach(function(animal) {
    // use the combo method from lecture!!
    const li = document.createElement('li')
    li.dataset.id = animal.id
    li.innerHTML = `  <p>${animal.description}</p>
    <img src="${animal.photo}" alt="${animal.species}"/>
    <a href="${animal.link}" target="_blank">Here's a video about the ${animal.species} species!</a>`

    const ol = document.querySelector("ul#animals")
    ol.append(li)
})



/***** Deliverable 5 *****/
document.querySelector("li[data-id='3']").remove()