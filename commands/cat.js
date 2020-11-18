const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('take kat')
        .setAuthor('kat')
        .setDescription('yes kat')
        .setColor('#FF2D00')
        .setImage('https://images-ext-2.discordapp.net/external/cAY_QEhBDIWlWZvoOj3_lcUPH-8tPqX55-FJcco4w_M/%3Fsize%3D256/https/cdn.discordapp.com/avatars/250354298431602689/6e44d8f933ed4766d0de8eb5582d6c47.png')
        .setFooter('cat')
        .setTimestamp()
        
    message.channel.send(embed);
}

module.exports.config = {
    name: "cat",
    description: "cat",
    usage: ".cat",
    accessableby: "Members",
    aliases: ['kat']
}