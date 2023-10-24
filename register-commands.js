import {REST,Routes} from "discord.js";
import dotenv from "dotenv";
dotenv.config();

// bot token to connect to connect client and discord server; server id to run in channels; app id of bot
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const GUILD_ID = process.env.GUILD_ID;
const CLIENT_ID = process.env.CLIENT_ID;

// command name after "/" and definition
const commands = [
    {
        name: "hey",
        description: "replies with encantado"
    },
    {
        name: "ping",
        description: "replies with  pong"
    },
    {
        name: "help",
        description: "opens commands help"
    }
];

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