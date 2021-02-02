/***** Deliverable 1 *****/
const header = document.querySelector( "h1#header" );
console.log( "Here's your header:", header );

/***** Deliverable 2 *****/
header.style = "color:orange;";

/***** Deliverable 3 *****/
console.log( 'This is what the traveler object looks like: ', traveler );
const travelerProfile = document.querySelector( "div#profile" );
const travelerPhoto = travelerProfile.querySelector("img");
const travelerName = travelerProfile.querySelector("h2");
const travelerNickname = travelerProfile.querySelector("em");

travelerPhoto.src = traveler.photo
travelerPhoto.alt = `A photo of ${traveler.name}`
travelerName.textContent = traveler.name
travelerNickname.textContent = traveler.nickname

/***** Deliverable 4 *****/
const travelerSightings = document.querySelector( "ul#animals" );
traveler.animalSightings.forEach( ( sighting ) => {
    let thisSighting = document.createElement( "li" );
    thisSighting.dataset.id = sighting.id;
    let thisSightingDescription = document.createElement( "p" );
    thisSightingDescription.textContent = sighting.description;
    let thisSightingImage = document.createElement( "img" );
    thisSightingImage.src = sighting.photo;
    thisSightingImage.alt = sighting.species;
    let thisSightingLink = document.createElement( "a" );
    thisSightingLink.href = sighting.link;
    thisSightingLink.target = "_blank";
    thisSightingLink.textContent = `Here's a video about the ${ sighting.species } species!`
    thisSighting.append( thisSightingDescription, thisSightingImage, thisSightingLink );
    travelerSightings.appendChild( thisSighting );
} );

/***** Deliverable 5 *****/
const sightingToRemove = document.querySelector( "li[data-id='3']" )
sightingToRemove.remove();
