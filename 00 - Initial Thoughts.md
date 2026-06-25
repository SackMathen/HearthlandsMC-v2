# 00 - Initial Thoughts
*Last updated: 2026-04-01*

## The Concept
A general survival Minecraft server built around the **Towny plugin**, designed to grow a playerbase organically and generate revenue through cosmetic sales and voluntary donations — in full compliance with Mojang's EULA.

---

## Hosting
- **Self-hosted on home servers** — eliminates monthly hosting fees entirely
- Requires **port forwarding** (port 25565) on the router to the server machine's local IP
- Need a **static IP or DDNS service** (e.g. DuckDNS, No-IP) since home IPs are usually dynamic
- A **custom domain** (~$10–15/year) is recommended over sharing a raw IP — looks professional
- **DDoS protection** is important before going public — use TCPShield or Cloudflare Spectrum to mask the real home IP
- **Hardware: 24 GB RAM total** — very comfortable; allocate 6–10 GB to Minecraft (e.g. -Xms4G -Xmx8G), reserve 2–4 GB for OS
- Headroom allows a second server instance (creative/test) on same machine later
- Use **Aikar's Flags** for JVM startup — optimized garbage collection reduces lag spikes significantly
- **CPU: 12th or 13th gen Intel** — excellent single-core performance, well-suited for Minecraft's largely single-threaded workload
- Realistically supports 50–100+ concurrent players before hitting hardware limits
- Note: 12th gen+ uses hybrid P/E core architecture — if lag spikes occur later, JVM affinity to P-cores only can help
- Single-core CPU speed matters more than RAM for Minecraft server performance
- Java 21 required for modern Minecraft versions
- Trade-off: no hosting fee, but responsible for 24/7 uptime, electricity costs, and network stability

## Monetization Strategy
- **Cannot** charge a joining or "upkeep" fee — Mojang's EULA prohibits gating access via payment regardless of how the fee is framed
- **Can** sell cosmetic perks: custom chat colors, titles/ranks, particle effects, decorative items, pets
- **Can** accept voluntary donations with no gameplay strings attached
- Use **Tebex (BuyCraft)** or **CraftingStore** to manage a EULA-compliant storefront

## Server Identity
- **Type:** Modded survival with Feudal factions (Java Edition only)
- **Why modded:** Dedicated, engaged playerbase; mods attract niche communities that retain better than vanilla
- **Core Mechanic:** Feudal mod (chunk-based faction claims, hierarchical leadership, territorial warfare)
- **Edition:** Java Edition only (where the mod ecosystem is strongest)
- **Theme:** Custom fantasy/knights modpack with castle-building, medieval aesthetics, and lore
  - Knights, castles, kingdoms fit naturally with Feudal's faction hierarchy and territorial control
  - Fantasy mods create a cohesive world identity that appeals to roleplay/community builders
  - Server becomes a world to *inhabit* narratively AND *conquer* tactically
- **Gameplay Loop:**
  - Build faction power through lore quests (FTB Quests) and story (Custom NPCs)
  - Control territory by claiming chunks (Feudal)
  - Earn faction wealth through economy (separate from leaderboards)
  - Compete for largest territory on leaderboard
  - Engage with world lore and progression
- **Naming approach:** The server name is a *world name* — something players enter, not just a server they join. Towns like Hearthshire and Cresthold exist *within* the world.
- **World Name Shortlist (in order of preference):**
  1. **The Hearthlands** — warm, community-driven, Hearthshire/Cresthold fit naturally inside it
  2. **Cinderfall** — dramatic, lore-heavy, suggests a world shaped by an ancient event
  3. **The Verdant Reach** — lush and expansive, full of land worth claiming
- **Core Plugin Stack (planned):**
  - Towny — land claiming and town management
  - Vault + EssentialsX — economy foundation
  - Jobs plugin — players earn money to fund towns
  - Dynmap or BlueMap — live dynamic world map showing town claims

## Building a Playerbase
- Start with personal network and existing gaming communities
- List on server directories: Planet Minecraft, Minecraft Server List, TopG, Minecraft MP
- Build a Discord server as the community hub
- Post clips/screenshots on TikTok, YouTube, Reddit
- Run in-game events (build contests, PvP tournaments, treasure hunts)
- Be patient — growth is slow at first but compounds with active community management

## Key Insight
The server's real competitive edge won't be plugins alone — it will be the **culture and community** built around it. Towny provides the scaffolding; the owner fills it with personality and active engagement.

---

## Quest & Progression System
- **FTB Quests** — Foundation for quest logic and progression tracking (linear, lore-driven)
- **Quest Design Phase 1 (Now):** Lore-driven quests introducing world, factions, Cinderfall (manually created)
- **Quest Design Phase 2 (Later):** Gameplay-driven progression quests (unlocks, items, mechanical advancement)
- **Cinderfall Role:** Open exploration faction base with Custom NPCs giving lore exposition and rewards

## NPC System
- **Custom NPCs** — Populate Cinderfall with lore-driven characters
- **Cinderfall NPCs:** Give quests, expose world lore, offer faction-aligned rewards
- **Other NPCs (TBD):** Additional world figures as lore develops

## Faction System
- **Conquest Craft** — Territory claiming via Domain Blocks (Inactive/Unclaimed/Claimed). Faction-focused conquest mechanics.
- **Territory Control:** Factions claim territories using Domain Blocks; progression tied to conquest
- **Economy:** Factions earn currency but does NOT contribute to leaderboards
- **War Mechanics:** Factions compete for territory control through conquest gameplay
