/***** Deliverable 1 *****/
//the problom here is that our code is teling us that there is no value in our var  
const header = document.querySelector('#header')

console.log(header.innerHTML)


/***** Deliverable 2 *****/

header.style.color = 'red'

// /***** Deliverable 3 *****/



 console.log('This is what the traveler object looks like: ', traveler)
// // Now that we've got a beautiful header, we can show
//  some traveler data on the page. The traveler data is stored in a variable called `traveler` in the `data.js`
//   file - you can still access that variable in your `index.js` file (see if you can figure out why!).

// // First, uncomment the `console.log` under Deliverable 3 in the `index.js`
//  file to see the data in the console. 

// // Using the `traveler` object, update the DOM to show the traveler's *name*, *nickname*,
//  and *photo* in the appropriate places. For the `<img>` tag, make sure to update the `src` attribute *and* the 
//  `alt` attribute (it's important for accessibility).

 let element = document.querySelector(".traveler")
element.innerHTML = ` <div id="profile">
<img src="${traveler.photo}"
  alt="{traveler name}">
<h2>${traveler.name}</h2>
<em>${traveler.nickname}</em>
</div>
<h4>Great Sightings</h4>
<ul id="animals">
<!-- add an <li> for each animal sighting here -->
</ul>
</div>`
/***** Deliverable 4 *****/

let sighting = document.getElementById("animals")

traveler.animalSightings.forEach(listMaker)
  
function listMaker(animals){

    let sightings = document.createElement('li')
    sightings.dataset.id = animals.id
    sightings.innerHTML = 
   ` <p>${animals.description}</p>
    <img src="${animals.photo}" alt="${animals.species}"/>
    <a href="${animals.link}" target="_blank"> Here's a video about the ${animals.species} species!</a>`
  
  sighting.append(sightings)
}


let removeSighting = document.querySelector("[data-id='3']")
removeSighting.remove()
console.log(removeSighting)

/***** Deliverable 5 *****/
