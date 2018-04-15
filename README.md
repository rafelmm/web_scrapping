# Publish current weather conditions to twitter

This application reads data from meteocat, parses it using cheerio and then it publishes the data to a twitter account.

## Pre requisites
In order to run this application node.js and npm must be installed. It can be downloaded and installed from node.js website:
https://nodejs.org/es/

## Configuring
You can configure the application with the file constants.js. This file exports two variables:
- url: This is the url where the weather information is retrieved
- template: This is the message that will be published to twitter


## Running the application
Before running the application, command `npm install` has to be executed in the root directory where there is a file named packages.json. After this you can run `node app.js` command:
```
npm install
node app.js
```
After running the application you should open a browser and visit localhost:8000/red. There is a twitter node that has to be configured with your twitter account.


For more information you can contact me.



