import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

import { Client, GatewayIntentBits, Collection, ActivityType, REST, Routes } from "discord.js";
import { SlashCommandBuilder } from "discord.js";
import { EmbedBuilder, ActionRowBuilder, ButtonStyle, ModalBuilder, TextInputBuilder, TextInputStyle, ButtonBuilder } from "discord.js";
import fs from "fs";

//server commands
import alarm from "./actions/serverCommands/alarm.js";
import faq from "./actions/serverCommands/faq.js";
import forecast from "./actions/serverCommands/forecast.js";
import help from "./actions/serverCommands/help.js";
import invitedm from "./actions/serverCommands/invitedm.js";
import logs from "./actions/serverCommands/logs.js";
import loglist from "./actions/serverCommands/loglist.js";
import mff from "./actions/serverCommands/mff.js";
import poll from "./actions/serverCommands/poll.js";
import server from "./actions/serverCommands/server.js";
import settime from "./actions/serverCommands/settime.js";
import time from "./actions/serverCommands/time.js";
import twitch from "./actions/serverCommands/twitch.js";
import when from "./actions/serverCommands/when.js";
import who from "./actions/serverCommands/who.js";

//level commands
import achievements from "./actions/lvlCommands/achievements.js";
import lvl from "./actions/lvlCommands/lvl.js";
import rank from "./actions/lvlCommands/rank.js";
import rpg from "./actions/lvlCommands/rpg.js";
import stats from "./actions/lvlCommands/stats.js";

//entertainment commands
import _8ball from "./actions/funCommands/_8ball.js";
import birthday from "./actions/funCommands/birthday.js";
import cat from "./actions/funCommands/cat.js";
import clap from "./actions/funCommands/clap.js";
import dog from "./actions/funCommands/dog.js";
import facepalm from "./actions/funCommands/facepalm.js";
import hey from "./actions/funCommands/hey.js";
import hug from "./actions/funCommands/hug.js";
import joke from "./actions/funCommands/joke.js";
import lennyflip from "./actions/funCommands/lennyflip.js";
import meme from "./actions/funCommands/meme.js";
import nobully from "./actions/funCommands/nobully.js";
import pet from "./actions/funCommands/pet.js";
import ping from "./actions/funCommands/ping.js";
import playyt from "./actions/funCommands/playyt.js";
import roll from "./actions/funCommands/roll.js";
import shrug from "./actions/funCommands/shrug.js";
import tableflip from "./actions/funCommands/tableflip.js";
import tableunflip from "./actions/funCommands/tableunflip.js";

// SETTINGS //

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
    ],
    presence: {
        status: "online",
        afk: false,
        activities: [{
            name: 'XenosBot',
            type: ActivityType.Streaming,
            url: "https://www.twitch.tv/cynicpizzacat"
        }]
    }    
});

// TOKEN //
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const GUILD_ID = process.env.GUILD_ID;
const LOGCHANNEL_ID = process.env.LOGCHANNEL_ID;

client.login(DISCORD_TOKEN);

// PREFIX //

const prefix = "x!";

//Login Report
client.on('ready', ()=>{
    console.log('Xenos has been activated');    
});

//Automatic logging
client.on('messageUpdate', (oldMess, newMess) => {

    if(oldMess.author.bot) return;

    logs(oldMess,newMess,LOGCHANNEL_ID,true);   
 });

