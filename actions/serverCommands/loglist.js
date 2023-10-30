import { EmbedBuilder } from "discord.js";
import fs from "fs";

export default async function loglist(interaction){
    const fileName = "D:\\GeneralRepository\\WebApplications\\XenosReformed\\actions\\serverCommands\\edited.json";
    
    //if file doesnt exist, format: {JSON}
    if (!fs.existsSync(fileName)) {
        console.log("No log data has been found...")
        return;
    }

    console.log("Retrieving logs from the file...");

    //store edited messages
    let datajson = JSON.parse(fs.readFileSync(fileName,"utf-8"));
   
    if (Array.isArray(datajson)){
        console.log("JSON Array");
        let description = "";
        for(const item of datajson){
            description += item.desc;
        }
        const embedMessage  = new EmbedBuilder ()
            .setColor(0xFFF00)
            .setDescription(description);     
        
        //send edited message as a log to log channel with channelID
        await interaction.reply({embeds: [embedMessage]}) ;
        
    }
}