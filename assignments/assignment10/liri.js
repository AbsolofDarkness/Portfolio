// Requirements
require('dotenv').config();
let Spotify = require('node-spotify-api');
let moment = require('moment');
let axios = require('axios');
let inquirer = require('inquirer');
let colors = require('colors');
const keys = require("./keys")

var spotify = new Spotify(keys.spotify);

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
            message: "Enter the Band Name: ",
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

let spotifyThisSong = function () {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Song Name: ",
            name: "songName"
        }
    ]).then(function(inquirerResponse) {
        let songName = "";

        if (inquirerResponse.songName === "") {
            songName = "The Sign";
        } else {
            songName = JSON.stringify(inquirerResponse.songName);
        }

        spotify.search({type: "track", query: songName, limit: 1}, function(err, data) {
            if (err) {
                //return console.log("Error occured: " + err);
                return console.log("Whoopsie!! Something went wrong!! Please try again, and contact dev if problem persists!!");
            }

            // console.log(data);
            console.log(`${colors.green("Artist: ")}${colors.blue(data.tracks.items[0].album.artists[0].name)}`);
            console.log(`${colors.green("Song Name: ")}${colors.blue(data.tracks.items[0].name)}`);
            console.log(`${colors.green("Preview URL: ")}${colors.blue(data.tracks.items[0].preview_url)}`);
            console.log(`${colors.green("Album: ")}${colors.blue(data.tracks.items[0].album.name)}`);
        });
    });
}

let movieThis = function () {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Movie Name: ",
            name: "movieName"
        }
    ]).then(function(inquirerResponse) {
        let movieName = "";

        if (inquirerResponse.movieName === "") {
            movieName = "Mr.Nobody";
            
        } else {
            movieName = JSON.stringify(inquirerResponse.movieName);
        }
        
        let movieNameURL = movieName.split(" ").join("%20");
        let URL = `http://www.omdbapi.com/?t=${movieNameURL.unquoted()}&y=&plot=short&apikey=trilogy`;
        axios.get(URL).then(
            function (response) {
                console.log(`${colors.green("Title: ")}${colors.blue(response.data.Title)}`);
                console.log(`${colors.green("Year Released: ")}${colors.blue(response.data.Year)}`);
                console.log(`${colors.green("IMDB Rating: ")}${colors.blue(response.data.Ratings[0].Value)}`);
                console.log(`${colors.green("Rotten Tomatoes Rating: ")}${colors.blue(response.data.Ratings[1].Value)}`);
                console.log(`${colors.green("Country of Production: ")}${colors.blue(response.data.Country)}`);
                console.log(`${colors.green("Language: ")}${colors.blue(response.data.Language)}`);
                console.log(`${colors.green("Plot: ")}${colors.blue(response.data.Plot)}`);
                console.log(`${colors.green("Actors: ")}${colors.blue(response.data.Actors)}`);
            }
        );

    });
}

mainMenu();
