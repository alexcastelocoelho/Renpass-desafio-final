#  Renpass.uol - PB Node.js - Compass.Uol

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
    "bcrypt": "^5.0.1",
    "bcryptjs": "^2.4.3",
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "joi": "^17.6.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.3.5",
    "mongoose-paginate-v2": "^1.6.3"
    "eslint": "^8.17.0",
    "nodemon": "^2.0.16"
````

## get project and run locally
1. clone the project
 ```
 git clone https://github.com/alexcastelocoelho/Renpass-desafio-final
 ```
2. install dependencies
 ```
 npm install
 ```
3. execute the project
 ```
 npm start
 ```
create an .env file and set the environment variables. use the .env.example file as a reference to set
 ```
    DB_HOST=
    DB_USER=
    DB_PASS=
    DB_COLLECTION=

 ```
 
## endpoints aplication 
##### use the demo.md file to see examples of how you should insert into the postman body to use the endpoints below

* endpoints car
 ```
 post -> ('/api/v1/car/) - create car
 get -> ('/api/v1/car/) - list cars
 get -> ('/api/v1/car/:id) - list a car
 put -> ('/api/v1/car/:id) - update car
 delete -> ('/api/v1/car/:id) - delete car
 ```
 * endpoints person
 ```
 post -> ('/api/v1/person/) - create person
 get -> ('/api/v1/person/) - list persons
 get -> ('/api/v1/person/:id) - list a person
 put -> ('/api/v1/person/:id) - update person
 delete -> ('/api/v1/person/:id) - delete person
 ```
* endpoint authenticate
```
post -> ('/api/v1/authenticate/') - create authenticate
``` 

