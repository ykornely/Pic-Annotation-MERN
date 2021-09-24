needed packages (server):
	bcryptjs: ^2.4.3
	body-parser: ^1.19.0
	buffer-image-size: ^0.6.4
	cors: ^2.8.5
	express: ^4.17.1
	jsonwebtoken: ^8.5.1
	mongoose: ^5.12.9
	multer: ^1.4.2
	passport: ^0.4.1
	passport-local: ^1.0.0

needed packages (client):
	joi: ^17.4.0
	react: ^17.0.2
	react-canvas-draw: ^1.1.1
	react-dom: ^17.0.2
	react-router-dom: ^5.2.0

Preferred IDE:
Visual studio Code

Download Node.js.

Write in the terminal (client folder):
npm i

Write in the terminal (Server folder):
npm i

For the database connection it is required to have a MongoDB database with 3 collections with the names:
users, pictures, drawings

A way to achieve this: 
First, Setup MongoDB (4.2). Use MongoDB Compass and connect with the default configurations.
Then create a database with the name MongoDB. After that create the 3 required collections (users, pictures, drawings).

Start MongoDB connection by running the 'mongod' command in the terminal (folder: *\MongoDB\Server\4.2\bin).
Run node app.js in the terminal (Server folder). Check the console for a succeed message.
Run npm start in the terminal (client folder). Let it change the port to localhost:3001 by pressing 'y'.
In the browser use the http://localhost:3001/ URL.