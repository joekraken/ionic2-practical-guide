# section 8
- create awesome-place-app
- use native device features

## create new project
- ionic start awesome-places-app blank --type=ionic-angular


## generate pages
- ionic generate page place
- ionic generate page add-place
- ionic generate page set-location


# setup google maps api
`
In the following lecture, we'll add Angular Google Maps to the project. There is a newer version available which uses different package + component names. 

Here are the required adjustments:

1) Install a different package: npm install --save @agm/core 

2) Import from '@agm/core'  instead of 'angular2-google-maps/core' 

3) Import + configure the SAME module (in AppModule  imports[] , add AgmCoreModule.forRoot({...})

4) Use different component names: <agm-map>  instead of <sebm-google-map> , <agm-marker>  instead of <sebm-google-map-marker> 

That's it! You can read more in the official docs: https://angular-maps.com/guides/getting-started/

`

# get a google map api key
- https://angular-maps.com

# cli commands for google map setup
- npm install --save @agm/core

