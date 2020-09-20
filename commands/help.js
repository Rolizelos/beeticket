const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client, message, args) => {
const prefix = await data.fetch(`prefix.${message.guild.id}`) || client.ayarlar.prefix;
  
const embed = new Discord.RichEmbed()
                .setColor('GOLD')
        .setFooter(`${message.author.username} Başarıyla Yardım Komutunu Kullandı!`, message.author.avatarURL)
        .setAuthor('Ticket Bot Yardım Menüsü')
        .setThumbnail('https://cdn.discordapp.com/avatars/710115789537017926/df3332096163de41401e2c8b317fab8f.png?size=2048')
        .setDescription('<a:saklan:752896867683270778> Botu Davet Etmek İçin'+ prefix + 'davet yazabilirisiniz.',false)
        .addField('**__Ekle__**','<a:settings:752896916139802727>'+ prefix + ' `ekle @rol #kanal` Ticket a başka birisini/rolü eklersiniz.',true )
        .addField('**__Sil__**','<a:sguad:720578780422340628>'+ prefix + '  `sil @etiket #kanal` Ticket a ekli birisini/rolü silersiniz.',true)
        .addField('**__Kapat__**','<a:selam:752896916995571985>'+ prefix + ' `kapat` Ticket ı kapatırsınız.',true)
        .addField('**__Aç__**',prefix + ' `aç @etiket #kanal` Ticket ı açarsınız.',true)
        .addField('**__Bilet Sil__**',prefix + ' `bilet-sil` Ticket ı silersiniz.',true)
        .addField('**__Ping__**',prefix + ' `ping` Botun Pingini Gösterir.',true)
        .addField('**__Ticket Kanal__**',prefix + '  `ticket-kanal [ayarla/sıfırla] (kanal)` Ticket Kanalı Ayarlarınız.',true)
        .addField('**__Ticket__**',prefix + '  `ticket gönder` Ticket Mesajı Yolar.',false)
        .addField('**__Bilgilendirme__**',prefix + '  `davet` | Botu Sununuya Davet Edersiniz',true)
message.channel.send(embed)  }  

  

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'yardım'
};