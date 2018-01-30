'use strict';

//Global variables
const categories = ['drones', 'gaming systems', 'phones', 'tablets', 'computers', 'smart home gadgets', 'wearable'];

const drones = ['drone BEBOP', 'drone BEBOP 2'];

//Where I will store all information from the user's chat (subsequently, I will push this into Local Storage)
let userInfo = {
  name: '',
  categoryOfInterest: '',
  productOfInterest: '',
  date: new Date(),
};

//QUESTIONS
//Q1
function initQ() {
  let name = prompt('Hello! I am the groverbot! What is your name?');
  userInfo.name = name;

  alert('Nice to meet you, ' + name + '. I will be helping you find a product today. What are you interested in? We have: ' + categories);
}

//Q2
function selectACategory() {
  var selectedCategory  = prompt('Tell me, what kind of tech would you be interested in renting from Grover?');
  userInfo.categoryOfInterest = selectedCategory;

  switch (selectedCategory) {
  case 'drones':
    alert('Great! We have the following kinds of drones available: ' + drones);
    selectADrone();
    break;
  case 'phones':
    alert('Excellent, we have many phones available. Are you looking for an iPhone or anot kind of phone? Please answer by stating iPhone or other.');
    break;
  default:
    alert('NOPE');
  }
}

//Q3: Select a kind of drone
function selectADrone() {
  let kindOfDrone = prompt('What kind of drone is most interesting to you?');
  console.log('kind of Drone' , kindOfDrone);
  userInfo.productOfInterest = kindOfDrone;

  if(kindOfDrone === 'drone BEBOP') {
    alert('Great choice. This drone costs $14.99 a month to rent.');
  }
  if(kindOfDrone === 'drone bebop 2') {
    alert('Great selection! This drone costs $20.99 a month to rent.');
  }
  else {
    alert('Sorry, I was confused by your answer.');
  }
}



//Run functions
initQ();
selectACategory();

//save userInfo to localStorage
if (localStorage.userData) {
  userInfo = JSON.parse(localStorage.userData);
} else {
  localStorage.setItem('userData', JSON.stringify(userInfo));
}
