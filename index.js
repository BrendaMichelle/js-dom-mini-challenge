/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)

// just added a defer 

/***** Deliverable 2 *****/

header.style.color = "blue";



/***** Deliverable 3 *****/
 console.log('This is what the traveler object looks like: ', traveler)
const newImg = document.querySelector(".traveler #profile img");
const travelerName= document.querySelector("div.traveler div#profile h2 ");
travelerName.textContent = traveler.name;
newImg.src = traveler.photo;
newImg.alt = traveler.name; 

const em = document.querySelector('div.traveler div#profile em');
em.textContent = traveler.nickname; 

/***** Deliverable 4 *****/

const ul = document.querySelector('div.traveler ul#animals');
traveler.animalSightings.forEach( function(animal){
    const li = document.createElement('li');
    li.id = animal.id; 
    const p = document.createElement('p');
    p.textContent = animal.description;
    const img = document.createElement('img');
    img.src = animal.photo;
    img.alt = animal.species; 
    const a = document.createElement('a');
    a.href = animal.link;
    a.textContent = `Here's a video about the ${animal.species}!`;
    li.append(p, img, a);
    ul.append(li);

})


/***** Deliverable 5 *****/

const hmm= document.querySelectorAll("li");
hmm[2].remove(); 
