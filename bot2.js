'use strict';
//Global variables
const categories = ['drones', 'phones', 'gaming systems', 'computers', 'smart home gadgets', 'wearables'];

const drones = ['drone BEBOP', 'drone BEBOP 2'];

let form = document.getElementById('bot-form');
let chatHistory = document.getElementById('chat-history');
let userInfo = {
  name: '',
  categoryOfInterest: '',
  productOfInterest: '',
  date: new Date(),
};

//QUESTIONS
//Q1
function initQ() {
  let firstQ = 'Hello! I am the groverbot! What is your name?';
  userInfo.name = name;

  alert('Nice to meet you, ' + name + '. I will be helping you find a product today. What are you interested in? We have: ' + categories[0] + ' and ' + categories[1] + '. ');
}

//Q2
// function selectACategory() {
//   var selectedCategory  = prompt('Tell me, what kind of tech would you be interested in renting from Grover?');
//   var lowerCaseCat = selectedCategory.toLowerCase();
//   console.log('lowercase', selectedCategory);
//   userInfo.categoryOfInterest = selectedCategory;
//
//   switch (lowerCaseCat) {
//   case 'drones':
//     alert('Great! We have the following kinds of drones available: ' + drones[0] + ' or ' + drones[1]);
//     selectADrone();
//     break;
//   case 'phones':
//     alert('Excellent, we have many phones available. But my developer just needs this thing to work simply with one input so not going to answer your question right now.');
//     break;
//   default:
//     alert('Sorry, I could not understand you, please try again.');
//     selectACategory();
//   }
// }
//
// //Q3-A: Select a kind of drone
// function selectADrone() {
//   let kindOfDrone = prompt('What kind of drone is most interesting to you?');
//   userInfo.productOfInterest = kindOfDrone;
//   var lowerCaseDrone = kindOfDrone.toLowerCase();
//
//   switch (lowerCaseDrone) {
//   case 'drone bebop': {
//     alert('Great choice. This drone costs 14.99 Euro/month to rent.');
//     break;
//   }
//   case 'drone bebop 2': {
//     alert('Great selection! This drone costs 20.99 Euro/month to rent.');
//     break;
//   }
//   default: {
//     'Sorry, I did not understand you';
//     selectADrone();
//     break;
//   }
//   }
// }

// initQ();
// selectACategory();

//Render dom things
let chatDiv = document.createElement('div');


//Form things
form.addEventListener('submit', formData)

function formData(event) {
  event.preventDefault();
  form.reset();

}
