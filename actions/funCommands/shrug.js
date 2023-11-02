export default async (interaction) =>{
    let list=[
        "https://media.tenor.com/U3GSJNoPsM8AAAAC/elmo-sesame-street.gif",
        "https://media2.giphy.com/media/llfVoXzlEppScDN9V5/giphy.gif?cid=6c09b952p5njuf9zxc53bf6wue46zu7ufkvszepmzsouz9hl&ep=v1_gifs_search&rid=giphy.gif&ct=g",

    ];

    await interaction.reply(list[Math.floor(Math.random()*list.length)]);
}