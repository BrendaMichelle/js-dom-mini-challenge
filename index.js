/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = 'pink'

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
let h2ToUpdate = document.querySelector('h2')
// console.log(h2ToUpdate)
h2ToUpdate.textContent = traveler.name

let emToUpdate = document.querySelector('em')
// console.log(emToUpdate)
emToUpdate.textContent = traveler.nickname

let imgObj = document.querySelector('img')
// console.log(imgObj)
imgObj.src = traveler.photo
imgObj.alt = traveler.name


/***** Deliverable 4 *****/

let travAnim = traveler.animalSightings
console.log(travAnim)

let animalsList = document.querySelector('#animals')
console.log(animalsList)


travAnim.forEach(function(listObj){
let li = document.createElement('li')
let p = document.createElement('p')
let img = document.createElement('img')
let a = document.createElement('a')



p.classList.add("description")
p.textContent = listObj.description
img.classList.add("photo")
img.src = listObj.photo

a.href = listObj.link
a.classList.add("link")
a.textContent = `Here's a video about the ${listObj.species} species!`




li.append(p, img, a)

animalsList.append(li)

})


{/* <li data-id="{animalSighting id}">
  <p>{animal sighting description}</p>
  <img src="{animal sighting photo}" alt="{animal sighting species}"/>
  <a href="{animal sighting link}" target="_blank">Here's a video about the {animal sighting species} species!</a>
</li> */}


/***** Deliverable 5 *****/
