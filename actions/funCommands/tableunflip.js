export default async (interaction) =>{
    let list=[
        "https://media.tenor.com/DLALXtJ4mEgAAAAM/toska-toskamiri.gif",
        "https://i.gifer.com/yCb.gif"
    ];

    await interaction.reply(list[Math.floor(Math.random()*list.length)]);
}