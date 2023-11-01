export default [{//IN-USE
    name: "hey",
    description: "reply with encantado"
},{
    name: "ping",
    description: "reply with pong"
},{
    name: "joke",
    description: "make a smile on your face"
},{//IN-USE
    name: "8ball",
    description: "ask a question for a wisdom",
    options: [{
        name: "question",
        description: "provide your question",
        type: 3,
        required: true, 
    },{
        name: "type",
        description: "provide question type",
        type: 3,
        required: false,
        choices: [{
            name: "love",
            value: "love" 
        },{
            name: "future",
            value: "future" 
        },{
            name: "career",
            value: "career" 
        }] 
    }]
},{
    name: "cat",
    description: "generate a funny cat image"
},{
    name: "dog",
    description: "generate a funny dog image"
},{
    name: "roll",
    description: "roll a dice"
},{
    name: "meme",
    description: "generate a meme"
},{
    name: "playyt",
    description: "play a video via a YouTube link"
},{//IN-USE
    name: "birthday",                               
    description: "wish a happy birthday",
    options: [{
        name: "theme",
        description: "select theme",
        type: 3,
        required: false,
        choices: [{
            name: "cat",
            value: "cat" 
        },{
            name: "dog",
            value: "dog" 
        },{
            name: "moe",
            value: "moe" 
        }] 
    }]
},{
    name: "pet",
    description: "pet a person you like"
},{
    name: "hug",
    description: "hug a person you like"
},{
    name: "nobully",
    description: "warn a person not to bully"
},{
    name: "shrug",
    description: "shrug a person"
},{
    name: "tableflip",
    description: "react with lenny flipping table"
},{
    name: "tableunflip",
    description: "react with lenny unflipping table"
},{
    name: "lennyflip",
    description: "react with lenny flipping people"
},{
    name: "clap",
    description: "react with a clap"
},{
    name: "facepalm",
    description: "react with a facepalm"
}];