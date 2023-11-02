export default async function pet(interaction){
    let list=[
      "https://media.tenor.com/nwbxEGQINOsAAAAM/pet-dog.gif",
      "https://media.tenor.com/ZgSfSNcJ9KIAAAAC/pat-cute.gif",
      "https://media3.giphy.com/media/5tmRHwTlHAA9WkVxTU/giphy.gif",
      "https://i.pinimg.com/originals/b7/dd/dd/b7ddddf6d6da303dcdc3823959192b42.gif",
      "https://media.tenor.com/jkIeSOUiNBgAAAAC/bunny-cute.gif",
      "https://i.pinimg.com/originals/2e/27/d5/2e27d5d124bc2a62ddeb5dc9e7a73dd8.gif",
      "https://media.tenor.com/O4fOl9MbuIkAAAAC/pat-good.gif",
      "https://cdna.artstation.com/p/assets/images/images/031/475/164/original/yabby-chanyoung-kim-201027-ahri-pat-4.gif?1603740268",
      "https://cdnb.artstation.com/p/assets/images/images/031/475/051/original/yabby-chanyoung-kim-201027-ahri-pat-5-onlypat.gif?1603740063",
      "https://i.gifer.com/7MOr.gif"
    ];

    await interaction.reply(list[Math.floor(Math.random()*list.length)]);
}