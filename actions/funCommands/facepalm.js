export default async (interaction) =>{
    let list=[
      "https://i.pinimg.com/originals/ae/47/6d/ae476d8033bcf74d4a8dbad7741eaeaa.gif",
      "https://media4.giphy.com/media/TJawtKM6OCKkvwCIqX/giphy.gif?cid=6c09b952n4rs5py6zcba6kbdmdo2qk0z715ubmnixqhg5ddw&ep=v1_gifs_search&rid=giphy.gif&ct=g",
      "https://i.gifer.com/13Qe.gif",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ39m1T47aSo86UKoYkY4W50RQ7bb3HGskAw&usqp=CAU",
      "https://media.giphy.com/media/7zSCaTxnIOveg/giphy.gif",
      "https://mrwgifs.com/wp-content/uploads/2015/02/Bang-Your-Head-On-The-Table-In-Disappointment-Anime-Reaction-Gif.gif"
    ];

    await interaction.reply(list[Math.floor(Math.random()*list.length)]);
}