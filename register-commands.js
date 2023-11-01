import {REST,Routes} from "discord.js";
import dotenv from "dotenv";
dotenv.config();

import funCommands from "./slashCommandBuilders/funCommands.js";
import lvlCommands from "./slashCommandBuilders/lvlCommands.js";
import serverCommands from "./slashCommandBuilders/serverCommands.js";

// bot token to connect to connect client and discord server; server id to run in channels; app id of bot
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const GUILD_ID = process.env.GUILD_ID;
const CLIENT_ID = process.env.CLIENT_ID;

// command name after "/" and definition
const commands = funCommands.concat(lvlCommands,serverCommands);

// declare rest api object with bot token
const rest = new REST({version:"10"}).setToken(DISCORD_TOKEN);

// Integrate slash commands to the console; the actions for commands are in index.js
(async()=>{
    try{
        console.log("Registering slash commands...");

        await rest.put(
            Routes.applicationCommands( 
                CLIENT_ID
                //GUILD_ID
            ),
            {body: commands}
        );

        /* // FOR GUILD SPECIFIC COMMANDS
        await rest.put(
            Routes.applicationGuildCommands(
                CLIENT_ID,
                GUILD_ID
            ),
            {body: commands}
        );
        */

        console.log("Slash commands are registered successfully!");
    }
    catch(e){
        // report error in log
        console.log(`${e}`);
    }
})();