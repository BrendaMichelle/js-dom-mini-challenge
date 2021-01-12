/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = "green"

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

let post = document.querySelector('.traveler')
let photo = post.querySelector('img')
let newName = post.querySelector('h2')
let newNickName = post.querySelector('em')

photo.src = traveler.photo
newName.textContent = traveler.name
newNickName.textContent = traveler.nickname



/***** Deliverable 4 *****/


animals.forEach(function(post){
    post.innerHTML +=
    `
    <li data-id="{animalSighting id}">
        <p>{animal sighting description}</p>
        <img src="{animal sighting photo}" alt="{animal sighting species}"/>
        <a href="{animal sighting link}" target="_blank">Here's a video about the {animal sighting species} species!</a>
    </li>
    `


    })



/***** Deliverable 5 *****/
