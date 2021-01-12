/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)

const list = document.querySelector('#animals')

/***** Deliverable 2 *****/

header.style.color = 'orange'

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const img = document.querySelector('img');
const h2 = document.querySelector('h2');
const em = document.querySelector('em');
const allAnimalSightings = document.querySelector('#animals');

img.src = traveler.photo
img.alt = traveler.name
h2.textContent = traveler.name
em.textContent = traveler.nickname

/***** Deliverable 4 *****/

const animalSightings = traveler.animalSightings

animalSightings.forEach(function(animal){
    renderAnimal(animal);
})

// console.log(traveler.animalSightings)

function renderAnimal(animal){
    
    const li = document.createElement('li');
    const p = document.createElement('p');
    const img = document.createElement('img');
    const a = document.createElement('a');
    

    li.dataset.id = `${animal.id}`;
    p.textContent = `${animal.description}`;
    img.src = `${animal.photo}`;
    img.alt = `${animal.species}`;
    a.href = `${animal.link}`;
    a.target = '_blank';
    a.textContent = `Here's a video about the ${animal.species} species!`

    li.append(p, img, a)
    list.append(li)
    console.log(li)
}


/***** Deliverable 5 *****/

let sneakyAnimal = document.querySelector(`li[data-id='3']`)
sneakyAnimal.remove()