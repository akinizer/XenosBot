import {REST,Routes} from "discord.js";
import dotenv from "dotenv";
dotenv.config();

// bot token to connect to connect client and discord server; server id to run in channels; app id of bot
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const GUILD_ID = process.env.GUILD_ID;
const CLIENT_ID = process.env.CLIENT_ID;

// command name after "/" and definition
const funCommands = [{
    name: "hey",
    description: "reply with encantado"
},{
    name: "ping",
    description: "reply with pong"
},{
    name: "joke",
    description: "make a smile on your face"
},{
    name: "8ball",
    description: "ask a question for a wisdom"
},{
    name: "cat",
    description: "generate a funny cat image"
},{
    name: "dog",
    description: "generate a funny dog image"
},{
    name: "roll",
    description: "roll a dice"
},{
    name: "meme",
    description: "generate a meme"
},{
    name: "playyt",
    description: "play a video via a YouTube link"
},{
    name: "birthday",
    description: "wish a happy birthday"
},{
    name: "pet",
    description: "pet a person you like"
},{
    name: "hug",
    description: "hug a person you like"
},{
    name: "nobully",
    description: "warn a person not to bully"
},{
    name: "shrug",
    description: "shrug a person"
},{
    name: "tableflip",
    description: "react with lenny flipping table"
},{
    name: "tableunflip",
    description: "react with lenny unflipping table"
},{
    name: "lennyflip",
    description: "react with lenny flipping people"
},{
    name: "clap",
    description: "react with a clap"
},{
    name: "facepalm",
    description: "react with a facepalm"
}];

const lvlCommands = [{
    name: "rpg",
    description: "start a rpg game"
},{
    name: "stats",
    description: "show user leveling stats"
},{
    name: "level",
    description: "show user level"
},{
    name: "rank",
    description: "show user ranking in the server"
}, {
    name: "achievements",
    description: "display user achievements"
}];

const serverCommands = [{
    name: "help",
    description: "open commands help"
},{
    name: "logs",
    description: "display server logs for a channel ( created, edited removed )"
},{
    name: "who",
    description: "display a user information"
},{
    name: "invitedm",
    description: "send a server invite as a private message"
},{
    name: "twitch",
    description: "generate a link for Twitch"
},{
    name: "server",
    description: "show server info"
},{ 
    name: "poll",
    description: "create a poll"
},{
    name: "forecast",
    description: "display local or specific location weather"
},{
    name: "time",
    description: "show current local or a specific location time"
},{
    name: "settime",
    description: "set a time for an event"
},{
    name: "alarm",
    description: "set an alarm to get warned for an event"
},{
    name: "when",
    description: "get how much time left for a set event"
},{
    name: "mff",
    description: "display Marvel Future Fight gif"
},
{
    name: "faq",
    description: "list frequently asked questions"
}];

var commands = funCommands.concat(lvlCommands,serverCommands);

// declare rest api object with bot token
const rest = new REST({version:"10"}).setToken(DISCORD_TOKEN);

// Integrate slash commands to the console; the actions for commands are in index.js
(async()=>{
    try{
        console.log("Registering slash commands...");

        await rest.put(
            Routes.applicationGuildCommands(
                CLIENT_ID, 
                GUILD_ID
            ),
            {body: commands}
        );
        console.log("Slash commands are registered successfully!");
    }
    catch(e){
        // report error in log
        console.log(`${e}`);
    }
})();