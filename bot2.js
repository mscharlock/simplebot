'use strict';
//Global variables
const categories = ['drones', 'phones', 'gaming systems', 'computers', 'smart home gadgets', 'wearables'];

// const drones = ['drone BEBOP', 'drone BEBOP 2'];

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
kickOffPara.innerHTML = firstQ
chatHistory.appendChild(kickOffPara);

//Form things
form.addEventListener('submit', formDataName);


function createRadioButton(value, name) {
  var radioHtml = '<input type="radio" name=' + name +' value=' + value +'/>';

  var radioDiv = document.createElement('div');
  radioDiv.innerHTML = radioHtml;

  return radioDiv.firstChild;
}

let phoneButton = createRadioButton('phones', 'phone');
let droneButton = createRadioButton('drones', 'drone');


function formDataName(event) {
  event.preventDefault();
  console.log(event.target.answerBox.value);
  let nameInput = event.target.answerBox.value;
  userInfo.name = nameInput
  let nameChatAnswer = document.createElement('p');
  nameChatAnswer.innerHTML = nameInput;
  chatHistory.appendChild(nameChatAnswer);

  let nameResponse = 'Nice to meet you, ' + nameInput + '. I will be helping you find a product today. What are you interested in? We have: ' + categories[0] + ' and ' + categories[1] + '. ';
  let nameResponseBox = document.createElement('p');
  nameResponseBox.innerHTML = nameResponse;
  chatHistory.appendChild(nameResponseBox);

  chatHistory.appendChild(phoneButton);
  chatHistory.appendChild(droneButton);
  //
  // chatHistory.appendChild(chatForm);

  form.reset();
}

function renderChat() {
  chatHistory.innerHTML = chatData;
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
