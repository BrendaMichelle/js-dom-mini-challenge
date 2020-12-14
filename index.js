/***** Deliverable 1 *****/
const header = document.querySelector("#header")


console.log("Here's your header:", header)

//in index.html, the index.js file script was written above where the 
//header was declared, so I added a defer in index.js script so that it gets run last



/***** Deliverable 2 *****/
//header is the variable assigned to that line
header.style.color = "pink"


/***** Deliverable 3 *****/
 console.log('This is what the traveler object looks like: ', traveler)

 //this line finds the entire profile of the traveler 
 travelor1 = document.querySelector("#profile")
 //this line finds the line with the travelers name. Used h2 tag to find it
 //cuz it's the only h2 in profile
 travelorName = travelor1.querySelector('h2') 
 //use textContent to change the content in between the h2 tags
 travelorName.textContent = traveler.name
 travelorNickname = travelor1.querySelector('em')
 travelorNickname.textContent = traveler.nickname

 travelorPic = travelor1.querySelector('img')
 //gotta change the src and alt !! 
 travelorPic.src = traveler.photo
 travelorPic.alt = traveler.name

/***** Deliverable 4 *****/
animals = document.querySelector("#animals")

traveler.animalSightings.forEach(function(postObj) {
let li = document.createElement ('li')
let p = document.createElement ('p')
let img = document.createElement ('img')
let a = document.createElement ('a')

li.classList.add("data-id")
li.textContent = postObj.id
p.textContent = postObj.description
img.src = postObj.photo
img.alt = postObj.species
a.setAttribute('href', `${postObj.link}`);
a.setAttribute('target', '_blank');
a.textContent = `Here's a video about the ${postObj.species} species!`

li.append(p, img, a)
animals.append(li)
})


/***** Deliverable 5 *****/
//I know you have to find the element using querySelector and then use .remove()
//I just don't know how to search for it though!!



