/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)

//We needed to add in the "defer" into the script tag so the DOM would run after the hmtl creates the #header part.

/***** Deliverable 2 *****/
header.style.color = "crimson" ;


/***** Deliverable 3 *****/
//  console.log('This is what the traveler object looks like: ', traveler)
// On line 8 in index.html we run   <script src="data.js"></script> with let's us use anything in that file. 

let profile = document.getElementById("profile")
//console.log(profile)

let img = profile.querySelector('img');
let name = profile.querySelector('h2');
let nickname = profile.querySelector('em');

// console.log(nickname)
// console.log(name)

img.src = traveler.photo;
img.alt = traveler.name;
name.textContent = traveler.name;
nickname.textContent = traveler.nickname;

/* <div id="profile">
<img src="https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
  alt="{traveler name}">
<h2>{traveler Name}</h2>
<em>{traveler Nickname}</em>
</div> */

/***** Deliverable 4 *****/

traveler.animalSightings.forEach(function (sightingsObj) {
let animals = document.querySelector("ul#animals")
//console.log(animals)
let li = document.createElement('li')
let p = document.createElement('p')
let img = document.createElement('img')
let a = document.createElement('a')

li.id = sightingsObj.id 
p.textContent = sightingsObj.description
img.src = sightingsObj.photo
img.alt = sightingsObj.species
a.href = sightingsObj.link 
a.target = "_blank"
a.textContent = `Here's a video about the ${sightingsObj.species} species!`

let animalSighting = document.querySelector("ul#animals")
li.append(p, img, a)
animalSighting.append(li)
})

/* <li data-id="{animalSighting id}">
  <p>{animal sighting description}</p>
  <img src="{animal sighting photo}" alt="{animal sighting species}"/>
  <a href="{animal sighting link}" target="_blank">Here's a video about the {animal sighting species} species!</a>
</li> */

/***** Deliverable 5 *****/

let mistake = document.getElementById('3');
// console.log(mistake);
mistake.remove();
