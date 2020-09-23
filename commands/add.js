const Discord = require('discord.js');
const data = require('quick.db')
//RABEL CODE
exports.run = async (client, message, args) => {//RABEL CODE
const prefix = await data.fetch(`prefix.${message.guild.id}`) || client.ayarlar.prefix;//RABEL CODE
  //RABEL CODE
if(!args[0]) {//RABEL CODE
message.delete()//RABEL CODE
return message.channel.send(`Komutu düzgün kullanın: \`[Etiket/Rol] (kanal)\``).then(c => c.delete(10000)) }//RABEL CODE
  //RABEL CODE
if(args[0]) {//RABEL CODE
//RABEL CODE
if(!args[1]) {//RABEL CODE
const ad = await data.fetch(`numara.${message.channel.id}`)//RABEL CODE
if(!message.channel.name === `ticket-${ad}` || message.channel.name === `closed-${ad}`) {//RABEL CODE
const ann = await data.fetch(`asd.${message.guild.id}.${message.channel.id}.${message.author.id}`)//RABEL CODE
if(!ann) return message.channel.send(`Bu bilet senin değil.`)//RABEL CODE
message.delete()//RABEL CODE
return message.channel.send(`Bu komutu bir bilet kanalında kullanın.`).then(c => c.delete(5000)) } }//RABEL CODE
  //RABEL CODE
let mt = message.mentions.roles.first() || message.mentions.users.first()//RABEL CODE
if(!mt) {//RABEL CODE
message.delete()//RABEL CODE
return message.channel.send(`Komutu düzgün kullanın: \`[Etiket/Rol] (kanal)\``)  }//RABEL CODE
let mention = message.guild.roles.get(mt.id) || message.guild.members.get(mt.id)//RABEL CODE
if(!mention) {//RABEL CODE
message.delete()//RABEL CODE
return message.channel.send(`Komutu düzgün kullanın: \`[Etiket/Rol] (kanal)\``)  }  //RABEL CODE
  //RABEL CODE
if(args[1]) { //RABEL CODE 
  //RABEL CODE
if(message.mentions.channels.first()) {//RABEL CODE
  //RABEL CODE
let ch = message.mentions.channels.first()//RABEL CODE
const ad = await data.fetch(`numara.${message.channel.id}`)//RABEL CODE
if(!ch.name === `ticket-${ad}` || ch.name === `closed-${ad}`) {//RABEL CODE
message.delete()//RABEL CODE
return message.channel.send(`Bir bilet kanalı değil.`).then(c => c.delete(5000)) }  //RABEL CODE
const ann = await data.fetch(`asd.${message.guild.id}.${ch.id}.${message.author.id}`)//RABEL CODE
if(!ann) return message.channel.send(`Bu bilet senin değil.`)//RABEL CODE
ch.overwritePermissions(mt, { 'SEND_MESSAGES': true, 'READ_MESSAGES': true })//RABEL CODE
message.delete()//RABEL CODE
const emb = new Discord.RichEmbed()//RABEL CODE
.setColor('GOLD')//RABEL CODE
.setDescription(`${mt}: ${ch} kanalına eklendi.`)//RABEL CODE
return message.channel.send(emb) } }//RABEL CODE
  //RABEL CODE
message.channel.overwritePermissions(mt, { 'SEND_MESSAGES': true, 'READ_MESSAGES': true })//RABEL CODE
message.delete()//RABEL CODE
const emb = new Discord.RichEmbed()//RABEL CODE
.setColor('GOLD')//RABEL CODE
.setDescription(`${mt}: ${message.channel} kanalına eklendi.`)//RABEL CODE
return message.channel.send(emb)//RABEL CODE
//RABEL CODE
}//RABEL CODE
//RABEL CODE
};//RABEL CODE
exports.conf = {//RABEL CODE
  enabled: true,//RABEL CODE
  guildOnly: true,//RABEL CODE
  aliases: [],//RABEL CODE
  permLevel: 0//RABEL CODE
}//RABEL CODE
//RABEL CODE
exports.help = {
  name: 'ekle'
};//RABEL CODE