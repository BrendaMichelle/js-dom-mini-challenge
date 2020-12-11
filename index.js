/***** Deliverable 1 *****/

// const header = document.querySelectorAll("#header")
const header = document.querySelector("#header")

console.log("Here's your header:", header)

// I added defer to the script tag index.js!
// I removed querySelectorAll to be able to access just the first header



/***** Deliverable 2 *****/
// let title = header.querySelector()
header.style.color = "orange"

// called style.color on the header and changed the color



/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
// my guess as to why you can access traveler in the index.js is because data.js is added into the index.html inside of a script tag directly above index.js(?)

/////name, nickname, photo

let div = document.querySelector('div')
let imageDiv = document.querySelector('div')
let img = document.querySelector('img')
let newH2 = document.querySelector('h2')
let newEm = document.querySelector('em')
// 
div.classList.add("traveler")
img.src = traveler.photo
// newH2.classList.add("name")
newH2.textContent = traveler.name
newEm.textContent = traveler.nickname


/***** Deliverable 4 *****/

traveler.forEach(function (animalSighting) {
    let li = document.createElement('li')
    let p = document.createElement('p')
    let img = document.createElement('img')
    let alt = document.createElement('alt')
    let link = document.createElement('href')

    li.className.add("data-id")
    p.textContent = traveler.animalSighting.description
    img.src = traveler.animalSighting.photo



}


{/* <li data-id="{animalSighting id}">
  <p>{animal sighting description}</p>
  <img src="{animal sighting photo}" alt="{animal sighting species}"/>
  <a href="{animal sighting link}" target="_blank">Here's a video about the {animal sighting species} species!</a>
</li> */}


/***** Deliverable 5 *****/
