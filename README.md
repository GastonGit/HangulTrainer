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