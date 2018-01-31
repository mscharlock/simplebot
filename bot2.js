'use strict';
//Global variables
const categories = ['drones', 'phones', 'gaming systems', 'computers', 'smart home gadgets', 'wearables'];
let hello = 'Hello! I am the groverbot! What is your name?';
let chatHistory = document.getElementById('chatHistory');
let userInfo = {
  name: '',
  categoryOfInterest: '',
  productOfInterest: '',
  date: new Date(),
};

//Render the bot's introduction (hello)
let kickOffPara = document.createElement('p');
kickOffPara.innerHTML = hello;
chatHistory.appendChild(kickOffPara);

//First Event Listener
let firstQ = document.getElementById('botForm');
firstQ.addEventListener('submit', whatsYourName);

//Hide the second question
$('#secondQuestion').hide();

//Q1
function whatsYourName(event) {
  event.preventDefault();

//Grab the answerBox, append user's answer with id of answerOne to the DOM
  let nameInput = event.target.answerBox.value;
  let nameAnswer = document.createElement('p');
  nameAnswer.innerHTML = nameInput;
  userInfo.name = nameInput;

  let id = document.createAttribute('id');
  id.value = 'answerOne';
  nameAnswer.setAttributeNode(id);
  chatHistory.appendChild(nameAnswer);

  let nameResponse = 'Nice to meet you, ' + nameInput + '. I will be helping you find a product today. What are you interested in? We have: ' + categories[0] + ' and ' + categories[1] + '. ';
  let nameResponseBox = document.createElement('p');
  nameResponseBox.innerHTML = nameResponse;
  chatHistory.appendChild(nameResponseBox);

//hide the first Q, show the second Q
  $('#firstQuestion').show();
  $('#secondQuestion').hide();
  firstQ.reset();
}

//Second Event Listener
let secondQ = document.getElementById('secondQuestion');
secondQ.addEventListener('submit', whatsYourCategory);

// Q2
function whatsYourCategory(event) {
  event.preventDefault();
  console.log(event.target.phonesDrones.value);

  let categoryInput = event.target.phonesDrones.value;
  userInfo.categoryOfInterest = categoryInput;
  console.log(userInfo.categoryOfInterest);
  let categoryAnswer = document.createElement('p');
  categoryAnswer.innerHTML = categoryInput;
  chatHistory.appendChild(categoryAnswer);

  let categoryResponse = 'Great, we have two types of drones available. The Bebop and the Bebop 2. Which would you like to learn about?';
  let categoryResponseBox = document.createElement('p');
  categoryResponseBox.innerHTML = categoryResponse;
  chatHistory.appendChild(categoryResponseBox);

  let phoneOrDrone = document.getElementById('phoneOrDrone');
  phoneOrDrone.placeholder = 'Type Bebop or Bebop 2';
  $('#secondQuestion').hide();
  // $('#secondQuestion').show();
  secondQ.reset();
}



//Put chat in the right place
// function renderChat() {
//   chatHistory.innerHTML = chatData;
// }

// form.removeEventListener('submit', formDataName);
//
// form.addEventListener('submit', formDataDrones);
//
// function formDataDrones() {
//   console.log('boogie woogie');
// }


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
