# Flags of the World

## Introduction
Flags of the world is a fun, interactive and educational game which aims to teach the user about flags from different contries around the globe. The game features difficulties suitable for all ages.

## Design

It is essential that a simplistic game has an easy to use UI. This ensures that the user can navigate the page effectivly and quickly. Since this game is designed to be an educational tool, and potentially used by young children it is important to make it as simplistic as it can be.

Due to its nature a simple game like this will most likely be used on a mobile platform, with this in mind the sensible decision is to optimise the website primarily for mobile use.

One of the future aspirations of this project is to be expanded to more games in the future. This may include other geographical games or other quizes. Therefore it is important that there is a suitable navigation menu if the user needs to navigate to other pages. This can be added as and when more content has been created.

Below are the initial concept designs for the project. They were created with balsamiq wireframes.

![Mobile Home Page](./assets/images/readme/mobile-homepage.JPG)
![Mobile Page Content](./assets/images/readme/mobile-flag-game.JPG)

![Tablet Home Page](./assets/images/readme/ipad-homepage.JPG)
![Tablet Page Content](./assets/images/readme/ipad-flag-game.JPG)

![PC Home Page](./assets/images/readme/desktop-homepage.JPG)
![PC Page Content](./assets/images/readme/desktop-flag-game.JPG)

## Features

* Upon opening the game you are greeted with an interactive box. In this box you can type your name, this will be used later when you are told your score. It can also be used in future iterations where a scoreboard may be added.
* The user is also presented with four difficulty boxes to choose from. These range from easy to extreme. Based on the difficulty selection the time the user has to answer the questions and the number of questions will change.
* Once the user gets into a game the counter will start and they will be presented with a flag and five options to choose from. If the user selects the correct answer the box will become green and the score will go up, indicating that the user got the correct answer. If the user got the answer wrong, the box will turn red and the correct box will light up green, the score tally will also not go up.
* To add a bit of pressure to the user, the game also features a timer. Once the timer gets to 0 then the game will automatically move to the next question. This makes it a lot harder to cheat if the user wanted to.
* Once the game is over an alert will pop up on the users screen and will tell them there score. If the user decided to enter in there name then the message will be personalised to them.

## Features to come

* A difficulty factor has been added to the array for future use. Each flag starts on a difficulty of 0.5. When a user gets the question correct, the difficulty value will be multiplied by 99% then that value will become the new difficulty value. If a user gets a question wrong the opposite will happen, the value will be multiplied by 101% and that will become the new value. After some time the difficulties will become scattered. This is when a selection rule can be created, taking the lower scoring flags for the easy difficulty and the higher scoring flags for the harder difficulties.

* Leaderboard
* Previous performace charts
* Obsfascate data

## Testing

* In the initial testing 4 participants were selected, the response was positive. However, they had a couple of suggestions, they didn't like the two stage click on the difficulty so the second click was removed. They also did not like all the boxes turning red when they were wrong. They requested more distinction between there selected answer and the correct one.
* In user testing I selected two participants to trial the game whilst it was in its development stage. I observed the user as they played the game. I noticed that the timer frequently ran out whilst they were playing, the timer didnt have any effect on the game at this point but it was worth noting that 8 seconds is not long enough for self proclaimed novices


## Bugs

* One of the initial 'bugs' is with the random selection of the flag. There is a chance that the same flag will be selected back to back. However, The probability of this is very low at 1/64,516 (0.00155%). The issue comes when randomly selecting answers to the question, the probability of 2 values being the same when randomly selecting from the array is at least 2.4%. Running an example 10,000,000 times it returned 3.94%
* The probablility of the flag returning back to back should only happen 1 in every 2150 games. However, the bigger issue is a flag re-occuring during the same game. Based on a game size of 30 the probability that a flag will appear twice goes up to 83.68% which means there will be duplicate flags in every 5 out of 6 games.
To counter this, the array was shuffled and 30 flags were selected in order, so the shuffle is random but the selection is in order.
* Upon further testing another issue arised. There was a small chance that two answers could be in the option list. It has been programmed to select 5 random answers from the flag array then it overwrites the correct answer to a random box, in doing so there is a chance to select the correct answer randomly then overwrite an incorrect answer with the correct one resulting in 2 correct answers with only one being accepted.
* There is an issue with event listeners and the validation function. Currently the event listener is coppied down and an index value is set, this is used in the validation function to differentiate between the user choice. I attempted to add the event listener into a for loop to avoid the same lines repeated. Whenever that change is made, the selection of userChoice breaks and doesnt work how it is intended. As it works at the moment this can be catagorised as an optimisation and can be completed at a later date.


## Notes

# Remember
* Variable names
* Information Architecture
* Splash page required
* Accesability
* Usage of web standards
* 'linter' gitpod
* add sections to code
* use loop and dont number varables
* program defensivly
* Bug discovery

## Credits

Flags were taking from https://www.worldometers.info/geography/flags-of-the-world/