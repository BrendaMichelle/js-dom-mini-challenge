/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = "red";


/***** Deliverable 3 *****/
//  console.log('This is what the traveler object looks like: ', traveler)
const div = document.createElement("div")
div.innerHTML =    `<div> 
<img src="${traveler.photo}"
alt="${traveler.name}">
<h2> ${traveler.name}</h2>
<em>${traveler.nickname}</em> </div>`

const parentDiv = document.querySelector("div.traveler")
parentDiv.prepend(div)

// /***** Deliverable 4 *****/
const li = document.createElement("li")


traveler.animalSightings.forEach(function (animal){
    li.innerHTML += `
<li data-id="${animal.id}">
  <p>${animal.description}</p>
  <img src="${animal.photo}" alt="${animal.species}"/>
  <a href="${animal.link}" target="_blank">Here's a video about the {animal sighting species} species!</a>
</li>`

})

const parentUl = document.querySelector("ul#animals")
parentUl.prepend(li)

/***** Deliverable 5 *****/

const k = document.querySelector('[data-id ="3"]')
k.remove()