import { dirname } from "path";
import { fileURLToPath } from 'url';
import { AttachmentBuilder } from "discord.js";

export default async function dog(interaction){

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    let dogs=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg"];
    let randdog = dogs[Math.floor(Math.random()*dogs.length)];
    const attachment = new AttachmentBuilder(__dirname+"\\..\\..\\images\\dogs\\"+randdog, { name: randdog })

    await interaction.reply({files: [attachment]});
}