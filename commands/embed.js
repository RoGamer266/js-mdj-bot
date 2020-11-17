const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('NEW QUATRE-BRAS UPDATE')
        .setURL('https://www.roblox.com/games/5681325295/Quatre-Bras-1815')
        .setAuthor('RoGamer266')
        .setDescription('Added a funny -RoGamer26')
        .setColor('#FF2D00')
        .setThumbnail('https://cdn.discordapp.com/attachments/740902437111726172/777583821662846986/710fbdb17dbde06e7cdba1b2f758fee6.png')
        .setImage('https://media.discordapp.net/attachments/742754284050972702/777565351508574228/unknown.png?width=1442&height=627')
        .setFooter('JOIN NERDS')
        .addFields(
            { name: 'NEW UPDATE', value: 'JOIN NOW', inline: true},
        )
        .setTimestamp()
        
    if (!message.member.roles.cache.some((role) => role.name === 'Developer')) {
        message.channel.send(embed);
    }else {
        message.channel.send('bro u really think you can just send that WITHOUT BEING A DEV')
    }       
}

module.exports.config = {
    name: "embed",
    description: "send embed",
    usage: ".embed",
    accessableby: "Members",
    aliases: []
}