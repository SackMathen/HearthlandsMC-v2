const { Client, GatewayIntentBits, EmbedBuilder, SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const Parser = require('rss-parser');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const parser = new Parser();

// ==================== BLOG MONITORING ====================

const POSTED_ARTICLES_FILE = path.join(__dirname, 'posted-articles.json');
const BLOG_RSS_URL = process.env.BLOG_RSS_URL;
const ANNOUNCEMENTS_CHANNEL_ID = process.env.ANNOUNCEMENTS_CHANNEL_ID;

// Initialize posted articles file if it doesn't exist
if (!fs.existsSync(POSTED_ARTICLES_FILE)) {
  fs.writeFileSync(POSTED_ARTICLES_FILE, JSON.stringify({ articles: [] }, null, 2));
}

function getPostedArticles() {
  try {
    const data = fs.readFileSync(POSTED_ARTICLES_FILE, 'utf8');
    return JSON.parse(data).articles;
  } catch (error) {
    console.error('❌ Error reading posted articles:', error);
    return [];
  }
}

function savePostedArticle(articleId) {
  try {
    const data = JSON.parse(fs.readFileSync(POSTED_ARTICLES_FILE, 'utf8'));
    if (!data.articles.includes(articleId)) {
      data.articles.push(articleId);
      fs.writeFileSync(POSTED_ARTICLES_FILE, JSON.stringify(data, null, 2));
    }
  } catch (error) {
    console.error('❌ Error saving article:', error);
  }
}

async function checkBlogForNewPosts() {
  if (!BLOG_RSS_URL || !ANNOUNCEMENTS_CHANNEL_ID) {
    return; // Blog monitoring not configured
  }

  try {
    const feed = await parser.parseURL(BLOG_RSS_URL);
    const postedArticles = getPostedArticles();
    const channel = client.channels.cache.get(ANNOUNCEMENTS_CHANNEL_ID);

    if (!channel) {
      console.error('❌ Announcements channel not found. Check your ANNOUNCEMENTS_CHANNEL_ID');
      return;
    }

    // Check each article in reverse order (oldest first) to post in chronological order
    const newArticles = feed.items.filter(item => !postedArticles.includes(item.link)).reverse();

    for (const item of newArticles) {
      const embed = new EmbedBuilder()
        .setTitle('📝 New Blog Post!')
        .setColor(0x9370DB)
        .setDescription(item.title)
        .addFields(
          {
            name: 'Author',
            value: item.author || 'The Hearthlands',
            inline: true
          },
          {
            name: 'Published',
            value: new Date(item.pubDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            inline: true
          }
        );

      // Add summary if available
      if (item.contentSnippet) {
        const summary = item.contentSnippet.substring(0, 200) + (item.contentSnippet.length > 200 ? '...' : '');
        embed.addField('Summary', summary);
      }

      // Add read more button via URL field
      embed.setURL(item.link);
      embed.setFooter({ text: 'Click the title to read the full post' });

      await channel.send({ embeds: [embed] });
      savePostedArticle(item.link);

      console.log(`✅ Posted new blog article: ${item.title}`);
    }
  } catch (error) {
    console.error('❌ Error checking blog feed:', error);
  }
}

// Check blog every hour (3600000 ms)
let blogCheckInterval = null;
function startBlogMonitoring() {
  if (!BLOG_RSS_URL || !ANNOUNCEMENTS_CHANNEL_ID) {
    console.log('⏭️  Blog monitoring not configured. Skipping...');
    return;
  }

  console.log('🔄 Blog monitoring enabled. Checking every hour...');
  // Check immediately on startup
  checkBlogForNewPosts();
  // Then check every hour
  blogCheckInterval = setInterval(checkBlogForNewPosts, 3600000);
}

// ==================== LORE DATA ====================

const loreData = {
  factions: {
    archivists: {
      name: "The Archivists of Starlight",
      color: 0x87CEEB,
      fields: [
        {
          name: "Philosophy & Purpose",
          value: "Scholars, historians, and seekers of knowledge. Wisdom transcends conflict.\n*\"Knowledge binds all, but chains none.\"*"
        },
        {
          name: "Leadership",
          value: "**High Archivist Elara** - Soft-spoken but absolute, ageless guardian of knowledge"
        },
        {
          name: "Territory",
          value: "The **Grand Library** - Three immense towers of pale stone at the confluence of two rivers"
        },
        {
          name: "Perks & Benefits",
          value: "• 15-20% discount on enchanting & potion ingredients\n• Fast travel to knowledge centers\n• Research grants for exploration\n• Access to rare crafting recipes"
        },
        {
          name: "Allies & Rivals",
          value: "**Allies:** The Pathfinders\n**Rivals:** The Iron Crown"
        },
        {
          name: "Join the Archivists",
          value: "**Quest:** *The Lost Codex* - Find three ancient texts, return them unharmed, pass a written exam"
        }
      ]
    },
    pathfinders: {
      name: "The Pathfinders' Guild",
      color: 0x90EE90,
      fields: [
        {
          name: "Philosophy & Purpose",
          value: "Adventurers and explorers who map unmapped lands and forge trade routes.\n*\"Every horizon holds a story; every story deepens our bond.\"*"
        },
        {
          name: "Leadership",
          value: "**Grandmaster Kael** - Weathered explorer, leads through experience and respect"
        },
        {
          name: "Territory",
          value: "Network of **Lodges** across the realm, headquarters at **Central Lodge** in Waymark"
        },
        {
          name: "Perks & Benefits",
          value: "• Waystones teleportation network\n• Detailed maps & reduced fog-of-war\n• 10-15% trade discounts\n• Mount access at reduced prices\n• Cartography skill rewards"
        },
        {
          name: "Allies & Rivals",
          value: "**Allies:** The Deeproot Collective, The Archivists\n**Rivals:** The Iron Crown"
        },
        {
          name: "Join the Pathfinders",
          value: "**Quest:** *Blaze a New Trail* - Map three locations, deliver trade goods to three settlements, complete a navigation challenge"
        }
      ]
    },
    ironcrown: {
      name: "The Iron Crown",
      color: 0xFF4500,
      fields: [
        {
          name: "Philosophy & Purpose",
          value: "Military and industrial power that believes strength and order bring prosperity.\n*\"Order from chaos; strength through unity.\"*"
        },
        {
          name: "Leadership",
          value: "**Lord Commander Thorne** - Military tactician, strategic and committed to expansion"
        },
        {
          name: "Territory",
          value: "Multiple regions centered on **Ironhold Citadel** - a massive fortress carved from a mountainside"
        },
        {
          name: "Perks & Benefits",
          value: "• Advanced combat training & equipment\n• Reduced building costs for fortifications\n• Rare ores & high-tier crafting access\n• Safe passage through territories\n• Military rank advancement"
        },
        {
          name: "Allies & Rivals",
          value: "**Allies:** The Deeproot Collective (mutual defense)\n**Rivals:** The Archivists, The Pathfinders"
        },
        {
          name: "Join the Iron Crown",
          value: "**Quest:** *Prove Your Mettle* - Complete three combat challenges, gather resources for a Crown facility, swear an oath"
        }
      ]
    },
    deeproot: {
      name: "The Deeproot Collective",
      color: 0x228B22,
      fields: [
        {
          name: "Philosophy & Purpose",
          value: "Nature-aligned druids and shamans who see the land as alive and worthy of respect.\n*\"We are rooted in the earth, and the earth sustains us all.\"*"
        },
        {
          name: "Leadership",
          value: "**The Circle of Roots** - Council of five elder druids led by consensus. Prominent: Elderwood, Moonwhisper, Stoneheart"
        },
        {
          name: "Territory",
          value: "Vast pristine forests and wild lands centering on the **Heartwood Grove** - ancient forest of impossible heights"
        },
        {
          name: "Perks & Benefits",
          value: "• Rare plant reagents & nature-based spells\n• Reduced hunger, faster movement in forests\n• Ecosystem restoration rewards\n• Animal companion bonding\n• Camouflage & stealth bonuses"
        },
        {
          name: "Allies & Rivals",
          value: "**Allies:** The Pathfinders\n**Rivals:** The Iron Crown (industrialization vs. conservation)"
        },
        {
          name: "Join the Deeproot Collective",
          value: "**Quest:** *Commune with the Wild* - Plant & harvest three crops sustainably, restore a damaged area, complete a nature ritual"
        }
      ]
    }
  },
  locations: {
    cinderfall: {
      name: "Cinderfall: Life Among the Embers",
      color: 0xFF6347,
      fields: [
        {
          name: "Overview",
          value: "A volcanic settlement built into basalt cliffs and obsidian flows of Mount Ignis. Industrial, gritty, where survival means respecting the volcano."
        },
        {
          name: "The Pact of Glass",
          value: "Legend holds that the first settlers negotiated with a Fire Spirit for the Eternal Heat—an inexhaustible thermal energy. In exchange, tribute is due every century. The last tribute was 73 years ago. The next is due in 27 years.\n\n*Some whisper that the volcano grows restless as the date approaches.*"
        },
        {
          name: "The Obsidian Shield",
          value: "Founded by **Kaelen Ash-Walker**, a legendary miner who discovered Mount Ignis's obsidian is magically reinforced—impervious to Creeper blasts. This discovery made Cinderfall an impregnable stronghold."
        },
        {
          name: "Current Crisis: The Awakening",
          value: "Lava levels are dropping. The ground trembles with increasing frequency. Something is wrong. The volcano is breathing in—but what happens when it exhales? The Council of Wardens races against time to understand what's happening."
        },
        {
          name: "Major Factions in Cinderfall",
          value: "• **Council of Wardens** - Government & engineers\n• **Strider-Kin Cult** - Underground movement venerating the Nether\n• **Ice-Roaders Guild** - Merchants controlling blue ice trade\n• **Ember Collective** - Black market controllers\n• **Ash-Sweepers Union** - Emerging labor movement"
        },
        {
          name: "Notable NPCs",
          value: "**Elder Korvin** (Council head), **Thorne Stonefist** (Water Guard Captain), **Lyssa the Forge-Keeper** (Grand Furnace master), **Malachai the Deep** (mysterious advisor), **Captain Vex** (Ice-Roaders leader)"
        }
      ]
    },
    dawnmere: {
      name: "Dawnmere: Where Every Adventure Begins",
      color: 0xFFD700,
      fields: [
        {
          name: "Overview",
          value: "The primary spawn point and safe haven in the vast plains biome. New players are protected from danger while they learn the customs and rules of the realm."
        },
        {
          name: "Lore",
          value: "In the age before memory, settlers discovered these grasslands where the sun rises with such clarity it seems to bless the earth. Wise leaders and mages imbued Dawnmere with protective enchantments—ancient magic that shields new arrivals and allows them time to acclimate."
        },
        {
          name: "The Castle of Dawnmere",
          value: "A procedurally generated structure of impossible architecture that overlooks the settlement from the eastern ridge. It changes subtly with each season—perhaps built by the original settlers, or grown from the earth itself. A mystery awaiting those strong enough to seek its secrets."
        },
        {
          name: "Settlement Layout",
          value: "• **Central Spawn Point** - Where all players first appear, marked by a stone monument\n• **Resource Gathering Zone** - Abundant wood, stone, basic ores (respawning)\n• **Community Hub** - Information station with server rules & lore\n• **Residential District** - Plots for new player homes\n• **Tutorial Grounds** - Learning areas with instructional signs"
        },
        {
          name: "Protection Settings",
          value: "**PvP Disabled** | **Mob Damage Disabled** | **Block Protection** | **Drop Protection**\n\nCore zone: ~200 blocks from spawn. Extended safe zone: ~400 blocks. Beyond that: standard rules apply."
        }
      ]
    }
  },
  world: {
    overview: {
      name: "The Hearthlands: World Overview",
      color: 0x8B4513,
      fields: [
        {
          name: "World Premise",
          value: "A vast medieval fantasy realm where players claim territories, build factions, and shape their own legends. Defined by natural wonders, ancient castles, dungeons, and mysteries waiting to be discovered."
        },
        {
          name: "Core Systems",
          value: "**Territory & Factions** - Factions compete for territory control (Conquest Craft)\n**Lore & Quests** - FTB Quests with narrative-driven progression\n**Music & Atmosphere** - Medieval and biome-specific music creates immersion"
        },
        {
          name: "Key Landmarks",
          value: "• **Cinderfall** - Ancient volcanic civilization in ruins, major lore anchor\n• **Castle Dungeons** - Procedurally generated dungeons with treasure\n• **Waystones** - Fast travel network across the realm\n• **Biomes** - 80+ biomes available; 18-20 fantasy-appropriate biomes enabled"
        },
        {
          name: "Magic & Technology",
          value: "**Magic:** Ars Nouveau spell crafting (planned)\n**Tech Level:** Medieval with fantasy elements—NO steam, electricity, or modern tech\n**Combat:** Spartan Weaponry & Immersive Armors"
        },
        {
          name: "Player Roles",
          value: "• **Conqueror** - Build faction power through territorial conquest\n• **Builder** - Construct castles and settlements\n• **Explorer** - Discover dungeons, biomes, and lore\n• **Adventurer** - Engage with quests and NPC narratives\n• **Social** - Form alliances, wage wars, build community"
        }
      ]
    }
  }
};

// ==================== SLASH COMMANDS ====================

const commands = [
  new SlashCommandBuilder()
    .setName('faction')
    .setDescription('Get information about a faction')
    .addStringOption(option =>
      option
        .setName('faction')
        .setDescription('Which faction?')
        .setRequired(true)
        .addChoices(
          { name: 'Archivists of Starlight', value: 'archivists' },
          { name: 'Pathfinders Guild', value: 'pathfinders' },
          { name: 'The Iron Crown', value: 'ironcrown' },
          { name: 'Deeproot Collective', value: 'deeproot' }
        )
    ),

  new SlashCommandBuilder()
    .setName('location')
    .setDescription('Get information about a location')
    .addStringOption(option =>
      option
        .setName('location')
        .setDescription('Which location?')
        .setRequired(true)
        .addChoices(
          { name: 'Cinderfall', value: 'cinderfall' },
          { name: 'Dawnmere', value: 'dawnmere' }
        )
    ),

  new SlashCommandBuilder()
    .setName('world')
    .setDescription('Get information about The Hearthlands world'),

  new SlashCommandBuilder()
    .setName('lore')
    .setDescription('Post all faction and location lore to a channel')
    .setDefaultMemberPermissions('0'),

  new SlashCommandBuilder()
    .setName('lore-help')
    .setDescription('View all available lore commands'),

  new SlashCommandBuilder()
    .setName('check-blog')
    .setDescription('Manually check for new blog posts')
];

// ==================== CREATE EMBEDS ====================

function createFactionEmbed(factionKey) {
  const faction = loreData.factions[factionKey];
  if (!faction) return null;

  const embed = new EmbedBuilder()
    .setTitle(faction.name)
    .setColor(faction.color)
    .setFooter({ text: 'The Hearthlands Lore' })
    .setTimestamp();

  faction.fields.forEach(field => {
    embed.addField(field.name, field.value, false);
  });

  return embed;
}

function createLocationEmbed(locationKey) {
  const location = loreData.locations[locationKey];
  if (!location) return null;

  const embed = new EmbedBuilder()
    .setTitle(location.name)
    .setColor(location.color)
    .setFooter({ text: 'The Hearthlands Lore' })
    .setTimestamp();

  location.fields.forEach(field => {
    embed.addField(field.name, field.value, false);
  });

  return embed;
}

function createWorldEmbed() {
  const world = loreData.world.overview;
  const embed = new EmbedBuilder()
    .setTitle(world.name)
    .setColor(world.color)
    .setFooter({ text: 'The Hearthlands Lore' })
    .setTimestamp();

  world.fields.forEach(field => {
    embed.addField(field.name, field.value, false);
  });

  return embed;
}

function createHelpEmbed() {
  return new EmbedBuilder()
    .setTitle('⚔️ Lore & Blog Commands')
    .setColor(0x9370DB)
    .setDescription('Get information about The Hearthlands world and blog')
    .addFields(
      {
        name: '/faction',
        value: 'Learn about the four great factions\n• Archivists of Starlight\n• Pathfinders Guild\n• The Iron Crown\n• Deeproot Collective',
        inline: false
      },
      {
        name: '/location',
        value: 'Explore major locations\n• Cinderfall (volcanic settlement)\n• Dawnmere (spawn haven)',
        inline: false
      },
      {
        name: '/world',
        value: 'Get an overview of The Hearthlands and its systems',
        inline: false
      },
      {
        name: '/lore',
        value: '(Admin only) Post all lore to the current channel',
        inline: false
      },
      {
        name: '/check-blog',
        value: 'Manually check for new blog posts and post them to announcements',
        inline: false
      }
    )
    .setFooter({ text: 'Blog posts are automatically checked every hour' });
}

// ==================== CLIENT EVENTS ====================

client.on('ready', () => {
  console.log(`✅ Bot logged in as ${client.user.tag}`);
  startBlogMonitoring();
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  try {
    switch (interaction.commandName) {
      case 'faction':
        const factionKey = interaction.options.getString('faction');
        const factionEmbed = createFactionEmbed(factionKey);
        await interaction.reply({ embeds: [factionEmbed] });
        break;

      case 'location':
        const locationKey = interaction.options.getString('location');
        const locationEmbed = createLocationEmbed(locationKey);
        await interaction.reply({ embeds: [locationEmbed] });
        break;

      case 'world':
        const worldEmbed = createWorldEmbed();
        await interaction.reply({ embeds: [worldEmbed] });
        break;

      case 'lore':
        if (!interaction.member.permissions.has('Administrator')) {
          await interaction.reply({ content: '❌ You need Administrator permissions to use this command', ephemeral: true });
          return;
        }

        await interaction.deferReply();

        // Post all faction embeds
        const factionKeys = ['archivists', 'pathfinders', 'ironcrown', 'deeproot'];
        for (const key of factionKeys) {
          const embed = createFactionEmbed(key);
          await interaction.channel.send({ embeds: [embed] });
        }

        // Post location embeds
        const locationKeys = ['cinderfall', 'dawnmere'];
        for (const key of locationKeys) {
          const embed = createLocationEmbed(key);
          await interaction.channel.send({ embeds: [embed] });
        }

        // Post world embed
        await interaction.channel.send({ embeds: [createWorldEmbed()] });

        await interaction.editReply('✅ All lore posted!');
        break;

      case 'lore-help':
        const helpEmbed = createHelpEmbed();
        await interaction.reply({ embeds: [helpEmbed] });
        break;

      case 'check-blog':
        await interaction.deferReply({ ephemeral: true });

        if (!BLOG_RSS_URL || !ANNOUNCEMENTS_CHANNEL_ID) {
          await interaction.editReply('❌ Blog monitoring is not configured. Make sure `BLOG_RSS_URL` and `ANNOUNCEMENTS_CHANNEL_ID` are set in your `.env` file.');
          return;
        }

        try {
          const beforeCount = getPostedArticles().length;
          await checkBlogForNewPosts();
          const afterCount = getPostedArticles().length;
          const newPostsCount = afterCount - beforeCount;

          if (newPostsCount > 0) {
            await interaction.editReply(`✅ Found and posted ${newPostsCount} new blog post(s)!`);
          } else {
            await interaction.editReply('✅ Blog checked. No new posts at this time.');
          }
        } catch (error) {
          console.error('❌ Error checking blog:', error);
          await interaction.editReply('❌ Error checking blog. Check the console for details.');
        }
        break;
    }
  } catch (error) {
    console.error('❌ Error handling interaction:', error);
    await interaction.reply({ content: '❌ An error occurred', ephemeral: true });
  }
});

// ==================== REGISTER COMMANDS ====================

async function registerCommands() {
  try {
    const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

    console.log('🔄 Refreshing application commands...');

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

    console.log('✅ Commands registered successfully!');
  } catch (error) {
    console.error('❌ Error registering commands:', error);
  }
}

// ==================== LOGIN ====================

client.login(process.env.DISCORD_TOKEN);
registerCommands();

console.log('🚀 Lore Bot is starting...');
