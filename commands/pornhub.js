module.exports = {
    name: 'pornhub',
    description: "rendom pornhub video!",
    execute(message, args, Discord){
        if(!args[0]) return message.reply("please enter argument");
        if(args[0] === 'random') message.channel.send('https://fr.pornhub.com/random');

        if(args[0] === 'links'){
            let _links = new Discord.MessageEmbed()
                .setColor(0xffa500)
                .setTitle('Pornhub Links')
                .attachFiles(['Pornhub.png'])
                .setThumbnail('attachment://Pornhub.png')
                .attachFiles(['img/ph/pornhub_logo_straight.png'])
                .setImage('attachment://pornhub_logo_straight.png')
                .addFields(
                    {name: 'Ｐｏｒｎｈｕｂ', value: 'https://pornhub.com/'},
                    {name: 'Ｐｏｒｎｈｕｂ 𝕊𝕖𝕝𝕖𝕔𝕥', value: 'https://www.pornhubselect.com/'},
                    {name: 'Ｍｏｄｅｌｈｕｂ', value: 'https://www.modelhub.com/'}
                )
                .setTimestamp()
            message.channel.send(_links);
        }
    }
};
