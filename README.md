<a name="readme-top"></a>

# Around - Travel Tracker

## Table of Contents
- [About The Project](#about-the-project)
- [Project Spec](#project-spec)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Accessibility](#Accessibility)
- [Testing](#testing)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)
- [Reflections](#reflections)

---

## About The Project

Rancid Tomatillos is not Rotten Tomatoes. It's way different. It allows a user to se a grid of movies with their movie poster, title, and rating. A user is also able to click on the poster of a movie to access that movie'd details like, budget, release date, tagline, etc. A user is also able to click on a back button to take them back to the original grid of movies.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Project Spec
Travel Tracker is an application built while Lee & Cole were students of the [Turing School of Software and Design](https://turing.edu/) front-end engineering program. The goals of this [project]([https://frontend.turing.edu/projects/travel-tracker.html](https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html)) were to:

* familiarize ourselves with React concepts
* Utilize Lighthouse and Wave for accessibility
* Make network requests to API endpoints to retrieve and manipulate data
* Implement error handling 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Technologies
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
# Getting Started
You can find the project [here](https://github.com/Leoy23/rancid-tomatillos.git) and follow the instructions below to get started.
  

### Installation
1. Clone the repo
   ```sh
   git clone git@github.com:Leoy23/rancid-tomatillos.git
   ```
2. Install NPM packages
   ```sh
   npm install
   npm start
   ``` 
3. Clone down the api repo
   ```sh
  git clone git@github.com:turingschool-examples/travel-tracker-api.git
   ```
4. Install api NPM packages
   ```sh
   npm install
   npm start
   ``` 
5. Enter the following url in your browser: http://localhost:8080/
6. Explore the website.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage
The program displays user data through individual trip cards and the user can also enter a new trip and see that trip displayed among their other trip cards.

[screen-recorder-tue-sep-27-2022-10-50-41.webm](https://user-images.githubusercontent.com/103971359/192587834-3a30d761-d2d4-457e-b95a-1feaa2ab5215.webm)

New feature ideas: 
- [ ] A login for a travel agency
    - [x] the travel agent will be able to approve bookings that are pending.
- [ ] Add a a year-by-year graph of the users trip activity.
- [ ] Users will be able to click on the trip card to display more information about the trip

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Accessibility
This application has 0 errors on the WAVE(Web Accessibility Evaluation Tool) and a score of 100% with Lighthouse.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Testing
I utilized TDD to create our project using [Mocha](https://mochajs.org/) & [Chai](https://www.chaijs.com/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Cole Anthony - [LinkedIn](https://www.linkedin.com/in/cole-edwin-anthony/) - cole.edwin.anthony@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
The following resources helped us build this project:

[![MDN Docs][MDN-shield]][MDN]
[![DAY.JS](https://img.shields.io/static/v1?label=&message=DAY.JS&color=%23f57242&style=for-the-badge)](https://https://day.js.org/en/)
[![Turing School](https://img.shields.io/badge/Turing_School-030303?style=for-the-badge)](https://turing.edu/)
[![Chai Assertion Library](https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white)](https://www.chaijs.com/api/bdd/)
![Stack Overflow](https://img.shields.io/badge/-Stackoverflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Reflections
I wanted to make the data manipulation as simple as I could for readability. I believe I did by utilizing the datasets to pass through a single class. this allowed me to always be working with a single user ID's set of trips. Thinking about it this way allowed me to keep my code clean and streamlined.

Something I had trouble with was refetching my data after I posted new data to the server. I eventually realized my re-fetch function was not waiting for the data to be pasted so I had to refactor my api calls to allow for my post to be in a promise and my refetch to wait for it to post.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[MDN-shield]: https://img.shields.io/badge/MDN_Web_Docs-black?style=for-the-badge&logo=mdnwebdocs&logoColor=white
[MDN]:https://developer.mozilla.org/en-US/


