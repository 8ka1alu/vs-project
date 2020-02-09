const Discord = require('discord.js');
const client = new Discord.Client();

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
    if (message.content.startsWith('!new')) 
    {
        // Fetch all the channels in the guild.
        let allChannels = message.guild.channels;
        // Filter out all the non-text channels.
        let textChannels = allChannels.filter((channel) => 
        {
            return channel.type === "text";    
        });
        // Filter out all the text channels whose name isn't 'support-(number)'.
        let supportChannels = textChannels.filter((textChannel) => 
        {
            // Checks whether a channel name has format 'support-(number)'. Look into Regex for more info.
            return textChannel.name.match(/^(support-)\d+$/g);
        });
        // Check if there are any support channels.
        if (supportChannels.length) 
        {
            // Get the numbers from the channel name.
            let numbers = supportChannels.map((supportChannel) => 
            {
                return parseInt(supportChannel.name.split('-')[1]);
            });
            // Get the highest number from the array.
            let highestNumber = Math.max(...numbers);
            // Create a new support channel with the highest number + 1.
            message.guild.createChannel(`support-${highestNumber+1}`, 'text');
        } 
        else 
        {
            // There are no support channels, thus create the first one.
            message.guild.createChannel('support-1', 'text');
        }
    }
    if(message.content.startsWith('addch')) 
    {
        var channelName = message.content.replace(/addch/, 'a');
        message.guild.createChannel(channelName);
        return;
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


