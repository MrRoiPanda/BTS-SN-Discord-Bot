module.exports = {
    name: 'help',
    description: "help command!",
    execute(message, args, Discord){
        if(!args[0]){
            const home = new Discord.MessageEmbed()
                .setColor(0xffa500)
                .setTitle("BTS SN - Page d\'aide")
                //.attachFiles(['Pornhub.png'])
                //.setThumbnail('attachment://Pornhub.png')
                //.attachFiles(['img/ph/pornhub_logo_straight.png'])
                //.setImage('attachment://pornhub_logo_straight.png')
                .addFields(
                    {name: "Info", value: "`server`,`me`"},
                    //{name: "Fun", value: ""},
                    {name: "Modération", value: "`clear`,``"},
                    {name: "Pornhub", value: "`random`,`links`"},
                    {name: "Ascii", value: "`cat`,`crab`,`sans`,..."}
                )
                .setTimestamp()
            message.channel.send(home);
        }

        if(args[0] === 'ascii'){
            const ascii = new Discord.MessageEmbed()
            .setColor(0xffa500)
            .setTitle("BTS SN - Page d\'aide - ASCII")
            //.attachFiles(['img/Pornhub.png'])
            //.setThumbnail('attachment://Pornhub.png')
            .setDescription("Pour utiliser les commandes: `!ascii \"arguments\"`")
            .addFields(
                {name: "Animals :", value: "`cat`,`crab`"},
                {name: "Device :", value: "`computer`"},
                {name: "Drink :", value: "`beer`"},
                {name: "Jojo :", value: "`menacing`,`jiorno`,`jojoFight`,`josuke`,`tortureDance1`,`tortureDance2`,`tortureDance3`,`tortureDance4`"},
                {name: "Porn :", value: "`ahegao`,`boobs`,`bunnyGirl`,`ass`"},
                {name: "Character :", value: "`sans`,`amongUs`,`creeper`"},
                {name: "Banner :", value: "`russia`"}
            )
            .setTimestamp()
        message.channel.send(ascii);
        }
    }
    
};
