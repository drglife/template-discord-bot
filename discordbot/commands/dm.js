const Discord = require("discord.js");

// inside a command, event listener, etc.
module.exports.run = async (bot, message, args) => {
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('YOUR TITLE')
	.setURL('URL HERE')
	.setAuthor('Some name', 'https://i.gyazo.com/ceca70600c3562868597dfeac0a4ae55.png', 'URL HERE')
	.setDescription('Some description here')
	.setThumbnail('https://i.gyazo.com/ceca70600c3562868597dfeac0a4ae55.png')
	.setTimestamp()
	.setFooter('AUTHOR', 'https://i.gyazo.com/ceca70600c3562868597dfeac0a4ae55.png');

    message.author.send(exampleEmbed);
    }

module.exports.help = {
  name:"help"
}
