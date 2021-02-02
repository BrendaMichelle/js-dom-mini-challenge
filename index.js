/***** Deliverable 1 *****/
 const header = document.querySelector("#header")

 console.log("Here's your header:", header)
// console.log(`Here's your header:, ${header}`)


/***** Deliverable 2 *****/

header.style.color = "blue"

/***** Deliverable 3 *****/


const travName = document.querySelector('h2')
const travNickName = document.querySelector('em')
const img = document.querySelector('img')

console.log(traveler)
travName.innerText = traveler.name
travNickName.innerText = traveler.nickname
img.src = 'pics/butterfly.jpg'
img.alt = traveler.name
console.log(img)

console.log('This is what the traveler object looks like: ', traveler)

// Using the traveler object, update the DOM to show the traveler's name



/***** Deliverable 4 *****/

animals = document.querySelector('#animals')

traveler.animalSightings.forEach(function(animals){
    let li = document.createElement("li")
    li.dataset.id = animals.id
    let p = document.createElement('p')
    let img = document.createElement('img')
    let a = document.createElement('a')
    a.href = animals.link
    p.innerText = animals.description
    img.src = animals.photo
    img.alt = animals.species
    li.append(p)
    li.append(img)
    li.append(a)
    animals.append(li)

})

/***** Deliverable 5 *****/
