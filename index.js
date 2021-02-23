/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "red"



/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
const profile = document.querySelector("#profile")
const name = profile.children[1];
name.innerHTML = traveler.name;
const nickName = profile.children[2];
nickName.innerHTML = traveler.nickname;
const pfp = profile.children[0];
pfp.src= traveler.photo
pfp.alt= traveler.name


/***** Deliverable 4 *****/
const animals = document.querySelector("#animals")
const animalSightings = traveler.animalSightings
for(let i = 0; i <traveler.animalSightings.length; i++){
    const item = document.createElement('li');
    item.setAttribute("data-id", `${animalSightings[i].id}`)
    const descrip = document.createElement(`p`)
    const descripText = document.createTextNode(`${animalSightings[i].description}`);
    descrip.append(descripText)
    const img = document.createElement(`img`);
    img.src = animalSightings[i].photo;
    img.alt = animalSightings[i].species;
    const video = document.createElement('a')
    const videoText = document.createTextNode(`Here's a video about the ${animalSightings[i].species} species!`)
    video.append(videoText)
    video.href = animalSightings[i].link
    item.appendChild(descrip)
    item.appendChild(img)
    item.appendChild(video)
    animals.appendChild(item)
}



/***** Deliverable 5 *****/
const unwanted = document.querySelector("[data-id='3']")
unwanted.remove()
