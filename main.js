const Discord = require('discord.js');
const { prefix } = require('./config.json');
const client = new Discord.Client();
/// For command clear
const fs = require('fs');
const { get } = require('http');
/// Init command
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(files => files.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //commende discord
    switch (command){
        case 'help':
            client.commands.get('help').execute(message, args, Discord);
        break;
        case 'me':
            client.commands.get('me').execute(message);
        break;
        //case 'clear':
            //client.commands.get('clear').execute(message, args, Discord);
        //break;
        case 'server':
            client.commands.get('server').execute(message);
        break;
        case 'pornhub':
            client.commands.get('pornhub').execute(message, args, Discord);
        break;
        case 'ascii':
            client.commands.get('ascii').execute(message, args, Discord);
        break;
        default:
            message.channel.send(`Sorry, use !help`);
    }    
});
// end
client.login(process.env.TOKEN);
