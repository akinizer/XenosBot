export default async function hey(interaction){
    let cats=[
        "",
        "",
        "",
        "",
        ""
    ];

    await interaction.reply(cats[Math.floor(Math.random()*cats.length)]);
}