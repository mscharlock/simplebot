'use strict';

//Global variables
const categories = ['drones', 'gaming systems', 'phones', 'tablets', 'computers', 'smart home gadgets', 'wearables'];

const drones = ['drone BEBOP', 'drone BEBOP 2'];

//used for Q4-A (see below)
let phoneChoice = '';

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
  var lowerCaseCat = selectedCategory.toLowerCase();
  console.log('lowercase', selectedCategory);
  userInfo.categoryOfInterest = selectedCategory;

  switch (lowerCaseCat) {
  //I would probably do something similar to try to capture a variety of responses for each of the categories, but here's just one example:
  case 'drones' || 'drone' || 'drone camera' || 'flying camera':
    alert('Great! We have the following kinds of drones available: ' + drones[0] + ' or ' + drones[1]);
    selectADrone();
    break;
  case 'phones' || 'tablets':
    alert('Excellent, we have many phones and tablets available.');
    selectAPhone();
    break;
  default:
    alert('Sorry, I could not understand you, please try again.');
    selectACategory();
  }
}

//Q3-A: Select a kind of drone
function selectADrone() {
  let kindOfDrone = prompt('What kind of drone is most interesting to you?');
  userInfo.productOfInterest = kindOfDrone;
  var lowerCaseDrone = kindOfDrone.toLowerCase();

  switch (lowerCaseDrone) {
  case 'drone bebop': {
    alert('Great choice. This drone costs 14.99 Euro/month to rent.');
    break;
  }
  case 'drone bebop 2' || 'drone bebop two': {
    alert('Great selection! This drone costs 20.99 Euro/month to rent.');
    break;
  }
  default: {
    'Sorry, I did not understand you';
    selectADrone();
    break;
  }
  }
}

//Q3-B: Select a kind of phone
function selectAPhone() {
  let kindOfPhone = prompt('Do you prefer a Samsung or an iPhone?');
  var lowerCasePhone = kindOfPhone.toLowerCase();

  switch(lowerCasePhone) {
  case 'samsung': {
    alert('Great choice. We offer the Galaxy S8 for 44.99 Euro/month or the S8+ for 49.99/month');
    break;
  }
  case 'iphone' || 'apple': {
    var iPhoneChoice = prompt('We love Apple products too. What is most important to you - tons of space, a low price, or having the top-of-the-line model?');
    phoneChoice = iPhoneChoice.toLowerCase();
    iPhoneDecision();
    break;
  }
  default: {
    alert('Pardon? Try typing another answer');
    selectAPhone();
  }
  }
}

//Q4-A : iPhone Choice
function iPhoneDecision(type) {
  var options = {
    'space': function() {
      return alert('I think you should get the iPhone 7 128GB. You can rent one through Grover for only 44.99 Euro/month.');
    },
    'low price': function() {
      return alert('I think you would like the iPhone 7 32GB. It has great features and the lowest monthly cost of any of our phone plans, at 39.99 Euro/month.');
    },
    default: function() {
      alert('Can you repeat that? I want to make sure I give you a great recommendation!');
      iPhoneDecision();
    }
  };
  return options[type]();
}

var phone = iPhoneDecision('space');

//
//
//
//   switch(phoneChoice) {
//   case 'space' ||'tons of space': {
//     alert('I think you should get the iPhone 7 128GB. You can rent one through Grover for only 44.99 Euro/month.');
//     break;
//   }
//   case 'low price': {
//     alert('I think you would like the iPhone 7 32GB. It has great features and the lowest monthly cost of any of our phone plans, at 39.99 Euro/month.');
//     break;
//   }
//   case 'top-of-the-line': {
//     alert('Treat yourself! Enjoy the most space and features of any of our phones, by renting the iPhone 7 Plus 128 GB for just 49.99 Euro/month.');
//     break;
//   }
//   default: {
//     'Can you repeat that? I want to make sure I give you a great recommendation!';
//     iPhoneDecision();
//     break;
//   }
//   }
// }

//Run question functions
initQ();
selectACategory();

//save userInfo to localStorage
if (localStorage.userData) {
  userInfo = JSON.parse(localStorage.userData);
} else {
  localStorage.setItem('userData', JSON.stringify(userInfo));
}
