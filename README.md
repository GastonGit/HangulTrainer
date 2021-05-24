# HangulTrainer
## Description
A simple game for learning the korean alphabet hangul.

## Hangul info
24 basic letters: 
- 14 consonant letters (ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ ㅇ ㅈ ㅊ ㅋ ㅌ ㅍ ㅎ)
- 10 vowel letters (ㅏ ㅑ ㅓ ㅕ ㅗ ㅛ ㅜ ㅠ ㅡ ㅣ). 

27 complex letters formed by combining the basic letters:
- 5 tense consonant letters (ㄲ ㄸ ㅃ ㅆ ㅉ),
- 11 complex consonant letters (ㄳ ㄵ ㄶ ㄺ ㄻ ㄼ ㄽ ㄾ ㄿ ㅀ ㅄ) 
- 11 complex vowel letters (ㅐ ㅒ ㅔ ㅖ ㅘ ㅙ ㅚ ㅝ ㅞ ㅟ ㅢ). 

## Dev info
- Electron
- React

## Features
### Essential features
- List of hangul characters with their romanized counterparts
- Ability to choose which characters to practice
- Predefined sets of characters to practice
- Order of characters randomized each game
- Instant feedback on wrong answers
- Continuously try a question until correct answer
- Speed mode (no need to press enter after inputting an answer)
- Results screen

### Nonessential features
- Personal high scores
- Showcase problem characters (show incorrectly romanized characters multiple times)
- Continuous play (never ending!)

## Product Backlog


### User story: Memory practice
#### Story
As a Player,

I want to try to memorize the romanized version of the hangul characters before playing the game,

So that I do not have to guess on every question
#### Acceptance Criterion 1
Given that the player is not playing the game

When the player clicks the Practice button

Then present the player with every hangul character
- And their romanized counterpart
#### Acceptance Criterion 2
Given that the player is playing the game

When the player clicks the Practice button

Then end the game
- And continue with 'Acceptance Criterion 2':'Then'


### User story: Random order
#### Story
As a Player,

I want the order of which the characters shown in the game to be random

So that every game is unique
- And I learn the characters and not just memorize the order
#### Acceptance Criterion 1
Given that the player plays the game with some or all characters

When the game is about to start

Then randomize the order of characters to be shown


### User story: Game Results
#### Story
As a Player,

I want to see my results after the game,

So that I know how many answers I got correct
#### Acceptance Criterion 1
Given the player just completed a game,

When the game ends,

Then show (Correct answers)/(Amount of questions) for that game


### User story: Instant feedback
#### Story
As a Player,

I want to know when I answer a question correctly or incorrectly,

So that I can learn the characters
- And improve at the game
#### Acceptance Criterion 1
Given that the player is playing the game,

When the player answers a question incorrectly,

Then display a red cross
#### Acceptance Criterion 2
Given that the player is playing the game,

When the player answers a question correctly,

Then display a green checkmark


### User story: Unlimited tries
#### Story
As a Player,

I want to able to guess characters that I do not know,

So that I can learn those characters
#### Acceptance Criterion 1
Given that the player is playing the game,

When the player answers a question incorrectly,

Then let the player answer again,
- And count the current question as incorrect for the results
- And display a blue checkmark when the player finally answers the question correctly
- And allow the player to reset game if they cannot guess correctly 


### User story: Practice characters
#### Story
As a new Player,

I want to choose which characters to practice,

So that I do not get overwhelmed
#### Acceptance Criterion 1
Given that the player is not playing the game,

When player selects a character or group of characters,

Then disable/enable that/those characters for the game


### User story: Predefined practice groups
#### Story
As a Player,

I want predefined groups of characters,

So that I do not have to think about which characters to practice
- And I can easily make the game harder or easier
#### Acceptance Criterion 1
Given that the player is not playing the game,

When the player selects a predefined practice group,

Then start the game
- And only use the characters from the selected predefined group 