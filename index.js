const Discord = require('discord.js');
const client = new Discord.Client();
const pcount = 0

client.on('ready', message =>
{
    client.user.setPresence({ game: { name: '境界を操る程度の能力' }, status: 'idle' });  
    console.log('幻想郷は全てを受け入れる');

    const ch_name = "スキマ";

    client.channels.forEach(channel =>
    {
        if (channel.name === ch_name) 
        {
            channel.send("幻想郷は、全てを受け入れるのよ。それはそれは残酷な話ですわ。")
            return;
        }
        return;
    });
})

client.on('message', message =>
{
    if (message.content.match(/c!start/)) 
    {
        const pcount = pcount + 1
        setInterval(function () 
        {
            message.guild.channels.find("id", "676314154512023608").setName("Player Count: " + pcount);
        }, 500);
    }
    if (message.channel.name === 'スキマ')
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
                if (channel.name === 'スキマ')
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
                if (channel.name === 'スキマ')
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


