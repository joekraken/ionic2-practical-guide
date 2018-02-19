# topics
project structure

navigation

pages vs components

ionic 2 components

styling & theming

# setup
## a blank project
ionic start ionic2-basics blank --type=ionic-angular
## project with tabs
ionic start ionic2-basics tabs --type=ionic-angular
## project with sidemenu
ionic start ionic2-basics sidemenu --type=ionic-angular
## tutorial project
ionic start ionic2-basics tutorial --type=ionic-angular



# navigation
`
Ionic wraps around the Angular2 app
manages a stack of pages, doesn't use the Angular 2 Router
`

# ionic pages
`
## 3 main sections
<ion-header>
<ion-content>
<ion-footer>
footer is optional
`

# auto generate ionic page using CLI
`
ionic generate page pageName

## about ionic generate page XY
in .module.ts file: make sure it uses
IonicPageModule.forChild(...)
and
import { IonicPageModule } from 'ionic-angular'
and NOT IonicModule.forChild(...) !

Your page will be named YourName and not YourNamePage . Refer to it as YourName  in your code then (and not YourNamePage ).

add it to your declarations[] and entryComponents[] array in AppModule and you should be good to go.

##### pages can be manually added
`

# passing data between pages
`


`

# assignment 1
`
    Exercise 1
      Create two new Pages
        - Shop
        - Buyout
      Either create them via the CLI or manually

    Exercise 2
      Add a Button to the "Home" Page which leads to the "Shop" Page
      Add a Button to the "Shop" Page which leads to the "Buyout" Page

    Exercise 3
      Add two new Buttons to the "Shop" Page (you now have three in total)
      Give each Button the Caption of a Product (e.g. 'Milk', 'Bread' and 'Apples')
      Make all three Buttons load the "Buyout" Page but pass the different Product
      Names as data

    Exercise 4
      Add a "Buy" Button to the "Buyout" Page and have this Button load the Root Page
      ("Home" Page)
`


# fixes to course code
`SS
Sean
· 18 days ago

Took me a while to work out but the course package needs to be updated if you are running the latest version of Angular and Ionic. This is what I did to update the course files after googling,but there may be redundant steps - so I don't know the minimum steps.

    $ rm –rf node_modules
    Add <script src=”build/vendor.js”></script> between body tags in index.html
    Copy in  a new package.json to project file // take from a new blank ionic project. You need to update the package.json to the latest files.
    $ npm install @ionic/app-scripts@latest --save-dev
    $ npm install ionic-angular@latest --save
    $ npm upgrade
    $ npm install @ionic-native/core --save
    $ ionic cordova plugin add cordova-plugin-statusbar
    $ ionic cordova plugin add cordova-plugin-splashscreen
    $ npm install --save @ionic-native/status-bar
    $ npm install –save @ionic-native/splash-screen
    In App.module.ts add IonicModue.forRoot(MyApp), BrowserModule      //BrowserModule is missing
    Update app.components with correct location of splash bar and status screen

I can now successfully run

- ionic generate
- ionic serve

`


# shortcuts directives used in html for events and page navigation
`
  [navPush]='namePage' pushes page onto stack
  [navParams]='data' send data
  navPop
`

# custom NavController options
`
    animate (boolean): Whether or not the transition should animate.
    animation (string): What kind of animation should be used.
    direction (string): The conceptual direction the user is navigating. For example, is the user navigating forward, or back?
    duration (number): The length in milliseconds the animation should take.
    easing (string): The easing for the animation.

Example:

    this.navCtrl.push(NewPage, {}, {
        direction: 'back', // default for push is 'forward'
        duration: 2000, // 2 seconds
        easing: 'ease-out'
    });
`

# Page Lifecycle
`
## 1st method executed: (navigation guard) should page be loaded
ionViewCanEnter()

## 2nd: has page loaded and been created, not executed is cached (i.e on page stack)
ionViewDidLoad()

## 3rd: about to enter a page being active
ionViewWillEnter()

## 4th: fully enter/see a page that is now active
ionViewDidEnter()

## 5th: (navigation guard) may exiting the page be allowed
ionViewCanLeave()

## 6th: about to leave a page that is becoming inactive
ionViewWillLeave()

## 7th: executed after leaving and page is inactive
ionViewDidLeave()

## 8th: page is to be destroyed and uncached.
ionViewWillUnload()


`


# utility directives
`
SCSS/CSS utility attributes
`




