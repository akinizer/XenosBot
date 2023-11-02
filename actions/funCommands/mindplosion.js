export default async (interaction) =>{
    let list=[
      "https://mathigon.org/content/exploding-dots/images/mind-blown.gif",
      "https://media.tenor.com/MFE6UiMEpRoAAAAC/math-zack-galifianakis.gif",
      "https://media.tenor.com/dlJSiLUJNmsAAAAC/math-calculate.gif"
    ];

    await interaction.reply(list[Math.floor(Math.random()*list.length)]);
}