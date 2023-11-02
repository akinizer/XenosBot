export default async (interaction) =>{
    let list=[
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQJDVFdHF8mHnEGuaaSLcSgdE-acbWfV5YhN62mskl0kz7QPbLJ8mU5ZlQh8zJT6TFx0&usqp=CAU",
      "https://media4.giphy.com/media/TJawtKM6OCKkvwCIqX/giphy.gif?cid=6c09b952n4rs5py6zcba6kbdmdo2qk0z715ubmnixqhg5ddw&ep=v1_gifs_search&rid=giphy.gif&ct=g",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt7qv4DfKBkA9MlSnfr3vn0KL6XwrQBx6JuJ5_AUSlCqPVasmOpBxODx1nQWYFTXKnEOQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyq94IoiGRicpDeN3CNPFuwOm9c8jqaaSsubtz6_RYdgLOCXpQpfB295GFV6P22LE3mDg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZg7TdBU4thuLK1lW1DM0Yrze2AoIpGE6-qi3JmslykbtOz2aNzq88g4q3qusc4FcHeiA&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjLmFQFcWoQi31I8a5pgceXHAghAfsVvhQOy4QRkvlpUHaJej9IZmtjLeoGz2XrSrko0c&usqp=CAU"
    ];

    // dice roll duration as seconds before result 
    let timeout=3;

    // roll 6 face dice, then show the result
    await interaction.reply('https://media.tenor.com/YfLnhkuHzzAAAAAC/dice-roll.gif');
    setTimeout(() => {
        interaction.editReply(list[Math.floor(Math.random()*list.length)]);
    }, timeout*1000);
}