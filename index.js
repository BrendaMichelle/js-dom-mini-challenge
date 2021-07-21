/***** Deliverable 1 *****/

window.onload = function getHeader() {
    let header = document.body.querySelector("#header");
    console.log("Here's your header:", header);


    /***** Deliverable 2 *****/

    header.style.backgroundColor = "orange";

    /***** Deliverable 3 *****/
    console.log('This is what the traveler object looks like: ', traveler);

    let travelerName = document.body.querySelector("#profile h2");
    travelerName.innerHTML = `${traveler.name}`;

    let travelerPhoto = document.body.querySelector("#profile img");
    travelerPhoto.src = `${traveler.photo}`;
    travelerPhoto.alt = `${traveler.name}`;

    

    let travelerNickName = document.body.querySelector("#profile em");
    travelerNickName.innerHTML = `${traveler.nickname}`;

    /***** Deliverable 4 *****/
    let ul = document.body.querySelector("ul#animals")

    numAnimals = traveler.animalSightings.length


    for (let i = 0; i < numAnimals; i++) {
        const animal = traveler.animalSightings[i];

        let li = document.createElement('li');
        li.dataset.id = `${animal.id}`;
        
        // create paragraph containing animal sighting description
        let par = document.createElement('p');
        par.innerHTML = `${animal.description}`;
        li.appendChild(par);

        //create image of animal with alt of {animal sighting species}
        let image = document.createElement('img');
        image.src = `${animal.photo}`;
        image.alt = `${animal.species}`;
        li.appendChild(image);

        // create a link to a video about the animal
        let link = document.createElement('a');
        link.href = `${animal.link}`;
        link.target = "_blank";
        link.innerText = `Here's a video about the ${animal.species} species!`
        li.appendChild(link);

        // render on page
        ul.appendChild(li);
        
    }

    /***** Deliverable 5 *****/
    let fakeAnimal = document.querySelector("ul#animals li[data-id='3']");
    fakeAnimal.remove();

    



}






