![Logo](/docs/logo.png)
# Explore The World

# Goal for this Project
Welcome to Explore The World! A geography game which takes you on a journey around the world and challenges your knowledge to answer multiple choice questions.
Try to answer all the questions while traveling the world to explore your next destination.
If you would like to test your geography and landmarks knowledge, this is the game for you!

![Responsive Displays]

# Table of Contents
* [UX](#ux "UX")
    * [User Goals](#user-goals "User Goals")
    * [User Stories](#user-stories "User Stories")
    * [Site Owners Goals](#site-owners-goals)
    * [User Requirements and Expectations](#user-requirements-and-expectations)
         * [Requirements](#requirements)
         * [Expectations](#expectations)
     * [Design Choices](#design-choices)
        * [Fonts](#fonts)
        * [Icons](#icons)
        * [Colours](#colours)
        * [Structure](#structure)
    * [Features](#features)
        * [Existing Features](#existing-features)
            * [Navigation Bar](#navigation-bar)
            * [Introduction Page](#introduction-page)
            * [Game Page](#game-page)
            * [End Page](#end-page)
            * [High Score](#high-score)
            * [Footer](#footer)
        * [Features to be implemented](#features-to-be-implemented)
    * [Technologies used](#technologies-used)
        * [Languages](#languages)
        * [Tools and Libraries](#tools-and-libraries)
    * [Testing](#testing)
        * [Bugs](#bugs)
            * [Solved Bugs](#solved-bugs)
    * [Validator Testing](#validator-testing)
        * [Unfixed Bugs](#unfixed-bugs)
    * [Deployment](#deployment)
    * [Local Deployment](#local-deployment)
    * [Credits](#credits)

# UX

## User Goals
* Create an interactive quiz with consistent styling across all pages 
  ensuring that the application runs flawlessly across all devices. 
* Visually appealing, including images and questions with multiple choice answer.
* Quality and valuable content.
* Provide a fun and interactive application.
* Test general people knowledge about landmarks around the world.
* Allow the user to log in the best score and compare with previews attempts.


## User Stories
* As a user, I want to easily navigate throughout the website.
* As a user, I want know how to play the game-quiz.
* As a user, I want to see in which question I am answering and how many more I have left.
* As a user, I want to be able to add my name when finish to save my best score.
* As a user, I want to be able to quickly check out the high score when coming back to the game later on.
* As a user, I want to see how I rank on the high score list.
* As a user, I want to know correct answer when my answer is wrong.
* As a user, I want explanation when my answer is wrong.
* As a user, I want to know how much time I have to answer the question.


## Site owners Goals
* Promote various places, their landmarks around the world.
* Promote the game in general and test people knowledge about geography. 
* Increase the number of players.
* Increase rankings on search engines.

### Requirements
* Easy to navigate on various screen sizes.
* Clear information on the services provided.
* Keep the user interested with small bits of information to make them want to engage with the game.
* Simple methods of answering the questions.
* Visually inviting so users do not leave.

### Expectations
* I expect a simple, straight forward intuitive UX experience.
* I expect a clear and simple layout is in place to ensure users can navigate intuitively and have an easy experience.
* I expect my content to be clear.
* I expect screen size not to affect the quality of the website.
* I expect all information to be correct and accurate.


[Back to Top](#table-of-contents)


## Design Choices

### Fonts
In order to move away from the basic fonts available, I have used 
[Google Fonts](https://fonts.google.com/ "Google Fonts") to find a text that best suits the feel of the website. For the main text I have chosen 
[Mochiy Pop One](https://fonts.google.com/specimen/Mochiy+Pop+One?query=moc "Mochiy Pop One font"). as I feel it is has a sharp, simple and easy to read look. To make the questions stand out form the text, I decided to use [Cairo](https://fonts.google.com/specimen/Cairo?query=cai "Cairo font"). This font is complimentary to Mochiy Pop One font but gives clear definition between text and questions.

### Icons
I will used some icons for my website from the [Font Awesome library](https://fontawesome.com/ "Font Awesome"). These icons will only be used where there is no explination needed to their meaning, start game button, high score title and list of the best results on all devices. All icons used will be styled and in keeping with the appearance of the website.

### Colours
I have used [Canva](https://www.canva.com/ "canva") to help in the selection of my colour scheme. I selected the initial colour that I wanted the reast of my pallet to fit with and then used the generator to create the pallet.

I will explain the uses of the varius colours below, starting from the left to right side.

![Colour Pallet](/docs/colour-palette-image.png)

* #FEDE00 - This colur will be used as background colour for play button and next button, also as a hover effect on navbar and choice answer.
* #0C2144 - This colur will be used as text colour for questions, timer, progress text and as a background colour for buttons on high score and end page.
* #019992 - This colur will be used as hover effect on play button, also as background colour on game page container and for pop-up explanation text. 
* #fafafa - This colour will be used as a text colour.
* #5ec416 - This colour will be used to correct answer to questions.
* #d90416 - This colour will be used to incorrect answer to questions.


### Structure

# Features

## Existing Features

### Navbar

* Navbar with Home and High Scores menu to allow the user easy access to all pages.

![Navigation Bar](/docs/navbar-image.png)
### Introduction Page

* Game introduction to allow user to know the main story about the game. 

* Short game instruction to assure that user can play the game without doubts and easily.

* Play button to begin the game.

![Introduction Page](/docs/introduction-page.png)

### Game Page

* The game container has a contdown timer to limit answering time to 20 seconds.

* Each question has it's own hint image to help user remember what landmark the question is linked.

* When user got a wrong answer to question or time finished, a modal shows a brief explanation about correct question answer.

* There is progress bar with text underneath the game container to clearly show the user game progress and remaining questions before finsih.

![Game Page](/docs/game-page-image.png)

### End Game

* After answering 15 quiz questions, user can add name to rank score on High Score page.

* There is also two buttons for home page or play again the game.

![End Game](/docs/end-page-image.png)

### High Score

* A list of top 5 players can be found and every time user plays the game (on the same device) the new score will be added onto it.

* There is also a go home button that leads the user to the index page after checking the high score list.

* Underneath go home button there is also a play again button to instantly begin the game again.

![High Score](/docs/high-score-page.png)


## Features to be Implemented

When there is time, I would like to expand this game to include :
+ Option to know more about the question even if the user answer it correctly.
+ Sound effects to enhance the user experience.
+ Add more questions to question bank and storage it on an API.
+ Choose a different options to play the game.
+ External storage for ranking.

[Back to Top](#table-of-contents)


# Technologies used

## Languages
* [HTML](https://en.wikipedia.org/wiki/HTML "HTML")
* [CSS](https://en.wikipedia.org/wiki/CSS "CSS")
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript "JavaScript")

## Libraries & Framework
* [Google Fonts](https://fonts.google.com/ "Google Fonts")
* [Font Awesome library](https://fontawesome.com/ "Font Awesome")


## Tools
* [Gitpod](https://www.gitpod.io/ "Gitpod")
* [Canva](https://www.canva.com/ "canva")
* [Pixabay](https://pixabay.com/ "Pixabay")


[Back to Top](#table-of-contents)


# Testing

*
*
*
*
*

# Bugs

### Solved bugs


# Validator Testing


### Unfixed Bugs

# Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:
- In the [GitHub repository](), navigate to the Settings tab 
- From the source section drop-down menu, select the **Main** Branch, then click **Save**.
- The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://jureseselj.github.io/explore-the-world/)


## Local Deployment

In order to make a local copy of this project, you can clone it. In your IDE Terminal, type the following command to clone my repository:

- `git clone ### Local Deployment

In order to make a local copy of this project, you can clone it. In your IDE Terminal, type the following command to clone my repository:

- ``

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://github.com/JureSeselj)


[Back to Top](#table-of-contents)


# Credits

For code inspiration, help and advice,
* [Simen Daehlin](https://github.com/Eventyret "Simen Daehlin")
* [Code Institute](https://codeinstitute.net/ie/ "Code Institute")


For content and style inspiration,
* 



[Back to Top](#table-of-contents)