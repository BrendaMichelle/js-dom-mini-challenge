/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)



/***** Deliverable 2 *****/

let headerColor = document.getElementById('header')
headerColor.style.color = 'blue';




/***** Deliverable 3 *****/
let foundDiv = document.querySelector('.traveler')
    foundDiv.innerHTML +=
    `<div id="profile">
      <img src="${traveler.photo}"
        alt="${traveler.name}">
      <h2>${traveler.name}</h2>
      <em>${traveler.nickname}</em>
    </div>`


console.log('This is what the traveler object looks like: ', traveler)




/***** Deliverable 4 *****/

traveler.animalSightings.forEach(function (postObj){
    foundDiv.innerHTML += 
`<li data-id="${postObj.id}">
  <p>${postObj.description}</p>
  <img src="${postObj.photo}" alt="${postObj.species}"/>
  <a href="${postObj.link}" target="_blank">Here's a video about the ${postObj.species} species!</a>
</li>`

})



/***** Deliverable 5 *****/

let theId = $(this).data-id = 3
$(this).data-item-id = 3  
$('[data-id="3"]')


