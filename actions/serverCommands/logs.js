import { EmbedBuilder } from "discord.js";
import fs from "fs";
import path,{dirname} from "path";
import { fileURLToPath } from 'url';

export default async function logs(oldMess,newMess,LOGCHANNEL_ID,logtofile){
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

    //send edited message as a log to log channel with channelID
    await newMess.guild.channels.cache.get(LOGCHANNEL_ID).send({embeds: [embedMessage]});   
        
    //let newData = {"newUrl":newMess.url,"newAuth":newMess.author,"newChannel":newMess.channel,"newMess":uneditedMess,"oldMess":editedMess};
    let newData = {"desc":  `A [comment](${newMess.url}) has been edited by ${newMess.author} in ${newMess.channel}.
    **On Create**: \`\`\`${uneditedMess}\`\`\`
    **On Edit**: \`\`\`${editedMess}\`\`\` `};

    console.log(logtofile);

    if(logtofile){

        //if file doesnt exist, format: [ {JSON_1} ]
        if (!fs.existsSync(fileName)) {
            console.log("Creating edited.json with new data...")
            fs.writeFileSync(fileName,JSON.stringify([newData]));
            console.log("jsonformat");
        }

        //append data, format: [ {JSON_1}, {JSON_2}, ... {JSON_N} ]
        else{
            console.log("Logging to file...");
            try{
                //store edited messages
                let editedjson = fs.readFileSync(fileName,"utf-8");
                const jsonelement = JSON.parse(editedjson);
                console.log(Object.keys(jsonelement).length);

                let logs = [];
                for(let item of jsonelement){
                    logs.push(item);
                }

                logs.push(newData);                     //file contents with new data
                let res = JSON.stringify(logs);
                fs.writeFileSync(fileName,res,"utf-8");
                console.log("array");
            
            }
            catch(e){
                console.log(e);
            }
        }
    }
   
}