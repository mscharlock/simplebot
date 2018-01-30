'use strict';
//Global variables
const categories = ['drones', 'phones', 'gaming systems', 'computers', 'smart home gadgets', 'wearables'];

let answers = document.getElementById('answers');
let form = document.getElementById('botForm');
let chatHistory = document.getElementById('chatHistory');
let userInfo = {
  name: '',
  categoryOfInterest: '',
  productOfInterest: '',
  date: new Date(),
};
let firstQ = 'Hello! I am the groverbot! What is your name?';

//Render the first question - fyi, I'm just reminding myself about how to render here
let kickOffPara = document.createElement('p');
kickOffPara.innerHTML = firstQ;
chatHistory.appendChild(kickOffPara);

//First Event Listener
form.addEventListener('submit', formDataName);

$('#secondQuestion').hide();

//Q1
function formDataName(event) {
  event.preventDefault();
  console.log(event.target.answerBox.value);
  let nameInput = event.target.answerBox.value;
  userInfo.name = nameInput;
  let nameChatAnswer = document.createElement('p');
  nameChatAnswer.innerHTML = nameInput;
  let id = document.createAttribute('id');
  id.value = 'answerOne';
  nameChatAnswer.setAttributeNode(id)
  chatHistory.appendChild(nameChatAnswer);

  let nameResponse = 'Nice to meet you, ' + nameInput + '. I will be helping you find a product today. What are you interested in? We have: ' + categories[0] + ' and ' + categories[1] + '. ';
  let nameResponseBox = document.createElement('p');
  nameResponseBox.innerHTML = nameResponse;
  chatHistory.appendChild(nameResponseBox);

  // answers.placeholder = 'Type phones or drones';

  $('#firstQuestion').hide();
  $('#secondQuestion').show();
  form.reset();
}


//Second Event Listener
form.addEventListener('submit', formDataCategory);

// Q2
function formDataCategory(event) {
  event.preventDefault();
  console.log(event.target.phonesDrones.value);
  let categoryInput = event.target.phonesDrones.value;
  userInfo.categoryOfInterest = categoryInput;
  console.log(userInfo.categoryOfInterest);
  let categoryChatAnswer = document.createElement('p');
  categoryChatAnswer.innerHTML = categoryInput;
  chatHistory.appendChild(categoryChatAnswer);

  // let categoryResponse = 'Great, we have two types of drones available. The Bebop and the Bebop 2. Which would you like to learn about?';
  // let categoryResponseBox = document.createElement('p');
  // categoryResponseBox.innerHTML = categoryResponse;
  // chatHistory.appendChild(categoryResponseBox);
  //
  // answers.placeholder = 'Type Bebop or Bebop 2';
  $('#firstQuestion').hide();
  $('#secondQuestion').show();
  form.reset();
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
