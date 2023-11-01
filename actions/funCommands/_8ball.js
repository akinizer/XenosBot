export default async function _8ball(interaction){
    let answers = ["Yes","No","Maybe","Unlikely","Try Again","Uncertain","Possible","Definitely","Indeed","Undoubtly","Certainly","Unfortunately"];
    let rand = answers[Math.floor(Math.random()*answers.length)];

    console.log(`
    Question: ${interaction.options.get("question").value}
    Type(?): ${interaction.options.get("type").value}
    Answer: ${rand}`)
    await interaction.reply(rand);
}   