const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', message =>
{
    client.user.setPresence({ game: { name: '女神の祝福' }, status: 'idle' });  
    console.log('幻想郷は全てを受け入れる');

    const ch_name = "グローバルチャット";

    client.channels.forEach(channel =>
    {
        if (channel.name === ch_name) 
        {
            channel.send(f"わたしは{client.user.name}です。ルチアとお呼びください。")
            return;
        }
        return;
    });
})

client.on('message', message =>
{
    if (message.channel.name === 'グローバルチャット')
    {
        if (message.author.bot) return;
        if (message.content.match(/discord.gg/)) 
        {
            message.delete(100)
            return;
        }
        if (message.attachments.size <= 0)
        {
            message.delete()
        }
        client.channels.forEach(channel =>
        {
            if (message.attachments.size <= 0)
            {
                const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL)
                    .setDescription(message.content)
                    .setColor(0x2C2F33)
                    .setFooter(message.guild.name, message.guild.iconURL)
                    .setTimestamp()
                if (channel.name === 'グローバルチャット')
                {
                    channel.send(embed)
                    return;
                }
                return;
            }
            if (!message.attachments.forEach(attachment =>
            {
                const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL)
                    .setImage(attachment.url)
                    .setDescription(attachment.url)
                    .setColor(0x2C2F33)
                    .setFooter(message.guild.name, message.guild.iconURL)
                    .setTimestamp()
                if (channel.name === 'グローバルチャット')
                {
                    channel.send(embed)
                    return;
                }
                return;
            }));
            return;
        });
    }
})

client.login(process.env.BOT_TOKEN);


