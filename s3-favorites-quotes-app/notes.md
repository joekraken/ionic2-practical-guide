# section 3 favorites quote app
`
building 1st app: favorite quotes

### topics
- built-in ionic 2 components
- navigation approaches
- managing data
- modals & alerts
`

# app atructure
`
## pages
- library page: list of category
- qoutes page: list qoutes per category
- qoute page : single qoute in detail
- favorites page
- settings page
- modal: add to favorite
- side menu

`

# multiple vs single pages stack
`
creating sub-stack of pages from the root stack
`

# lists and items
`
### use ion-list tag, make click items with button using ion-item directive
  <ion-list>
    <button ion-item></button>
  </ion-list>
### non-clickable list uses ion-item tag
  <ion-list>
    <ion-item></ion-item>
  </ion-list>
### list directives
- ion-item
- ion-start
`

# passing data between pages
`

`

# ionic grid
`
<ion-grid>
  <ion-row>
    <ion-col>     
    </ion-col>
  </ion-row>
</ion-grid>
`

# ionic modal
`
uses a normal page, its an overlay on current page and not added to stack of pages
`

# view hooks
`
- willEnter : observable, fired when component is about to be active
- didEnter : observable, component has become active
- willLeave : (deprecated) observable, about to be inactive
- didLeave : observable, has become inactive
- onWillDismiss : called when current ViewController will be dismissed
- onDidDismiss : current ViewController was dismissed
`

# theming
`
overriding Ionic built-in CSS/SCSS in the theme/variables.scss file

example overrides the default padding for content elements: 
$content-padding: 8px;


can add or edit to predefined colors on $colors rule
$colors: (
  primary:    #488aff,
  secondary:  #32db64,
  danger:     #f53d3d,
  light:      #f4f4f4,
  dark:       #222,
  quote-background: #f2f7c0
);
`

# buttons and menues
`
ion-buttons groups several buttons together, useful in a navbar
  <ion-navbar>
    <ion-buttons>
      <button ion-button menuToggle>
        <ion-icon name='menu'></ion-icon>
      </button>
    </ion-buttons>
  </ion-navbar>


menuToggle :built-in directive to open menu, without importing MenuController and creating event listener
`





