export default async function hug(interaction){
    let list=[
     "https://media.tenor.com/xhWYJa3S_oYAAAAC/anime-hug.gif",
     "https://media.tenor.com/pOXWNxMvQSAAAAAC/anime-hug.gif",
     "https://gifdb.com/images/high/cute-mushy-anime-hug-az2z3ubdqwx0kol0.gif",
     "https://usagif.com/wp-content/uploads/gif/anime-hug-38.gif",
     "https://37.media.tumblr.com/f2a878657add13aa09a5e089378ec43d/tumblr_n5uovjOi931tp7433o1_500.gif",
     "https://33.media.tumblr.com/680b69563aceba3df48b4483d007bce3/tumblr_mxre7hEX4h1sc1kfto1_500.gif",
     "https://media.tenor.com/RN7jCU8o7eAAAAAC/laverne-and.gif",
     "https://i.pinimg.com/originals/90/d2/a0/90d2a025b1e962f62b679389011a4f71.gif",
     "https://www.icegif.com/wp-content/uploads/2023/07/icegif-334.gif",
     "https://media1.giphy.com/media/Yle9Yz9izeVRyiwavn/giphy.gif",
     "https://www.icegif.com/wp-content/uploads/2022/12/icegif-54.gif",
     "https://www.icegif.com/wp-content/uploads/2022/12/icegif-64.gif"
    ];

    await interaction.reply(list[Math.floor(Math.random()*list.length)]);
}