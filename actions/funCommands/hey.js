export default async function hey(interaction){
    let list=[
      "https://i.imgur.com/UcGioIH.gif",
      "https://static.wikia.nocookie.net/58b790d6-b75f-4e31-8645-92061d1f0f28/scale-to-width/755",
      "https://vignette.wikia.nocookie.net/project-pokemon/images/a/a5/Wave_by_monnick-d7i06j2.gif/revision/latest?cb=20170428155931",
      "https://media.tenor.com/OoQlWsxH2SEAAAAC/hi-anime-hello.gif",
      "https://cdn-hjkgf.nitrocdn.com/TXhyeHzLvXrPrkIinWDxLcEonZCfYOKB/assets/images/optimized/rev-ae78df4/wp-content/uploads/2021/09/Tanjirou-demon-slayer.gif",
      "https://ineedanime.com/wp-content/uploads/2021/09/Yui-Yuigahama-Wave-Teen-Romantic-SNAFU.gif",
      "https://ineedanime.com/wp-content/uploads/2021/09/Tohka-Yatogami-wave-Date-A-Live.gif"
    ];

    await interaction.reply(list[Math.floor(Math.random()*list.length)]);
}