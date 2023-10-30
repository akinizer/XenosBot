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

    console.log(datajson);
   
    if (Array.isArray(datajson)){
        console.log("JSON Array");
        let description = "";
        for(const item of datajson){
            description += `A [comment](${item.newUrl}) has been edited by ${item.newAuth} in ${item.newChannel}.
                            **On Create**: \`\`\`${item.newMess}\`\`\`
                            **On Edit**: \`\`\`${item.oldMess}\`\`\`\n`;
        }
        const embedMessage  = new EmbedBuilder ()
            .setColor(0xFFF00)
            .setDescription(description);     
        
        //send edited message as a log to log channel with channelID
        let message = await interaction.reply({embeds: [embedMessage]}) ;
        console.log(message);
        
    }
    else if (typeof (datajson) === 'object'){
        console.log("JSON Object");
        console.log(datajson.newMess);

        const embedMessage  = new EmbedBuilder ()
            .setColor(0xFFF00)
            .setDescription( `A [comment](${datajson.newUrl}) has been edited by ${datajson.newAuth} in ${datajson.newChannel}.
                **On Create**: \`\`\`${datajson.newMess}\`\`\`
                **On Edit**: \`\`\`${datajson.oldMess}\`\`\` `);

        //send edited message as a log to log channel with channelID
        let message = await interaction.reply({embeds: [embedMessage]}) ;
        console.log(message);
    }

   

  

 
    
/*
    const charmaxlimit = 1950; // character limit: 1950
    const uneditedMess = 
    const editedMess = 
    //message log
    const embedMessage  = new EmbedBuilder ()
        .setColor(0xFFF00)
        .setDescription(
            `A [comment](${newMess.url}) has been edited by ${newMess.author} in ${newMess.channel}.
            **On Create**: \`\`\`${uneditedMess}\`\`\`
            **On Edit**: \`\`\`${editedMess}\`\`\` `
        );

    if(newMess.attachments.size > 0){
        embedMessage.addFields(`Extensions:`,`${newMess.attachments.map(a=>a.url)}`,true);
    }*/


}