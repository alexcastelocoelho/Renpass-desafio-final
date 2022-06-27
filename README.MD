#  Renpass.uol - PB Node.js - Compass.Uol
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)	![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

##  👨‍💻   Alex Coelho 

### creating a REST API for the Renpass.uol car rental company 
### Node version used
```
v10.20.1
```
### Npm version used
```
6.14.4
```
### Libs
```
    "@joi/date": "^2.1.0",
    "axios": "^0.27.2",
    "bcrypt": "^5.0.1",
    "bcryptjs": "^2.4.3",
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "joi": "^17.6.0",
    "jsonwebtoken": "^8.5.1",
    "moment": "^2.29.3",
    "mongoose": "^6.3.5",
    "mongoose-paginate-v2": "^1.6.3",
    "swagger-ui-express": "^4.4.0"
    "eslint": "^8.17.0",
    "nodemon": "^2.0.16"
````

## :beginner: get project and run locally
1️⃣. clone the project
 ```
 git clone https://github.com/alexcastelocoelho/Renpass-desafio-final
 ```
2️⃣. install dependencies
 ```
 npm install
 ```
3️⃣. execute the project
 ```
 npm run dev
 ```
create an .env file and set the environment variables. use the .env.example file as a reference to set
 ```
    APP_URL=
    DB_HOST=
    MONGO_ATLAS=
    DB_USER=
    DB_PASS=
    DB_NAME=
    DB_COLLECTION=
    SECRET=

 ```
 
## endpoints aplication 
##### use the demo.md file to see examples of how you should insert into the postman body to use the endpoints below

* endpoints car :car:
 ```
 post -> ('/api/v1/car/) - create car
 get -> ('/api/v1/car/) - list cars
 get -> ('/api/v1/car/:id) - list a car
 put -> ('/api/v1/car/:id) - update car
 delete -> ('/api/v1/car/:id) - delete car
 ```
 * endpoints person 👨
 ```
 post -> ('/api/v1/person/) - create person
 get -> ('/api/v1/person/) - list persons
 get -> ('/api/v1/person/:id) - list a person
 put -> ('/api/v1/person/:id) - update person
 delete -> ('/api/v1/person/:id) - delete person
 ```
* endpoint authenticate :old_key:
```
post -> ('/api/v1/authenticate/') - create authenticate
``` 

 * endpoints rental 🚘
 ```
 post -> ('/api/v1/rental/) - create rental
 get -> ('/api/v1/rental/) - list rentals
 get -> ('/api/v1/rental/:id) - list a rental
 put -> ('/api/v1/rental/:id) - update rental
 delete -> ('/api/v1/rental/:id) - delete rental
 ```

 * endpoints reserve 📄
 ```
 post -> ('/api/v1/rental/:id/reserve) - create reserve
 get -> ('/api/v1/rental/:id/reserve) - list reserves
 get -> ('/api/v1/rental/:id/reserve/:id) - list a reserve
 put -> ('/api/v1/rental/:id/reserve/:id) - update reserve
 delete -> ('/api/v1/rental/:id/reserve/:id) - delete reserve
 ```

  * endpoints fleet 🚥
 ```
 post -> ('/api/v1/rental/:id/fleet) - create fleet
 get -> ('/api/v1/rental/:id/fleet) - list fleets
 get -> ('/api/v1/rental/:id/fleet/:id) - list a fleet
 put -> ('/api/v1/rental/:id/fleet/:id) - update fleet
 delete -> ('/api/v1/rental/:id/fleet/:id) - delete fleet
 ```




### :scroll: to check the API documentation, follow the steps below:
* make sure the server is active in the terminal. if it is inactive, run `npm start` in terminal
* open a browser of your choice. in the search bar type `http://localhost:3000/api-docs`. after that you can check the api documentation