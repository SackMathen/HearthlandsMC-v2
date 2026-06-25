# The Hearthlands Server — Project Dump
*Generated: 2026-04-02*

## Executive Summary

Building a custom modded Minecraft Java Edition server called **The Hearthlands** with a fantasy/knights theme. Uses WarForge Factions for territory control, FTB Quests for lore progression, and Custom NPCs for world storytelling. The server is designed for faction-based warfare with a secondary narrative experience.

---

## Server Fundamentals

### Name & Branding
- **Primary Server Name:** The Hearthlands
- **Alternate Names (if needed):** Cinderfall, The Verdant Reach
- **World Premise:** A vast medieval fantasy realm where players build factions, claim chunks, and engage with lore-driven quests

### Edition & Version
- **Edition:** Java Edition only
- **Minecraft Version:** 1.20.1
- **Mod Loader:** Forge

### Hosting
- **Self-hosted** on home server (no paid hosting fees)
- **Hardware:** 24 GB RAM total, 12th or 13th gen Intel CPU
- **Allocation:** 6–10 GB to Minecraft (e.g., -Xms4G -Xmx8G), reserved 2–4 GB for OS
- **Launch Flags:** Use Aikar's Flags for optimized garbage collection
- **Expected Capacity:** 50–100+ concurrent players before hitting hardware limits
- **Network:** DDNS + port forwarding (25565) + DDoS protection (TCPShield/Cloudflare) — set up later

---

## Core Server Mechanics

### 1. Factions (Conquest Craft)
- **System:** Territory claiming via Domain Blocks (Inactive/Unclaimed/Claimed states)
- **Mechanic:** Faction-focused conquest gameplay; players claim and defend territories
- **Warfare:** Factions compete for territory control and expansion
- **Economy:** Factions earn currency — does NOT contribute to leaderboards
- **Territory:** Domain Blocks mark claimed territories; only faction members can interact
- **Status:** Available for 1.20.1 on CurseForge; testing in modpack

### 2. Quests & Lore (FTB Quests + Custom NPCs)
- **Quest Structure:** Linear with some overlap (Phase 1: lore-driven, Phase 2: gameplay-driven)
- **Creation:** Manually created in FTB Quests (not using pre-made packs)
- **Phase 1 (Current):** Introduce world, factions, Cinderfall; lore exposition
- **Phase 2 (Later):** Gameplay progression, unlocks, mechanical advancement
- **NPCs:** Custom NPCs populate Cinderfall and world, give quests + lore exposition + rewards
- **Cinderfall:** Open exploration faction base; major world landmark

### 3. Economy (Plugins)
- **Foundation:** Vault (currency API)
- **Commands:** EssentialsX (/pay, /balance, /money)
- **Income:** Jobs Reborn (players earn money by doing activities)
- **Separate from Leaderboards:** Factions earn money but it doesn't affect rankings
- **Trading:** Optional plugins (ShopGUIPlus/QuickShop) for player-to-player commerce

---

## Modpack (15 Mods)

### Building & Combat
1. **Conquest Reforged** — Medieval/fantasy building blocks (roofs, timber frames, walls)
2. **Macaw's Doors** — Medieval door variants
3. **Spartanweaponry** — Medieval weapons (longswords, axes, polearms)
4. **Immersive Armors** — Medieval armor sets with visual variety

### Magic & Utility
5. **Ars Nouveau** — Spell crafting system (players create spells from components)
6. **JEI** (Just Enough Items) — Recipe browser (essential for modded)
7. **WAILA** (What Am I Looking At) — Block/item tooltips on hover
8. **Supplementaries** — Decorative items, NPCs, small medieval touches

### World & Structures
9. **Instant Structures** — Auto-generates fantasy structures (castles, towers, temples) during world generation
10. **Structurize** — Load and paste pre-built structures (schematics); used for placing landmark castles
11. **Biomesoplenty** — 80+ biomes; curated selection of ~18–20 fantasy-appropriate biomes enabled
12. **Terrablender** — Fine-grained control over biome placement and blending (dependency for BOP)

### Quests, NPCs & Factions
13. **FTB Quests** — Quest system foundation; linear, lore-driven quests
14. **Custom NPCs** — NPCs that populate Cinderfall and give quests/rewards
15. **Conquest Craft** — Territory claiming via Domain Blocks, faction-focused conquest mechanics

---

## Biomesoplenty Biome Curation

### Enabled Biomes (18 total)
**Forest & Nature:**
- Mystic Grove, Cherry Blossom Grove, Maple Woods, Boreal Forest, Coniferous Forest, Old Growth Woodland

**Grassland & Meadow:**
- Lavender Field, Clover Patch, Highland Moor, Grassland

**Swamp & Wet:**
- Mire, Bayou, Bog

**Mountain & Rock:**
- Highland, Crag, Jade Cliffs

**Underground/Cave:**
- Glowing Grotto, Crystalline Chasm

### Disabled Biomes (Non-Fantasy)
- Erupting Inferno, Fungal Jungle, Lush Savanna, Lush Desert, Dead Forest, Dryland, Bamboo Grove, and others that clash with medieval fantasy aesthetic

### Configuration Strategy
- Adjust rarity/frequency per biome
- Use Terrablender for regional biome distribution (North = Boreal, Central = Lavender/Highland, South = Cherry Blossom, etc.)
- Customize as config file develops

---

## Lore & World Building

