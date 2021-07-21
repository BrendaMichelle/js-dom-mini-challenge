/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)

//made js render after body loads

/***** Deliverable 2 *****/
header.style.color="#abcdef"


/***** Deliverable 3 *****/
// console.log('This is what the traveler object looks like: ', traveler)
// travelerNameNode=document.querySelector("h2")
// travelerNameNode.innerHTML=traveler.name

// travelerNicknameNode=document.querySelector("div em")
// console.log(travelerNameNode)
//travelerNameNode.innerHTML=traveler.nickname
//^ doesn't work, em is inline

profileDiv=document.querySelector("#profile")
profileDiv.innerHTML=`<img src="${traveler.photo}"
alt="${traveler.name}">
<h2>${traveler.name}</h2>
<em>${traveler.nickname}</em>`


/***** Deliverable 4 *****/
var sightings=traveler.animalSightings
let sightingList=document.querySelector("#animals")
for (let i=0;i<sightings.length;i++){
    let sighting=sightings[i]
    item=document.createElement("li")
    item.dataset.id=sighting.id
    item.innerHTML=`<p>${sighting.description}</p>
    <img src="${sighting.photo}" alt="${sighting.species}"/>
    <a href="${sighting.link}" target="_blank">Here's a video about the ${sighting.species} species!</a>`
    sightingList.appendChild(item)
}



/***** Deliverable 5 *****/
let badSighting=document.querySelector("li[data-id='3']")
badSighting.remove()