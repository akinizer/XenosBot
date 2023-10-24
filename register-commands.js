import {REST,Routes} from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const GUILD_ID = process.env.GUILD_ID;
const CLIENT_ID = process.env.CLIENT_ID;

const commands = [
    {
        name: "hey",
        description: "replies with encantado"
    },
    {
        name: "ping",
        description: "replies with  pong"
    }
];

const rest = new REST({version:"10"}).setToken(DISCORD_TOKEN);

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
        console.log(`${e}`);
    }
})();