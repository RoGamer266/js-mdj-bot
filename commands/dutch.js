const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('amazing')
        .setAuthor('you are a chad')
        .setDescription('great')
        .setColor('#FF2D00')
        .setThumbnail('https://cdn.discordapp.com/attachments/740902437111726172/777583821662846986/710fbdb17dbde06e7cdba1b2f758fee6.png')
        .setImage('https://cdn.discordapp.com/attachments/740902437111726172/778279204558209074/unknown.png')
        .setFooter('giga chad')
        .setTimestamp()
        
    message.channel.send(embed);
}

module.exports.config = {
    name: "dutch",
    description: "send dutcj bro",
    usage: ".dutch",
    accessableby: "Members",
    aliases: ['dutchie', 'netherlands']
}