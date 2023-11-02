export default async (interaction) =>{
    let list=[
        "https://media3.giphy.com/media/e24Q8FKE2mxRS/giphy.gif",
        "https://media2.giphy.com/media/uKT0MWezNGewE/giphy.gif?cid=6c09b952mqbooo03a1rn2tvmx4lwxuyi96l2689bx1f73yr7&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        "https://media.tenor.com/IQOaUcI8wMQAAAAC/tableflip-bear.gif",
        "https://media1.giphy.com/media/IeiviHZEa12hLG7l4c/200w.gif?cid=6c09b952mqbooo03a1rn2tvmx4lwxuyi96l2689bx1f73yr7&ep=v1_gifs_search&rid=200w.gif&ct=g",
        "https://i.imgur.com/AqQ8cjU.gif",
        "https://i.kym-cdn.com/photos/images/newsfeed/000/290/008/7e2.gif",
        "https://i.kym-cdn.com/photos/images/newsfeed/000/849/928/334.gif"
    ];

    await interaction.reply(list[Math.floor(Math.random()*list.length)]);
}