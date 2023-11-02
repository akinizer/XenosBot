export default async (interaction) =>{
    let answers = ["Yes","No","Maybe","Unlikely","Try Again","Uncertain","Possible","Definitely","Indeed","Undoubtly","Certainly","Unfortunately"];
    let rand = answers[Math.floor(Math.random()*answers.length)];

    let typeVal =  interaction.options.get("type")==null?null:interaction.options.get("type").value;

    console.log(`
    Question: ${interaction.options.get("question").value}
    Type(?): ${typeVal  }
    Answer: ${rand}`)
    await interaction.reply(rand);
}   