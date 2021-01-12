/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "blue";


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
const profile = document.querySelector("#profile")
console.log(profile)
const travelerImg = profile.querySelector("img")
const travelerName = profile.querySelector("h2")
const travelerNickname = profile.querySelector("em")
travelerImg.src = traveler.photo;
travelerImg.alt = "Profile Pic"
travelerName.textContent = traveler.name;
travelerNickname.textContent = traveler.nickname;


/***** Deliverable 4 *****/
traveler.animalSightings.forEach(function (animalSeen){
    const animals = document.querySelector("#animals")
    const newListItem = document.createElement("li")
    newListItem.setAttribute("data-id", animalSeen.id)
    const newParagraph = document.createElement("p");
    newParagraph.textContent = animalSeen.description;
    const newImg = document.createElement("img");
    newImg.src = animalSeen.photo;
    newImg.alt = animalSeen.species;
    const newLink = document.createElement("a");
    newLink.href = animalSeen.link;
    newLink.target = "_blank";
    newLink.textContent = `Here's a video about the ${animalSeen.species} species!`;
    newListItem.append(newParagraph, newImg, newLink);
    animals.append(newListItem);
})



/***** Deliverable 5 *****/
const badLi = document.querySelector("li[data-id='3']");
badLi.remove();
