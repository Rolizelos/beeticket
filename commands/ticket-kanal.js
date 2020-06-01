const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client, message, args) => {// chimp#0110
const prefix = await data.fetch(`prefix.${message.guild.id}`) || client.ayarlar.prefix;
if(!message.member.hasPermission('ADMINISTRATOR')) return;
  
if(args[0] === 'kanal-ayarla') {

const annen = await data.fetch(`kanal.${message.guild.id}`)
if(annen) return message.channel.send(`Mesajı göndereceğim kanal zaten ayarlı: ${prefix}ticket-kanal sıfırla`)
let kanal = message.mentions.channels.first()
if(!args[1]) return message.channel.send(`Bir kanalı etiketlemelisin.`)
if(!kanal) return message.channel.send(`Etiketlediğin kanalı bulamıyorum.`)
data.set(`kanal.${message.guild.id}`, kanal.id)
message.channel.send(new Discord.RichEmbed().setColor('GREEN').setDescription(`Mesajın kanalı başarıyla ayarlandı: ${prefix}ticket gönder`))
}

if(args[0] === 'kanal-sıfırla') {
const annen = await data.fetch(`kanal.${message.guild.id}`)
if(!annen) return message.channel.send(`Mesajı göndereceğim kanal zaten ayarlı: ${prefix}ticket-kanal sıfırla`)

data.delete(`kanal.${message.guild.id}`)
message.channel.send(new Discord.RichEmbed().setColor('GREEN').setDescription(`Mesajın kanalı başarıyla sıfırlandı: ${prefix}ticket-kanal ayarla #channel`))
}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['bilet-kanal'],
  permLevel: 0
}

exports.help = {
  name: 'ticket-kanal'
};// codare