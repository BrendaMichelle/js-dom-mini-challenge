 /***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)

// script tag not loaded
/* <h1 id="header"> Amazon Tripl</h1> */
/***** Deliverable 2 *****/
header.style.color = "blue"


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
// traveler
// {id: 1, name: "Raffy", nickname: "Rafferty", photo: "pics/raffy.jpg", likes: 1000, …}
// animalSightings: (4) [{…}, {…}, {…}, {…}]
// id: 1
// likes: 1000
// name: "Raffy"
// nickname: "Rafferty"
// photo: "pics/raffy.jpg"
// __proto__: Object
//img,h2, em,
//only one h2/img/em, in the file
let img = document.querySelector("img")
let h2 = document.querySelector("h2")
let em = document.querySelector("em")
h2.textContent = traveler.name
em.textContent = traveler.nickname
img.src = traveler.photo
img.alt = traveler.name
//img has 2 attr src % alt 

// /***** Deliverable 4 *****/
// ```
// // 1.locate
// // 2.create  and selector
// // 3.append
// const article = document.querySelector('#electric-cars');
// article.dataset.columns // "3"


// {/* <li data-id="{animalSighting id}">
//   <p>{animal sighting description}</p>
// //   <img src="{animal sighting photo}" alt="{animal sighting species}"/>
// //   <a href="{animal sighting link}" target="_blank">Here's a video about the {animal sighting species} species!</a>
// // </li> */}


// let animalsUl = document.querySelector(`ul#animals`)
// // id: 4,
// // travelerId: 1,
// // species: "butterfly",
// // photo: "pics/butterfly.JPG",
// // link: "https://youtu.be/1z1bfyV4cF0",
// // description: "What a sight!"
// // }


// let li = document.createElement("li")
// li.dataset.id = traveler.animalSightings[0].id
// li.innerHTML = `
// <p> ${traveler.animalSightings[0].description}</p>
// <img src="${traveler.animalSightings[0].photo}"
// alt="${traveler.animalSightings[0].speices}"
// <a href="${traveler.animalSightings[0].link}
// " target="_blank">Here's a video about the ${traveler.animalSightings[0].speices} species!</a>`

 //append / slap it
// animalsUl.append(li)

// <------------------------------------->
//need a for each function to do it for me

function addAnimals(animal){
    let animalsUl = document.querySelector(`ul#animals`)
    let li = document.createElement("li")
li.dataset.id = animal.id
li.innerHTML = `
    <p> ${animal.description}</p>
    <img src="${animal.photo}"
        alt="${animal.speices}"
    <a href="${animal.link}
    " target="_blank">
    Here's a video about the ${animal.speices} 
    species!</a>`
//append / slap it
animalsUl.append(li)
} 

traveler.animalSightings.forEach(addAnimals)

// <------------------------->
// function addAnimals(animal){
// let animalsUl = document.querySelector(`ul#animals`)
// let li = document.createElement("li")
// let p = document.createElement("p")
// let image = document.createElement("img")
// let a = document.createElement("a")

// li.dataset.id = animal.id
// p = animal.description
// img.src = animal.photo
// img.alt = animal.speices
// a.href = animals.link
// a.target = 
// li.append(p,a)

// }


/***** Deliverable 5 *****/
//remove [data-id='3']
// var el = document.getElementById('div-02');
// el.remove(); // Removes the div with the 'div-02' id

// let unwanted = document.getElementById(dataset.id='3')
// unwanted.remove()

let unwanted = document.querySelector(`[data-id='3']`)
unwanted.remove()