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



# setup Http for ionic 3
`
If you're using Ionic 3 (check the package.json  file to find out which version you're using), you'll need to add the HttpModule  to your imports[]  array in the AppModule  to get Http functionality to work.

Don't forget to also add the import statement to the top of the AppModule file:

import { HttpModule } from '@angular/http'; 

You can stop at this point if you're using Angular up to version 5 (the latest version until now).

-------

When using Angular 5+, you can also use the new HttpClient  it offers (this will be mandatory once Angular 6 is released).

Here's how you use it:

import { HttpClientModule } from '@angular/common/http'  

instead of

import { HttpModule } from '@angular/http'; 

Hence, you should add HttpClientModule  to imports[]  in your AppModule  (instead of HttpModule  as described above).

In the files where you inject Http , you should now inject HttpClient .

To get access to this type/ class, you have to change the import from

import { Http } from '@angular/http'; 

to

import { HttpClient } from '@angular/common/http'; 

Generally, you use HttpClient  in exactly the same way, though one change is required: HttpClient  extracts the data you get with the response automatically. Hence you don't need to map()  it manually anymore.

So the following code

this.http.get('my-url').map(res => res.json()) 

will become

this.http.get('my-url') 

That's it. With these steps, you're using the new HttpClient and everything should work just as shown in the videos!

`