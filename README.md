# Simplebot

## Michelle's Latest Attempt at a Chatbot
I decided to use prompts this time to at least get something working on conditional inputs from a user.

## Requirements:
- You need to develop a ChatBot Node.js application.
- The goal is to talk to user and find out what product user is interested in and provide an appropriate subscription plan price.
- Database shouldn’t be used.
All conversations should be recorded.
- Code should be checked in GitHub.

## How I Approached Building This
- First, get a working prototype up of a question/response system using prompts (see bot.js)
- Get a working question/response system for multiple categories and nested conditions using prompts (also in bot.js)
- Reduce protoype to the basic form of the dialog, but convert the dialog into updates to the DOM instead of prompts (see bot2.js)

## Plan Going Forward:
- Instead of using prompts, set up an event listener on the form.
- When submit button is pushed/EE listener is activated:
  - Render the text entered from the user as a <p>
  - Render text response from groverbot as <p> above the input box.
  - May require me to think a little about the submit options, or maybe I should save the selected answer to each question in a different format? That way I can render from inside the userInfo object?
  - Stretch goal: Change the prompt in the input box to help guide a user
- Somehow use Node

## A fancier way to do this that I would maybe think about with more time:
- Scaffold a react/redux front end
- Set up a component for the form/input box and render text based on what is in the store (keep adding to the store when the button is pushed, so it keeps a log of the conversation)

## Previous Approaches
- TCP bot: Tried to create a TCP chat where user could enter information and get automated response based on what they typed. Problem: couldn't get it to transmit to the front end.
- Vanilla bot: Tried to use commander.js package to create CLI flags which
Problem: Couldn't quite figure out how to use process.execArgv in conjunction with the front end.
- Socket bot: Tried using socket.io, although got pretty confused about how to transmit information to the front end. Even though socket.io is supposed to simplify websockets, I still got a bit lost.
- Msft bot: Tried using the Microsoft bot framework on Azure, but possibly could not get the emulator to work due to the fact that I'm developing in Windows right now. (Ubuntu machine is out for repair)
