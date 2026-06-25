# The Hearthlands Lore Bot 🧙‍♂️

A Discord bot that posts beautifully formatted embeds of your Minecraft server lore directly into Discord channels.

## What It Does

This bot provides:
- **Slash commands** to fetch individual faction/location lore
- **Admin command** to auto-post all lore at once
- **Beautiful embeds** with custom colors and formatting
- **Easy to customize** - modify lore data in the bot file anytime

## Features

### Commands

- `/faction` - Get info about any of the 4 major factions
- `/location` - Learn about Cinderfall or Dawnmere
- `/world` - Get The Hearthlands world overview
- `/lore` (admin only) - Post all lore embeds to current channel
- `/lore-help` - View all available commands

## Setup Guide

### Step 1: Create a Discord Bot

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application"
3. Give it a name (e.g., "Hearthlands Lore")
4. Go to the **Bot** section on the left
5. Click "Add Bot"
6. Under TOKEN, click "Copy" - **save this securely**
7. Go to **OAuth2 > URL Generator**
8. Select scopes: `bot`
9. Select permissions:
   - `Send Messages`
   - `Embed Links`
   - `Read Message History`
10. Copy the generated URL and open it in your browser to invite the bot to your server

### Step 2: Set Up the Bot Locally

#### Prerequisites
- Node.js 16+ installed ([download here](https://nodejs.org/))
- The bot files (lore-bot.js, package.json, etc.)

#### Installation

1. Open a terminal/command prompt
2. Navigate to the folder with lore-bot.js:
   ```bash
   cd "C:\Users\jmwie\Documents\Knowledge\Claude's Folder\minecraft profit server"
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the same folder:
   ```bash
   copy .env.example .env
   ```

5. Edit `.env` and add your bot token, client ID, and blog settings:
   ```
   DISCORD_TOKEN=your_bot_token_here
   CLIENT_ID=your_client_id_here
   BLOG_RSS_URL=https://hearthlandsmc.blogspot.com/feeds/posts/default
   ANNOUNCEMENTS_CHANNEL_ID=1499123018213884054
   ```

6. Save and close the file

> **Note:** The blog settings are optional. If you don't want blog monitoring, you can leave them out or use empty values.

### Step 3: Run the Bot

```bash
npm start
```

You should see:
```
✅ Bot logged in as YourBotName#0000
✅ Commands registered successfully!
🚀 Lore Bot is starting...
```

## Using the Bot

### In Discord

**Get a specific faction:**
```
/faction archivists
/faction pathfinders
/faction ironcrown
/faction deeproot
```

**Get a location:**
```
/location cinderfall
/location dawnmere
```

**Get world overview:**
```
/world
```

**Post all lore (admin only):**
```
/lore
```
This posts all factions and locations to the current channel.

**View commands:**
```
/lore-help
```

## Blog Monitoring 📝

The bot can automatically monitor your Blogger blog and post new articles to Discord!

### How It Works

- **Automatic checking:** Every hour, the bot checks your blog's RSS feed
- **New posts:** When it finds a new post, it sends a formatted embed to your announcements channel
- **Manual check:** Use `/check-blog` anytime to manually check for new posts
- **Smart tracking:** The bot remembers which posts it's already posted, so no duplicates

### Blog Post Embeds

When a new blog post is detected, the bot sends a nice embed with:
- Post title
- Author
- Publication date
- Summary preview
- Link to read the full post

### Configuration

Blog monitoring is configured in your `.env` file:

```
BLOG_RSS_URL=https://hearthlandsmc.blogspot.com/feeds/posts/default
ANNOUNCEMENTS_CHANNEL_ID=1499123018213884054
```

If either of these is missing, blog monitoring is disabled (the bot works fine without it).

### Disabling Blog Monitoring

If you want to turn off blog monitoring, just comment out or remove the blog settings from `.env`:

```
# BLOG_RSS_URL=https://hearthlandsmc.blogspot.com/feeds/posts/default
# ANNOUNCEMENTS_CHANNEL_ID=1499123018213884054
```

## Customizing the Lore

To add or modify lore, edit the `loreData` object in `lore-bot.js`.

### Example: Add a new faction

Find the `factions` section and add:

```javascript
newfaction: {
  name: "The New Faction",
  color: 0xFF00FF,  // Hex color code
  fields: [
    {
      name: "Philosophy & Purpose",
      value: "Description of the faction"
    },
    {
      name: "Leadership",
      value: "Who leads it"
    },
    // Add more fields as needed
  ]
}
```

Then in the `/faction` command, add to the choices:
```javascript
{ name: 'The New Faction', value: 'newfaction' }
```

### Color Reference

- `0x87CEEB` - Sky Blue (Archivists)
- `0x90EE90` - Light Green (Pathfinders)
- `0xFF4500` - Orange Red (Iron Crown)
- `0x228B22` - Forest Green (Deeproot)
- `0xFF6347` - Tomato Red (Cinderfall)
- `0xFFD700` - Gold (Dawnmere)
- `0x8B4513` - Saddle Brown (World)

## Hosting 24/7 (Optional)

To keep the bot running 24/7, you can:

**Option 1: Replit**
- Upload files to [Replit.com](https://replit.com)
- Run in Replit (free tier has limitations)

**Option 2: VPS**
- Rent a cheap VPS ($2-5/month)
- Install Node.js, run the bot with PM2

**Option 3: Home Server**
- Run on a home computer with good internet
- Keep the terminal window open

## Troubleshooting

### Bot doesn't respond to commands
- Make sure the bot is online (check Discord - should have a green dot)
- Check that you're using `/` (slash commands)
- Run `/lore-help` to see if commands are registered

### "Missing Permissions" error
- Make sure the bot has permission to send messages in that channel
- Check server settings > roles, make sure the bot role is above other roles

### Bot goes offline
- Check the terminal window for error messages
- Make sure the `.env` file is correct and saved
- Restart the bot with `npm start`

### Lore content is cut off
- Discord embeds have a 1024 character limit per field
- If needed, split long sections into multiple fields

## Advanced: Running Multiple Bots

If you want separate bots for different servers, create a new folder with copies of:
- `lore-bot.js`
- `package.json`
- `.env`

Each bot needs its own token and can be run independently.

## Support & Customization

To add more features:
- More commands
- Reaction-based navigation
- Database integration
- Auto-update lore from a file

Let me know if you need help extending the bot!

---

**Bot created for The Hearthlands Minecraft Server** ⚔️
