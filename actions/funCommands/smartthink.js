export default async function smartthink(interaction){
    let list=[
      "https://media.tenor.com/A-hmqpTFTDoAAAAd/dr-house.gif",
      "https://media.tenor.com/QLbV11ltA8cAAAAC/smart-thinking.gif",
      "https://i.gifer.com/1Vv.gif",
      "https://media.tenor.com/9xR5Er9fQ24AAAAC/anya-anya-forger.gif",
    ];

    await interaction.reply(list[Math.floor(Math.random()*list.length)]);
}