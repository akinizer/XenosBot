1.Install packages and files:

npm init -y
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
npm install touch-cli -g
npm i discord.js
npm i dotenv
npm i axios

2.Provide Discord Token
touch .env
- provide discord token to ".env"
- add the attribute to package.json to solve "cannot run outside module" error
"type": "module", 
- go to developer portal and enable all intents in "bot" tab if such an error occurs "used disallowed intent"

3.Setup "index.js"
- import dotenv and discord libraries
- create Client 
- provide DISCORD_TOKEN
- create startup message

4.Add Features
    4.1 Ping Pong
        - Read x!ping and respond Pong

5.run app
node index.js

Link: https://www.youtube.com/watch?v=Oy5HGvrxM4o , https://www.youtube.com/watch?v=pDQAn18-2go, https://stackoverflow.com/questions/64408038/how-to-add-extra-fields-in-an-discord-js-embed
Avatar: https://www.tabnine.com/code/javascript/functions/displayAvatarURL
Messaging: https://www.tabnine.com/code/javascript/functions/discord.js/Message/reply
Slash Commands: https://discordjs.guide/creating-your-bot/slash-commands.html#before-you-continue 

Missing Message Content (Intent): https://stackoverflow.com/questions/73036854/message-content-doesnt-have-any-value-in-discord-js

Xenos Website: https://discord.com/developers/applications/439142038420586496/bot

