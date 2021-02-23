/***** Deliverable 1 *****/

const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "blue"


/***** Deliverable 3 *****/
document.getElementsByTagName('img')[0].src = traveler.photo
document.getElementsByTagName('img')[0].alt = "Raffy pic"
document.getElementsByTagName('h2')[0].innerText = traveler.name
document.getElementsByTagName('em')[0].innerText = traveler.nickname
console.log('This is what the traveler object looks like: ', traveler)


/***** Deliverable 4 *****/
const ul = document.querySelector('ul#animals')
traveler.animalSightings.forEach(function (sighting) {
    const li = document.createElement('li')
    li.setAttribute('data-id', `${sighting.id}`)
    li.innerHTML = `<p>${sighting.description}</p>
    <img src="${sighting.photo}" alt="${sighting.species}"/>
    <a href="${sighting.link}" target="_blank">Here's a video about the ${sighting.species} species!</a>`
    ul.append(li)
})


/***** Deliverable 5 *****/
let goAway = document.querySelector('[data-id="3"]')
goAway.remove()