// activity functions on comment
client.on("messageCreate", async message=>{
    
    // ACTIVITIES //

    //ping-pong
    if(message.content===prefix+"ping"){
        message.reply({
            content:"pong!"
        });
    }
    else if(message.content===prefix+"pong"){
        message.reply({
            content:"ping!"
        });
    }

    //random proverb quotes
    else if(message.content===prefix+"quote"){
        let resp = await axios.get("https://api.quotable.io/random");

        message.reply({
            content:resp.data.content
        });
    }

    //commenter avatar
    else if(message.content===prefix+"avatar"){
        const exampleEmbed = new EmbedBuilder()
        .setImage(message.author.displayAvatarURL());
    
        message.reply({embeds: [exampleEmbed]});
    }

    //welcome card-NEEDS REVISION
    else if(message.content===prefix+"welcome"){
        const exampleEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Some title')
        .setURL('https://discord.js.org/')
        .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
        .setDescription('Some description here')
        .setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
        .setImage('https://i.imgur.com/AfFp7pu.png')
        .setTimestamp()
        .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
    
        message.reply({embeds: [exampleEmbed]});
    }

    //dice roll
    else if (message.content.split('').join('') === 'x!roll') {
        message.reply(`Rolled: ${Math.floor((Math.random() * 6) + 1)}`);
    }

    //cat pictures
    else if(message.content === prefix+"cat") {
        const cats = [
            "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
            "https://www.womansworld.com/wp-content/uploads/2024/08/cute-cats.jpg",
            "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/3-cute-cat-sampad-art.jpg",
            "https://t3.ftcdn.net/jpg/05/65/73/56/360_F_565735615_D2uX6alZuUOu77bJkfh5JKJbKmyZmxNu.jpg",
            "https://www.mythirtyspot.com/wp-content/uploads/2014/09/Screen-Shot-2014-09-18-at-10.19.29-PM-1024x712.png",
            "https://hips.hearstapps.com/hmg-prod/images/cute-cat-breeds-russian-blue-1588187842.jpg?crop=0.6643126177024482xw:1xh;center,top&resize=980:*",
            "https://wallpapers-clan.com/wp-content/uploads/2023/07/cute-anime-cats-wallpaper.jpg",
            "https://i.pinimg.com/originals/22/ba/23/22ba2396381041643148bd4071c080df.jpg",
            "https://www.chinadaily.com.cn/culture/art/img/attachement/jpg/site1/20171115/f04da2db14841b75eb5836.jpg",
            "https://i.pinimg.com/474x/31/98/fa/3198faf800aa2eacb067cc0fe35aa803.jpg"
        ];
    
        const exampleEmbed = new EmbedBuilder()
        .setImage(cats[Math.floor(Math.random()*cats.length)]);
    
        message.reply({embeds: [exampleEmbed]});    
    }

    //nicknames
    else if (message.content === prefix+"ow") {
        var items = Array('Boobylon', 'Booby', 'Bumbleboss', 'Bumbel', 'HumbleBumble', 'Bummel', 'Bungle Jungle', 'Bloob', 'Boomble', 'Booble','Bubbles','Bumbie','Bumbledore','Bumblesaur','Humble Bumble', 'Bambooozle', 'Bum Bum', 'Bby', 'BB', 'BumbleCore', 'MexiBob', 'Boob');
        var item = items[Math.floor(Math.random()*items.length)];  
        message.reply(item);	
    }

    //minefield	
	else if (message.content === prefix+'m4') {        
        var m4_1 = '\n||:one:|| ||:bomb:|| ||:three:|| ||:bomb:||\n||:one:|| ||:two:|| ||:bomb:|| ||:two:||\n||:zero:|| ||:two:|| ||:three:|| ||:three:||\n||:zero:|| ||:one:|| ||:bomb:|| ||:bomb:||';
        var m4_2 = '\n||:bomb:|| ||:bomb:|| ||:bomb:|| ||:bomb:||\n||:bomb:|| ||:bomb:|| ||:bomb:|| ||:bomb:||\n||:bomb:|| ||:bomb:|| ||:bomb:|| ||:bomb:||\n||:bomb:|| ||:bomb:|| ||:bomb:|| ||:bomb:||';
        var m4_3 = '\n||:b:|| ||:regional_indicator_o:|| ||:regional_indicator_o:|| ||:b:||\n||:regional_indicator_o:|| ||:b:|| ||:b:|| ||:regional_indicator_o:||\n||:regional_indicator_o:|| ||:b:|| ||:b:|| ||:regional_indicator_o:||\n||:b:|| ||:regional_indicator_o:|| ||:regional_indicator_o:|| ||:b:||';
        var m4_arr = Array(m4_1,m4_2,m4_3);

		var m4 = m4_arr[Math.floor(Math.random()*m4_arr	.length)]; 
		message.reply(m4);
	}  

    //missing command
    else if (message.content === prefix) {
        return message.reply('Missing command!');
    }

    //unflip
    else if (message.content === '(╯°□°）╯︵ ┻━┻') {
        var untable = 'forget her! flip again! ┬─┬ ノ( ゜-゜ノ) (╯°□°）╯︵ ┻━┻';
		setTimeout(function(){ message.reply(untable); }, 1000);		
	}  

    //say
    else if(message.content.startsWith(prefix+'say')) {      
        var sp = message.content.split(" ");

	    message.reply(message,sp[1]);
    }

    //xenosinf
    else if (message.content.startsWith(prefix+'xenosinf')){
        var input = message.content.toUpperCase();
        //    var server = message.channel.server;
        //    var roles = message.channel.server.roles;
        //    var user = message.author;
        //    var role;
        //    var roleName = message.content.split(" "); // roleName[0] = "ADDROLE", roleName[1] = "GivenRole"
        //    var channels = message.channel.server.channels;
        //    var channel;
        //    var reserved;        // Hello Jarvis
        //    if (input === "HELLO JARVIS") {
        //        bot.reply(message, "Hello! Good to be back.");
        const exampleEmbed = new EmbedBuilder()
        .setColor(5012345)
        .setAuthor({
            name: "Xenos"
        })
        .setImage("http://imgur.com/6fwJd0u.png")
        .setDescription("Info:")
        .setFields(
            {
                inline: true,
                name: "Owner",
                value: "Taco Sensei"
            },
            {
                inline: true,
                name: "Commands:",
                value: "xenoinf"
            }
        );

        message.reply({embeds: [exampleEmbed]});
    }
    //taco
    else if (message.content.startsWith(prefix+'taco' || prefix+'Taco')){
        message.reply(":rainbow: :regional_indicator_t: :regional_indicator_a: :regional_indicator_c: :regional_indicator_o:   :regional_indicator_s: :regional_indicator_e: :regional_indicator_n: :regional_indicator_s: :regional_indicator_e: :regional_indicator_i: ");
    }
});

// SLASH COMMANDS FOR register-commands.js //

client.on("interactionCreate", async interaction=>{
    
    // check whether if command is a slash command
    if(!interaction.isChatInputCommand());

    // report the command name
    console.log(`Command Name: /${interaction.commandName}`);
    console.log(`Command Used By: ${interaction.member.user.username}`);

    // DEFINED COMMANDS: /hey, /ping, /help

    // FUN COMMANDS
    if(interaction.commandName==="hey"){
        hey(interaction);
     }

    if(interaction.commandName==="ping"){
        ping("pong");
    }
    
    if(interaction.commandName==="8ball"){
        _8ball(interaction);
    }

    if(interaction.commandName==="birthday"){
        birthday(interaction);
    }

    // LEVELING COMMANDS

    // SERVER COMMANDS
    if(interaction.commandName==="help"){
        help(interaction);
    }

    if(interaction.commandName==="logs"){
        loglist(interaction);
    } 
    
 
    
});
