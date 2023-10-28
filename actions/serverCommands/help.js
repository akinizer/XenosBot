import { EmbedBuilder, ActionRowBuilder, ButtonStyle, ButtonBuilder } from "discord.js";
export default async function help(interaction){
    // Page Contents
    const firstPageEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle("Help Page 1")
    .setDescription("Slash Commands")
    .addFields(
        {name:"/help",value:"displays interactive commands window"},
        {name:"/ping",value:"responds with pong"},
        {name:"/hey",value:"greets you sincerely"}
    )
    .setTimestamp();

const secondPageEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle("Help Page 2")
    .setDescription("Prefix Entertainment Commands")
    .addFields(
        {name:"x!ping",value:"replies with pong"},
        {name:"x!pong",value:"replies with ping"},
        {name:"x!quote",value:"gives a wise advice"},
        {name:"x!roll",value:"rolls a dice"},
        {name:"x!cat",value:"shows a cute kitten image"},
        {name:"x!m4",value:"generates minefield game"},
        {name:"x!say",value:"let the bot say a following sentence!"}                
    )
    .setTimestamp();

const thirdPageEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle("Help Page 3")
    .setDescription("Prefix Information Commands")
    .addFields(
        {name:"x!taco",value:"information for Tacoyaki"},
        {name:"x!Taco",value:"information for Tacoyaki"},
        {name:"x!avatar",value:"display your avatar in a large scale"},
        {name:"x!xenosinf",value:"information for XenosBot"},
        {name:"x!ow",value:"All Hail praise the husbando of our Goddess Ishtar!"},
        {name:"x!welcome",value:"generate welcome card"}
    )
    .setTimestamp();

// Pagination buttons
const button = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId("page1")
            .setLabel("Page 1")
            .setStyle(ButtonStyle.Success),

        new ButtonBuilder()
            .setCustomId("page2")
            .setLabel("Page 2")
            .setStyle(ButtonStyle.Success),
        
        new ButtonBuilder()
            .setCustomId("page3")
            .setLabel("Page 3")
            .setStyle(ButtonStyle.Success)
        
    );

const message = await interaction.reply({embeds: [firstPageEmbed], components: [button]});
const collector = await message.createMessageComponentCollector();

collector.on("collect",async i=>{
    if(i.customId === "page1"){
        await i.update({embeds: [firstPageEmbed], components: [button]})
    }

    if(i.customId === "page2"){
        await i.update({embeds: [secondPageEmbed], components: [button]})
    }

    if(i.customId === "page3"){
        await i.update({embeds: [thirdPageEmbed], components: [button]})
    }            
});

}