module.exports = {
    name: 'clear',
    description: "Clear message command! (max 50)",
    async execute(message, args){
        if(!args[0]) return message.reply("please enter the amout of message that you want to clear!");
        if(isNaN(args[0])) return message.reply("please enter a real number!");

        if(args[0] > 50) return message.reply("you canno't delet more than 50 message!");
        if(args[0] < 1) return message.reply("YOU DON'T");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
};