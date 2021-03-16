/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)

/****notes****/
// use defer in <script> tag in index.html. 
//reads top to bottom, and index.js is above/before our <body><h1> header. 
//defer will make it so it is read last.
//dont need defer in data.js, since it does not rely on any html



/***** Deliverable 2 *****/

// const header = document.querySelector("#header")
header.style.color = '#cbf21b'

/****notes****/
//use console.dir(header) to locate header in console and see the css for the header element
//scroll down and see >style
//there will be a color: "" in style. 
//nested:
//<h1> (header)
//  <style>
//    <color:>
//once we know the nesting, we can then write the code in order of nesting
// header.style.color = ' 'rgba(0,0,0,0)', '#hex', or 'written color' '



/***** Deliverable 3 *****/

//document.querySelectorAll('.traveler')     ---what i had before review. 
console.log('This is what the traveler object looks like: ', traveler)

const profile = document.querySelector('div#profile')
const img = profile.querySelector('img')
img.src = traveler.photo
img.alt = traveler.name
console.log(img)

const h2 = profile.querySelector('h2')
h2.textContent = traveler.name

const em = profile.querySelector('em')
em.textContent = traveler.nickname



/****notes****/
//can access index.js because both data.js and index.js are inside the html file, access the sacme scope
//use elements and hover over to see the element we're interested in
//need to find the existing element on the page
//scope search, create a variable called profile and querySelector look for the div tag associated with the traveler. <div id="profile">
//now create variable called img and querySelector look for the img tag nested/child in the div tag. 
//img.src comes from the htlm tag named the same. this is the image source. we want to assign this to our traveler.photo, which comes from the data.js traveler array's key pairs
//img.alt also comes from the html tag. this is the alternate name for the image. in our html file we see that the alt = {traveler name}, so we will use 


/***** Deliverable 4 *****/
const ul = document.querySelector('ul#animals')

traveler.animalSightings.forEach(function (animalSightingObject) {
    // console.log(animalSightingObject)

    const li = document.createElement('li')
    li.dataset.id = animalSightingObject.id

    li.innerHTML = `<p>${animalSightingObject.description}</p>
    <img src="${animalSightingObject.photo}" alt="${animalSightingObject.species}"/>
    <a href="${animalSightingObject.link}" target="_blank">Here's a video about the ${animalSightingObject.species} species!</a>`

    ul.append(li)
})





//iterate over the animal sightings array
//ul with the id of animals
//use (console.log) as the callback function to check what the function will give us
//we can see the object, index, and the original array
//for each is passing three arguments into the callback function
//use combo approach 
//estabish an outer element



/***** Deliverable 5 *****/
const liToRemove = document.querySelector('[data-id="3"]')
console.log(liToRemove)
liToRemove.remove()