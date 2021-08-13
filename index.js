/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)

/***** Deliverable 2 *****/
header.style.color = "blue"

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
document.querySelector("div#profile img").src = traveler.photo
document.querySelector("div#profile img").alt = traveler.name
document.querySelector("div#profile h2").innerHTML = traveler.name
document.querySelector("div#profile em").innerHTML = traveler.nickname

/***** Deliverable 4 *****/
const animal = traveler.animalSightings

for(let i = 0; i < animal.length; i++){
    const li = document.createElement("li")
    li.dataset.id = animal[i].id
    li.innerHTML = `<p>${animal[i].description}</p>
    <img src = "${animal[i].photo}" alt = "${animal[i].species}"/>
    <a href = "${animal[i].link}" target = "_blank">Here's a video about the ${animal[i].species} species!</a>`
    const ul = document.querySelector("ul#animals")
    ul.append(li)
}

/***** Deliverable 5 *****/
document.querySelector("li[data-id='3']").remove()
