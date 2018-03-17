# section 7: adding Auth and Http to recipe app
`
- implement authentication
- send http requests and responses

`

# new features:

## unauthenticated block
`
- signin page
- side menu
`


## authenticated block
`
storing data on server

- side menu to store and load data

`

# authentication in ionic2 app
`
- normal webpage use "strong" connection with session

- on web or mobile app: authenticate against a server, issue token stored on client, then the token is sent with requests

`

# setup firebase
`
dev tool for back-end, authentication, etc
temporarily disable anti-virus and firewall security

### console
- npm install --save firebase

### in app.component.ts import firebase and set values
import firebase from 'firebase';
    apiKey: "AIzaSyC4Ko3fxh3_FEua7WNVoK2q-5eJWe7Y7PQ",
    authDomain: "ionic2-recipe-book-e971f.firebaseapp.com"

`

