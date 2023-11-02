import { dirname } from "path";
import { fileURLToPath } from 'url';
import { AttachmentBuilder } from "discord.js";

export default async (interaction) =>{

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    let cats=["1.jpg","2.jpg","3.gif","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg"];
    let randcat = cats[Math.floor(Math.random()*cats.length)];
    const attachment = new AttachmentBuilder(__dirname+"\\..\\..\\images\\cats\\"+randcat, { name: randcat })

    await interaction.reply({files: [attachment]});
}