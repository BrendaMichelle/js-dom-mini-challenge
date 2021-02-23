/***** Deliverable 1 *****/
const header = document.querySelector('h1#header')
console.log("Here's your header:", header)

// I changed the argument for querySelector so that the h1 tag was included.
// I also added defer attribute to the html file so that the the script file is executed only after the HTML file has loaded.

/***** Deliverable 2 *****/

header.style.color = 'red'

// I just googled how to use JavaScript to alter an elements color, and this was the first solution that came up.

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
const travelerName = document.querySelector("h2");
travelerName.innerText = traveler.name;

const travelerNickname = document.querySelector("em");
travelerNickname.innerText = traveler.nickname;

const travelerImage = document.querySelector("img");
travelerImage.src = traveler.photo;
travelerImage.alt = traveler.name;

// I assigned all name, nickname, and image related tags to a variable then used innerText to populate their respective portions of the webpage.
// At first, I tried using innerContent, however it displayed the accompanying HTML placeholder text, so I found that using innerText rendered the correct data.
// For the image, I simply assigned the img tag to a variable, then used the data.js file to update its attributes with the appropriate URI for the desired image

/***** Deliverable 4 *****/

traveler.animalSightings.forEach(function (animalSightings) {
    const li = document.createElement('li');
    li.dataset.id = animalSightings.id;

    li.innerHTML = `<p>${animalSightings.description}</p>
    <img src="${animalSightings.photo}" alt="${animalSightings.species}"/>
    <a href="${animalSightings.link}" target="_blank">Here's a video about the ${animalSightings.species} species!</a>
  </li>`
})

/***** Deliverable 5 *****/
