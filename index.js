/***** Deliverable 1 *****/
const header = document.querySelector("h1#header")
console.log("Here's your header:", header)
//I had to add a defer to the script line in index.html so there would be HTML on the page for this query to hit, and then add h1 in front of "header" in the query so it would find the element with an id of header in an h1 tag.

/***** Deliverable 2 *****/
header.style.color = "aqua"
//I used console.dir(header) in the dev console on Chrome to check for the applicable key value pairs, found the above style and color keys, and then set the color to aqua.


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const travelerDiv = document.querySelector("div.traveler")
console.log(travelerDiv)
travelerDiv.querySelector("h2").innerText = traveler.name
travelerDiv.querySelector("em").innerText = traveler.nickname
travelerDiv.querySelector("img").src = traveler.photo

//After checking out the contents of the traveler object, I found the elements on the page that needed to be changed and assigned the appropriate values.
//Is this the most efficient way of accessing the inner elements, or is there an easier/better way to do it that I'm forgetting?


/***** Deliverable 4 *****/
const animalList = travelerDiv.querySelector("ul#animals")

traveler.animalSightings.forEach ( function (sighting) {
    const li = document.createElement('li')
    li.innerHTML = `<li data-id=${sighting.id}>
                        <p>${sighting.description}</p>
                        <img src=${sighting.photo} alt=${sighting.species}/>
                        <a href=${sighting.link} target="_blank">Here's a video about the ${sighting.species} species!</a>
                    </li>`
    animalList.append(li)
    }
)
//After assigning the unordered animals list to a variable, I iterated through each of the animal sightings to create a list element for each, filling out the changing fields with string interpolation - then I appended the newly created list item onto the unordered list on the page.


/***** Deliverable 5 *****/

// animalList.querySelector('[data-id="3"]').remove()
animalList.children[2].remove()

//On line 42, I queried the list element I used before to append the list items to select the element with data-id 3, and then call the remove() function on it.

//Line 42 worked, but did not remove the dot for the list, and I noticed the <li> tags from that element were still there when I checked the console on my browser again. After playing around a bit, I found I could instead use line 43 to get all of the child elements of the list, which included the <li> tags, and since I knew that the item with data id 3 was element 2 of the HTMLCollection "array", I removed it by its index position.

//Is there a way to get the list element by its data-id and include the <li> wrapper tags with it? Also, please let me know if I used the wrong vocabulary to describe anything above - thank you!