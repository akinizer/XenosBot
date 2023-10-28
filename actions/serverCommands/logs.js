import { EmbedBuilder } from "discord.js";
import fs from "fs";
import path,{dirname} from "path";
import { fileURLToPath } from 'url';

export default async function logs(oldMess,newMess,LOGCHANNEL_ID,logtofile=false){
    const charmaxlimit = 1950; // character limit: 1950
    const uneditedMess = oldMess.content.slice(0,charmaxlimit) + (oldMess.content.length > charmaxlimit ? "..." : "");  // if original message is over character limit, replace extreme part with "..."
    const editedMess = newMess.content.slice(0,charmaxlimit) + (newMess.content.length > charmaxlimit ? "..." : "");    // if edited message is over character limit, replace extreme part with "..."
    const fileName = "D:\\GeneralRepository\\WebApplications\\XenosReformed\\actions\\serverCommands\\edited.json";

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
    }
    
    if(logtofile){
        //store edited messages
        let editedjson = fs.readFileSync(fileName,"utf-8");
        let logs = JSON.parse(editedjson);

        logs.push({oldMess:oldMess,newMess:newMess,author:author,channel:LOGCHANNEL_ID});
        editedjson = JSON.stringify(logs);
        fs.writeFileSync(fileName,usersjson,"utf-8");
    }

    //send edited message as a log to log channel with channelID
    newMess.guild.channels.cache.get(LOGCHANNEL_ID).send({embeds: [embedMessage]});
    
}