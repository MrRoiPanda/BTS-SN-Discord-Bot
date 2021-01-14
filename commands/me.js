module.exports = {
    name: 'me',
    description: "send personal info in embed",
    execute(message){
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }
};

