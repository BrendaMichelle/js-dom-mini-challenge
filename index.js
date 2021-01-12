/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)
// Add in the "defer" in the script on line 9 or moving it to the bottom

/***** Deliverable 2 *****/

header.style.color = "white"

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
const h2 = document.querySelector('h2')
h2.textContent = traveler.name
const em = document.querySelector('em')
em.textContent = traveler.nickname
const img = document.querySelector('img')
img.alt = traveler.name
img.src = traveler.photo
 

/***** Deliverable 4 *****/
const animals = document.getElementById('animals') 

traveler.animalSightings.forEach(function(animal){

    const li = document.createElement('li');
    const p = document.createElement('p');
    const img2 = document.createElement('img');
    const a = document.createElement('a');

    li.dataset.id = animal.id;
    p.textContent = animal.description;
    img2.src = animal.photo;
    img2.alt = animal.species;
    a.href = animal.link;
    a.textContent = `Here's a video about the ${animal.species}`;

    li.append(p, img2, a);
    animals.append(li);
})


/***** Deliverable 5 *****/

const june = document.querySelector(`[data-id='3']`)
june.remove()

