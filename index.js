/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "green"


/***** Deliverable 3 *****/
let headerTwo = document.querySelector("h2")
headerTwo.innertext = traveler.name  

let em = document.querySelector("em") 
em.innerText = traveler.nickname  

image = document.querySelector("img")
image.src = "pics/raffy.jpg" 
image.alt = "raffy"  

console.log('This is what the traveler object looks like: ', traveler)


/***** Deliverable 4 *****/


animals = document.querySelector("#animals") 

traveler.animalSightings.forEach (function(animal){
    let li = document.createElement("li")
    li.dataset.id = animal.id
    let p = document.createElement("p")
    let img = document.createElement("img")
    let a = document.createElement("a")

    a.href = animal.link
    a.target = "_blank"
    a.innerText = `Here's a video about the ${animal.species} species!`

    p.innerText = animal.description
    img.src= animal.photo
    img.alt= animal.species

    li.append(p)
    li.append(a)
    li.append(img)
    animals.append(li)
    })




/***** Deliverable 5 *****/

animals.removeAttribute(datatset.id==3)
