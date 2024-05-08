# Weather app Back-end
***
Back-end of [Weather app Front-end](https://github.com/Web-Rats/FrontEnd). Contains method for database(mongo) operations, validation of user and weather operations.

## How it works?
<details>
<summary>DB functions</summary>

<details>
<summary>User</summary>

### Register user
```javascript
async function registerUser(object)
```
Take as parameter the object user and save it in database.

### Delete user
```javascript
async function deleteUser(email)
```
Take as parameter the email of the user for deleting user from database.

### Find User
```javascript
async function findUser(email)
```
Take as parameter the email of the user for finding it in the database.
When it finds the user it will return the object 'user'. 

### Update user
```javascript
async function updateUser(update, email)
```
Take as parameters an object 'update', that contains the key to update, and the email for finding the user.
When the update is succeful it returns the update object 'user'. 

</details>
<details>
<summary>Weather</summary>

### Add previnsions
```javascript
async function addPrevisions(cityName, countryCode, stateCode, object)
```

### Find weather
```javascript
async function findWeather(cityName, countryCode, stateCode, endD = undefined, startD = undefined)
```

</details>


</details>

## Run with docker
```bash
docker build -t backEnd .
```
