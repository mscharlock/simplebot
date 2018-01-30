'use strict';

//Item categories array
const categories = ['drones', 'gaming systems', 'phones', 'tablets', 'computers', 'smart home gadgets', 'wearable'];

//Types of drones array
const drones = ['droneA', 'droneB', 'droneC'];


//Initializing question in our dialogue, prompts for a category
function initQ() {
  let name = prompt('Hello! I am the groverbot! What is your name?');

  alert('Nice to meet you, ' + name + '. I will be helping you find a product today. What are you interested in? We have: ' + categories);
}

//2nd question in our dialogue flow
function selectACategory() {
  var selectedCategory  = prompt('Tell me, what kind of tech would you be interested in renting from Grover?').toLowerCase();

  switch (selectedCategory) {
  case 'drones':
    var selectedDrone = prompt('Great! We have the following kinds of drones available: ' + drones);
    selectADrone();
    break;
  case 'phones':
    prompt('Excellent, we have many phones available. Are you looking for an iPhone or anot kind of phone? Please answer by stating iPhone or other.');
    break;
  default:
    alert('NOPE');
  }
}


//Selected Drone Q
function selectADrone() {
  let kindOfDrone = prompt('What kind of drone is most interesting to you?').toLowerCase();
  if(kindOfDrone === 'dronea') {
    alert('Great choice. This drone costs $14.99 a month to rent.');
  }
  if(kindOfDrone === 'droneB') {
    alert('Great selection! This drone costs $20.99 a month to rent.');
  }
}


initQ();
selectACategory();


// if(selectedPhone === 'iPhone') {
//   alert('The most simplistic iPhone costs $20.99 a month to rent.');
//   break;
