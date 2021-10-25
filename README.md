# Flags of the World

## Features

* Added diffculty factory to the arrar. In place to calculate a difficulty rating to segrigation into easy normal hard at a later stage.

## Creating the array
To create the array I coppied all of the image files from the directory and inserted them into excel, from there I used the find and replace feature to remove the .png then created a simple calulation to build up a string.
= "{country:'" & PROPER(A1) & "',image:'" & A1 & "',fact:''},"

## Bugs

* One of the initial 'bugs' is with the random selection of the flag. There is a chance that the same flag will be selected back to back. However, The probability of this is very low at 1/64,516 (0.00155%). The issue comes when randomly selecting answers to the question, the probability of 2 values being the same when randomly selecting from the array is at least 2.4%. Running an example 10,000,000 times it returned 3.94%
* The probablility of the flag returning back to back should only happen 1 in every 2150 games. However, the bigger issue is a flag re-occuring during the same game. Based on a game size of 30 the probability that a flag will appear twice goes up to 83.68% which means there will be duplicate flags in every 5 out of 6 games.
To counter this, the array was shuffled and 30 flags were selected in order, so the shuffle is random but the selection is in order.
* Upon further testing another issue arised. There was a small chance that two answers could be in the option list. It has been programmed to select 5 random answers from the flag array then it overwrites the correct answer to a random box, in doing so there is a chance to select the correct answer randomly then overwrite an incorrect answer with the correct one resulting in 2 correct answers with only one being accepted.


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

# Possible features
* Timer/Time out
* Data could be in a separate file
* Restart Feature
* Add wire frame for read me
* remove all console.log beofre launch
* Leader Board
* Charts (Google)
* Obsfascate data