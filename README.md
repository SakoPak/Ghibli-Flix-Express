# Ghibli Flix

## Introduction

Ghibli Flix is a place to find all your favorite Ghibli films! You can browse the Ghibli film library, read a summary and learn more about your favorite Ghibli films.


## Logging in Online
 To log in to the live site, click <a href="https://sakopak.github.io/Ghibli-Flix/" target="_blank">here!</a>

## Installation

Before you can run the app with `nodemon server.js`, install the dependencies: Node.js and npm on your computer. 

[Documentation on downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
To begin, navigate on the project directory (after you have downloaded or cloned this repository) and run:

##### `npm install`

- Then, while in the project directory, you can run:

##### `nodemon server.js`

- Nodemon is a tool that helps develop Node.js based apps by automatically restarting and developing when any changes are detected. 
- To use, simply replace the word node on the command line when running your script.
- To install: ``` npm install -g nodemon ```

## A Preview of Ghibli Flix
![GhibliScreenShot1](https://user-images.githubusercontent.com/82487617/171982525-233f2371-1478-4f24-bc54-2f6b76e4d664.png)

![GhibliScreenShot2](https://user-images.githubusercontent.com/82487617/171982562-d1b0abf7-f700-4abe-bc04-df907bb1aa50.png)

![GhibliScreenShot3](https://user-images.githubusercontent.com/82487617/171982588-53f57974-e977-4ef7-9301-3aa80110ccfa.png)

## User Stories    

- User will be able to sign up, sign in, sign out and change password.
- User will create a profile and be able to update and delete it.
- User will pick a Ghibli movie that they want further information on and view all Ghibli movies.
  

## ERD
[My ERD](https://imgur.com/a/1URM9df)

## Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/` | `users#changepw`  |
| DELETE | `/sign-out/`        | `users#signout`   |

## API Routes

### _User Authorization Routes_

| HTTP Method   | URL Path        | Result               | Action           |
|:--------------|:----------------|:---------------------|:-----------------|
| POST          | /sign-up        | create profile       | create           |
| POST          | /sign-in        | get single profile   | show or retrieve |
| DELETE        | /sign-out       | delete profile       | destroy          |
| PATCH         | /change-password| update password      | update           |


### _Profile Routes_

| HTTP Method   | URL Path        | Result               | Action           |
|:--------------|:----------------|:---------------------|:-----------------|
| GET           | /profiles       | read list of profiles| index or list    |
| GET           | /profiles/`:id` | read single profile  | show or retrieve |
| POST          | /profile        | create profile       | create           |
| PATCH         | /profiles/`:id` | update profile       | update           |
| DELETE        | /profiles/`:id` | delete profile       | destroy          |

### _Film Routes_

| HTTP Method   | URL Path        | Result               | Action           |
|:--------------|:----------------|:---------------------|:-----------------|
| GET           | /films           | see list of films   | index or list    |
| GET           | /film/:id        | view a film         | create           |



## Technologies Used

|    Libraries      | Languages        | Frameworks              | Database          | Version Control      | API           |
|:-----------------------------------------|:----------------|:---------------------|:-----------------|:--------------------|:-----------------|
| [React.js](https://reactjs.org/)       |    [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)        |  [Express](https://expressjs.com/) | [MongoDB](https://www.mongodb.com/)   | [GitHub](https://github.com/) | [Ghibli Studio API](https://ghibliapi.herokuapp.com/)     |
|   [Axios](https://www.npmjs.com/package/axios)        | [Javascript](https://www.javascript.com/)          | [BootStrap](https://getbootstrap.com/)       |           |
|   [Mongoose](https://mongoosejs.com/)         | [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)          |        |          |
|         |           |        |         |

### [Link to Front End Repo](https://github.com/SakoPak/Ghibli-Flix)
### Links to Deployed Sites:
- [Link to the API Deployed](https://afternoon-earth-27940.herokuapp.com/)
- [Link to the Client Deployed](https://sakopak.github.io/Ghibli-Flix/)


## Stretch Goals
- User can pick movies to place on their watchlist.
- User will be able to edit, delete and update their watchlist.
- User can further personalize their dashboard.

## Image Credit
- [Studio Ghibli](https://www.ghibli.jp/)
- <a target="_blank" href="https://icons8.com/icon/13wc47z7qRRJ/totoro">Totoro</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
  
## About Me

Hi, I'm Sako Pak, a former photographer turned software engineer.
I love the intersection of where art and tech collide and am currently studying full time at General Assembly's Software Engineering Immersive, learning how to build beautiful experiences and powerful programs through the magic of a machine.

Thank you for looking at my work!  


## Find me at:
- <a href="https://www.linkedin.com/in/sako-pak/" target="_blank">LinkedIn</a>
- <a href="https://github.com/SakoPak" target="_blank">GitHub</a>

Contact: sako.taya@gmail.com
