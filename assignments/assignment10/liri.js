// Requirements
require('dotenv').config();
let spotify = require('node-spotify-api');
let moment = require('moment');
let axios = require('axios');
let inquirer = require('inquirer');
let colors = require('colors');

String.prototype.unquoted = function (){return this.replace (/(^")|("$)/g, '')}

//Main Menu
let mainMenu = function() {
    inquirer.prompt([
        {
            type: "list",
            name: "mainMenu",
            message: "Welcome to LIRI! Please make a selection!",
            choices: [
                "Concert This",
                "Spotify This Song",
                "Movie This",
                "Do What It Says",
                "Exit"
            ]
        }
    ]).then(function(inquirerResponse) {
        console.log(JSON.stringify(inquirerResponse.mainMenu))
        if(inquirerResponse.mainMenu === "Concert This") {
            concertThis();
        }
        else if (inquirerResponse.mainMenu === "Spotify This Song") {
            spotifyThisSong();
        }
        else if (inquirerResponse.mainMenu === "Movie This") {
            movieThis();
        }
        else if (inquirerResponse.mainMenu === "Do What It Says") {
            doWhatItSays();
        }
        else if (inquirerResponse.mainMenu === "Exit") {
            return;
        }
    });
}

let concertThis = function () {
    inquirer.prompt([
        {
            type: "input",
            message: "Please Enter the band name: ",
            name: "bandName"
        }
    ]).then(function(inquirerResponse) {
        let bandName = JSON.stringify(inquirerResponse.bandName);
        let bandNameURL = bandName.split(" ").join("%20");
        let URL = `https://rest.bandsintown.com/artists/${bandNameURL.unquoted()}/events?app_id=codingbootcamp`;
        axios.get(URL).then(
            function (response) {
                for (let x = 0; x < 5; x++) {
                    // console.log(colors.blue(response.data[x].venue.name));
                    console.log(`${colors.green("Venue: ")}${colors.blue(response.data[x].venue.name)}`);
                    console.log(`${colors.green("Location: ")}${colors.blue(response.data[x].venue.city)}`);
                    console.log(`${colors.green("Date: ")}${colors.blue(moment(response.data[x].datetime).format("MM/DD/YYYY"))}`);
                    console.log(""); // Space between events
                }
            }
        ).catch(function (error) {
            // console.log(error);
            console.log(colors.red("This Artist has no concerts!!!"));
        });
    });
}

mainMenu();