### Cinderfall
- **Location:** Volcano biome or custom Instant Structures placement (TBD)
- **Lore:** Ancient volcanic civilization that fell to ruin; haunting monument and place of power
- **Purpose:** Faction base, raid location, settlement focal point, lore anchor
- **NPCs:** Custom NPCs populate it, give quests, expose world history
- **Implementation:** Use Structurize to place custom volcano structure at key location

### World Themes
- **Tone:** Welcoming, community-driven, with pockets of mystery and danger
- **Visual Identity:** Medieval architecture (Conquest Reforged), fantasy biomes (Biomesoplenty), magic (Ars Nouveau)
- **Player Role:** Settlers, builders, knights, mages — anyone can forge their own legend

### Lore Files (In Development)
- **World Overview.md** — Cinderfall, landmarks, factions, magic system
- **Characters & NPCs.md** — World figures and their roles
- **Player Roleplay Guide.md** — How players engage with lore

---

## Monetization & Community

### Revenue Model
- **Cosmetic Store:** Tebex/CraftingStore (EULA-compliant)
- **Cosmetic Perks:** Chat colors, titles, particle effects, decorative items (NO gameplay advantages)
- **Voluntary Donations:** Optional, no strings attached
- **Server Costs:** Initially self-funded; target is cosmetics + donations to cover costs

### Community
- **Discord Server:** Hub for community, announcements, lore channels (TBD setup)
- **Playerbase Growth:** Server directories (Planet Minecraft, Minecraft Server List, TopG), content posting, in-game events
- **Events:** Build contests, PvP tournaments, treasure hunts (TBD after launch)

---

## Project Status

### Completed
✅ Server name finalized (The Hearthlands)
✅ Modpack curated (15 mods)
✅ Minecraft version locked (1.20.1 Forge)
✅ Core mechanics decided (WarForge Factions + FTB Quests + Custom NPCs)
✅ Biomesoplenty biomes curated (18 fantasy biomes selected)
✅ Lore framework created (Cinderfall, world themes, roleplay guide)
✅ Economy plugins selected (Vault, EssentialsX, Jobs Reborn)

### In Progress
🔄 Test server spin-up (modpack stability test)
🔄 WarForge Factions configuration (leaderboard, wealth mechanics)
🔄 Biomesoplenty config file customization
🔄 Jobs Reborn payout tuning

### Pending
⏳ Cinderfall design and structure placement
⏳ Phase 1 lore quests creation (FTB Quests)
⏳ Custom NPC population (Cinderfall + world)
⏳ Discord server setup
⏳ Tebex cosmetic store design
⏳ Server listing and public launch
⏳ Phase 2 gameplay-driven quests (after lore complete)

---

## Key Decisions & Rationale

### Why Conquest Craft?
- Faction-focused territory claiming with Domain Blocks (unique mechanic)
- Available for 1.20.1 Forge on CurseForge
- Fits conquest/territorial warfare theme perfectly
- Simpler than chunk-based systems; Domain Blocks are intuitive for players
- Allows creative territory designs beyond grid-based chunks

### Why Forge 1.20.1?
- Latest stable version with excellent mod ecosystem
- All required mods available and tested
- Best single-thread performance for Minecraft (12th/13th gen Intel excels here)

### Why FTB Quests + Custom NPCs?
- Separates lore delivery (quests + NPCs) from mechanics (factions + economy)
- Allows for manual, narrative-driven quest design
- Gives world tangible characters and story progression
- Phase 1 (lore) → Phase 2 (gameplay) approach builds investment

### Why Custom Modpack?
- Curated selection keeps the world thematically cohesive
- Removes alien/non-fantasy biomes that would break immersion
- Balanced complexity — enough depth without overwhelming players

---

## Next Steps (For Whoever Takes Over)

1. **Verify modpack stability** — Spin up test server, run for 10+ minutes, check logs for crashes
2. **Disable non-fantasy biomes** — Edit `biomesoplenty-common.toml` based on curation list
3. **Configure WarForge Factions** — Set leaderboard metrics, chunk claim costs, passive income rates
4. **Configure Jobs Reborn** — Adjust payout rates for mining, farming, woodcutting, etc.
5. **Test all systems together** — Mods + plugins + factions + economy
6. **Design Cinderfall** — Decide on volcano location, create or find structure schematic
7. **Begin Phase 1 quests** — Create linear lore quests in FTB Quests
8. **Populate world with NPCs** — Use Custom NPCs to create characters

---

## Contact Points for Questions

**Key Files:**
- `00 - Initial Thoughts.md` — Updated server fundamentals
- `02 - Modpack List.md` — Complete mod list with descriptions
- `03 - Server Setup Guide.md` — Step-by-step test server setup
- `04 - Biome Selection Guide.md` — BOP biome curation with rationale
- `Lore/` folder — World Overview, NPCs, Roleplay Guide (in development)
- `01 - Milestones.html` — Interactive checklist of server build phases

**Key Decisions:**
- WarForge Factions (not Towny)
- FTB Quests + Custom NPCs (linear, lore-driven, manually created)
- Biomesoplenty with 18 curated fantasy biomes
- Economy system separate from faction leaderboards

---

## Notes for Next Session

- User is experienced with modded, vanilla, and plugin servers
- Self-hosting on 24 GB RAM, 12th/13th gen Intel (very capable)
- Wants to test first, configure later (domain/port forwarding TBD)
- Willing to swap WarForge Factions to Factions Proper/Territorial Dealings if needed
- Plans to run config files by Claude for customization before launch
- Lore is a high priority — world-building tied to quest structure

---

**Generated by Claude on 2026-04-02**
**For: The Hearthlands Minecraft Server Project**
