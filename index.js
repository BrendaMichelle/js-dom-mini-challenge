/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = "#CD5C5C"

/***** Deliverable 3 *****/
const h2 = document.querySelector("div#profile h2")
h2.textContent = traveler.name


const nickname = document.querySelector("div#profile em")
nickname.textContent = traveler.nickname


const photo = document.querySelector("div#profile img")
photo.src = "/Users/yuringuyen/Flatiron/code/JavaScript/js-dom-mini-challenge/pics/raffy.jpg"


console.log('This is what the traveler object looks like: ', traveler)


/***** Deliverable 4 *****/

function renderOneAnimalSighting(animals){
    const li = document.createElement("li")
    li.dataset.id = animals.id

    li.innerHTML = `<li data-id="${animals.id}">
    <p>"${animals.description}"</p>
    <img src="${animals.photo}" alt="${animals.species}"/>
    <a href="${animals.link}" target="_blank">Here's a video about the "${animals.species}" species!</a>
    </li>`

const ul = document.querySelector("ul#animals")
ul.append(li)
//  console.log(ul)
}

function renderAllAnimalsSighting(){

    traveler.animalSightings.forEach(function(animals){
        renderOneAnimalSighting(animals)
        
    })
}

renderAllAnimalsSighting()

// console.log(animalSightings)
/***** Deliverable 5 *****/
