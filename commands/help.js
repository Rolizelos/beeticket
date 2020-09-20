const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client, message, args) => {
const prefix = await data.fetch(`prefix.${message.guild.id}`) || client.ayarlar.prefix;
  
const embed = new Discord.RichEmbed()
                .setColor('GOLD')
        .setFooter(`${msg.author.username} Başarıyla Yardım Komutunu Kullandı!`, msg.author.avatarURL)
        .setAuthor('Friday Bot Yardım Menüsü')
        .setThumbnail('https://cdn.discordapp.com/avatars/710115789537017926/df3332096163de41401e2c8b317fab8f.png?size=2048')
        .setDescription('<a:saklan:752896867683270778> Botu Davet Etmek İçin `-davet` yazabilirisiniz.',false)
        .addField('**__Yetkili Komutlar__**','<a:settings:752896916139802727> `-yetkili`',true )
        .addField('**__Kullanıcı__**','<a:sguad:720578780422340628>  `-kullanıcı`',true)
        .addField('**__Eğlence__**','<a:selam:752896916995571985> `-eğlence`',true)
        .addField('**__Guard__**', '<a:settings:752896916139802727> `-guard`',true)
        .addField('**__Eklenti__**','<a:sguad:720578780422340628>  `-eklenti`',true)
        .addField('**__Logo__**', '<a:selam:752896916995571985>  `-logo`',true)
        .addField('**__Bilgilendirme__**', '<a:sar_partner:753157108861501441>  `-davet` | Botu Sununuya Davet Edersiniz \n<a:sar_partner:753157108861501441> `-botbilgi` | Botun İslatistiklerini Görürsünüz \n <a:sar_partner:753157108861501441> `-sunucu` | Sunucuya Özel Komutlar',true)
.setImage(`https://cdn.discordapp.com/attachments/748408331571298435/753153313645658142/Friday_Wallpaper.jpg`);
.addField(`==================================
          Ticket Commands
==================================

\`$ekle [Etiket] (kanal)\``, `*Açıklama: Ticket a başka birisini/rolü eklersiniz.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`$sil [Etiket] (kanal)\``, `*Açıklama: Ticket a ekli birisini/rolü silersiniz.
Ekstra kullanım: $kaldır*`)

.addField(`\`$kapat [Etiket] (kanal)\``, `*Açıklama: Ticket ı kapatırsınız.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`$aç [Etiket] (kanal)\``, `*Açıklama: Ticket ı açarsınız.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`$bilet-sil \``, `*Açıklama: Ticket ı silersiniz.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`$ping [gönder])\``, `*Açıklama: Botun pingini gösterir.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`$ticket-kanal [ayarla/sıfırla] (kanal)\``, `*Açıklama: Ticket mesajının kanalını ayarlarsınız.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`$ticket [gönder])\``, `*Açıklama: Ticket mesajını yollar.
Ekstra kullanım: Bulunmuyor.*`)
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