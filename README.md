# Local-Up
## Links
Application URL : https://localup.herokuapp.com

Github Repositroy : https://github.com/meenaambalam/local-up
## Description
This is a mern stack application with a frontend fully linked with the backend. We use Mongo for storing our client data and admin data. The client once signed into their client portal can create a ticket and see their active tickets. On the admin side the admin can convert those non-technical tickets to projects for the future developers the developers will eventually be able to be assigned these projects from within the future developer portal. 

The other technologies used to make this app happen were JWT authentication, react, React-Reveal, axios, and bootstrap. JWT uses react router and axios to which allowed us to seperate website functionality so the clients see the front stage if you will and the admin has seperate access to the backstage. React is the core tecknology that we used through reacts virtual dom we do not have to reload the entire page anymore. We just reload components as needed. Lightspeed is just a react library that provides cool animations. Axios is for the the frontend api calls to the backend node server. We used bootstrap for our css framework we installed it directly in the public index.html so we would not have to import it each time we used it. 
## Table of Contents 
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Screenshots](#Screenshots)
* [Final-Thoughts](#Final-Thoughts)

## Installation
To install necessary dependencies, run the following command:
```
npm i => Node JS, Express, axios, react, react-router-dom, mongoose, react-bootstrap, concurrently, react-reveal, nodemon, JWT, Bcrypts
```
## Usage
You will need node.js, be able to init the project using npm init, and then install the dependencies encased in the package.json using npm i

## Contributing
The team behind this app:
  * [Meena Ambalam](https://github.com/meenaambalam)
  * [Jeff Thao](https://github.com/JeffThao)
  * [Ravi Knutson](https://github.com/Knuts839)
  * [Samer Saadoun](https://github.com/samergain)

## Screenshots
<ins>Initial Page Load Screenshot:</ins>

![Screen #1](./client/src/images/homepage.PNG)

<ins>Client Page functionality Screenshot - Active Tickets:</ins>

![Screen #1](./client/src/images/active_tickets_from_clientpage.PNG)

<ins>Admin Page Client Information Screenshot:</ins>

![Screen #1](./client/src/images/Clients_and_Tickets_from_adminpage.PNG)

## Final-Thoughts 
The Developer portal is a big add along with the ability to chat with an agent.






