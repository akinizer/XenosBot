export default async function birthday(interaction){
    let cats=[
        "https://media.istockphoto.com/id/1157775247/vector/happy-black-cat-with-cake-and-lettering-happy-birthday-vector-illustration-eps-10.jpg?s=612x612&w=0&k=20&c=_YV-swDq1ELcnIfDbyJr5mOcBntJ8qZNLDc7TKsrjZQ=",
        "https://m.media-amazon.com/images/I/71viqGAtnYL.jpg",
        "https://i.pinimg.com/736x/8b/de/7a/8bde7ae4cfe785d05b46855559babf33.jpg",
        "https://i.etsystatic.com/24303978/r/il/f64ac3/2426077478/il_fullxfull.2426077478_lsye.jpg",
        "https://www.nandq.com/images/products/tracks/tnq089.jpg"
    ];
    let dogs=[
        "https://i.ytimg.com/vi/JC1d4NLhoDA/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gSCgwMA8=&rs=AOn4CLB5fqLP687o4T5SYbW4lEmJPxZUZg",
        "https://media.rainpos.com/10507/al_4571_1c_1.jpg",
        "https://www.nandq.com/images/products/tracks/tnq088.jpg",
        "https://02dd5f64038d9e2d7aae-56d86e996af26366aec8b255ed6f7c7b.ssl.cf3.rackcdn.com/img-BeMrhJsw-large.jpg",
        "https://media.tenor.com/Bwp_8yapwNIAAAAC/dogs-party.gif"
    ];
    let moes=[
        "https://wallpapers.com/images/featured/happy-birthday-anime-hqqqxe08thhh0lut.jpg",
        "https://i.pinimg.com/originals/fe/15/da/fe15dabfd4a7115434a1fd4a3c8a5c16.jpg",
        "https://images4.alphacoders.com/732/732394.png",
        "https://i.redd.it/y4rpb677r3531.png",
        "https://wallpapers.com/images/hd/happy-birthday-anime-wallpaper-lmpvi1spbzac2460.jpg",
    ];

    let link = 'https://marketplace.canva.com/EAEyuMaeoOE/1/0/800w/canva-happy-birthday-instagram-post-EjU6mtIQqR8.jpg';
    let selector = interaction.options.get("theme");

    if(selector!=null){
        switch(interaction.options.get("theme").value){
            case "cat":
                link = cats[Math.floor(Math.random()*cats.length)];
                break;
            case "dog":
                link = dogs[Math.floor(Math.random()*dogs.length)];
                break;
            case "moe":
                link = moes[Math.floor(Math.random()*moes.length)];
                break;                   
        }
    }

    await interaction.reply(link);
}