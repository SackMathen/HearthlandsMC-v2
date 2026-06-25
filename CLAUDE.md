# The Hearthlands — Project Context for Claude

This file gives Claude the foundational context needed to assist with The Hearthlands Minecraft server project. Read this before contributing to any aspect of the project — lore, plugins, server design, community content, or otherwise.

---

## What Is The Hearthlands?

The Hearthlands is a custom Minecraft survival server built as both a passion project and a growing community. It's a medieval fantasy world designed for a healthy mix of roleplay and casual players — people who want to inhabit a living world, build something meaningful, and find their own story within it.

This isn't a generic survival server. Every design decision — from the spawn experience to the faction system to the biome selection — is made in service of one goal: creating a world that feels real, mysterious, and worth exploring.

---

## Project Goals

- **Build a lasting community** around a shared world with real lore and identity
- **Balance accessibility with depth** — casual players can log in and have fun immediately; roleplay players can go deep into the lore, factions, and world history
- **Create an exploration-first experience** where the world rewards curiosity rather than quest markers
- **Run a clean, stable server** on the latest version of Minecraft using Paper plugins (not Forge mods)

---

## Technical Direction

- **Platform:** Latest stable version of Minecraft Java Edition
- **Server software:** Paper (plugin-based, not Forge/Fabric)
- **Current status:** 1.19.2 Forge test server (running) → Paper full build (planned migration)
- **Pivot to Paper:** FINAL — Forge modpack tested; converting to Paper plugins
- **Previous history:** Originally designed around a Forge 1.20.1 modpack; fully pivoting to Paper plugins — same gameplay pillars, different implementation
- **Core gameplay pillars to implement via plugins:**
  - Faction territory claiming and conquest
  - Lore-driven quests and NPC storytelling
  - Spell crafting / magic system
  - Medieval building tools and aesthetics
  - Player economy
  - Proximity voice chat

---

## The World

### Tone & Feel
Medieval fantasy. No modern tech, no sci-fi. The world should feel ancient, layered, and inhabited — like civilizations rose and fell here long before the player arrived.

### Spawn: Dawnmere
The central spawn town and safe haven for all new players. Dawnmere is situated in a vast plains biome, bathed in golden morning light with an ancient procedurally generated castle visible on the horizon. It is the narrative anchor — introducing players to the world's key factions, NPCs, and lore before they venture out on their own. PvP is disabled here; the land is protected by ancient magic. The **Pathfinders' Guild** is headquartered in Dawnmere at the Waymark Lodge, serving as the town's most trusted faction and primary information hub.

After leaving Dawnmere, the world opens up and players are on their own.

### Exploration Design
After spawn, discovery is player-driven. There are no waypoint markers or quest trackers pointing to major locations. Instead, the world uses **environmental signage and word-of-mouth** — a weathered sign in Dawnmere's tavern hinting at a hidden community deep in the forest, a carved stone on the road warning travelers away from a castle built on lava and blood, rumors from NPCs. Players find the world by exploring it.

### Key Locations (Canon)
- **Dawnmere** — The spawn town. Plains biome. Safe haven, crossroads of the realm, home of the Pathfinders' Guild. Coordinates: 1417, 67, -5495. Full lore in `Lore/Dawnmere.md`.
- **Cinderfall** — An ancient volcanic settlement carved into the basalt cliffs and obsidian flows of Mount Ignis. Stronghold of the Iron Crown. Once a place of great power; now a ruin full of secrets. The Council of Wardens governs daily life, but the Iron Crown controls military and trade. The tremors have already begun. Something stirs beneath the mountain. Coordinates: -199, 110, -3173.
- **Whisperwood** — Ancient forest biome. Home of the Deeproot Collective — nature guardians and druids who commune with the earth and protect the natural world. Coordinates: -1661, 71, -6051.
- **The Verdant Reach** — Deep forest biome. Domain of the Archivists of Starlight, scholars and knowledge keepers who preserve the world's secrets in a hidden archive called the Archive of Greens. An ancient, mysterious force called the Root stirs beneath the soil. Coordinates: 2149, 108, -4681.

### Factions (Canon)
Four established factions with distinct identities, histories, and agendas:
- **The Pathfinders' Guild** — Merchants, explorers, and traders. Headquartered in Dawnmere. Neutral mediators between all factions. Control the realm's information and trade networks.
- **The Iron Crown** — Military power and industrial force. Headquartered in Cinderfall (Ironhold Citadel). Control obsidian harvesting and forge production. Expanding their influence and preparing for something.
- **The Deeproot Collective** — Nature guardians and druids. Headquartered in Whisperwood. Commune with the earth, protect the natural world, and watch the Verdant Reach with growing concern.
- **The Archivists of Starlight** — Scholars and knowledge keepers. Headquartered in The Verdant Reach. Preserve and study the world's secrets. Maintain an uneasy alliance with the Greenwarden Council.

**Lore Faction Status:** FINALIZED FOR NOW — These four factions form the core world; may expand with additional lore factions in future expansions.

Player-created factions exist alongside these lore factions. Players may form their own factions, with a current server guideline of **4 player-created factions** (in addition to the 4 major lore factions). This guideline may be adjusted based on server population and engagement.

### Faction Territory System

The entire server experience is built around faction territory claiming and the competition between factions to expand their dominance. Territory is the primary measure of faction power.

**Starting Perimeters:**
Each of the four major factions begins with a square territory 200×200 blocks, centered on their headquarters coordinates, with the border sitting exactly 100 blocks out in every direction. The four corners of each faction's starting territory are marked with **beacons colored in that faction's primary color**.

| Faction | Center Coordinates | NW Corner | NE Corner | SW Corner | SE Corner |
|---|---|---|---|---|---|
| Pathfinders' Guild (Dawnmere) | 1417, 67, -5495 | 1317, -5595 | 1517, -5595 | 1317, -5395 | 1517, -5395 |
| Iron Crown (Cinderfall) | -199, 110, -3173 | -299, -3273 | -99, -3273 | -299, -3073 | -99, -3073 |
| Deeproot Collective (Whisperwood) | -1661, 71, -6051 | -1761, -6151 | -1561, -6151 | -1761, -5951 | -1561, -5951 |
| Archivists of Starlight (Verdant Reach) | 2149, 108, -4681 | 2049, -4781 | 2249, -4781 | 2049, -4581 | 2249, -4581 |

*(Y-coordinates for corner beacons match the faction's center Y. Corner coordinates are X, Z only.)*

Each faction has a **primary color** used for its corner beacons:

| Faction | Beacon Color |
|---|---|
| Pathfinders' Guild (Dawnmere) | Standard beacon (no stained glass) |
| Iron Crown (Cinderfall) | Red or Orange — to be decided in-game |
| Deeproot Collective (Whisperwood) | Light Grey |
| Archivists of Starlight (Verdant Reach) | Green |

---

## Lore Principles

- The world has a history that predates the player. Lore is discovered, not dumped.
- Cinderfall is the central mystery. Don't resolve it too early.
- NPCs should feel like inhabitants of the world, not quest dispensers.
- Signs, books, environmental details, and architecture tell story. Use them.
- The four factions have distinct voices — writing for them should reflect their identity.

---

## What Claude Should Know Before Helping

- All lore files are in the `/Lore` subfolder. Read them before writing any new lore or characters.
- The server description in `Server Description.md` reflects the Forge-era vision. The plugin pivot doesn't change the *vision* — just the implementation stack.
- When suggesting plugins, prioritize Paper-compatible, actively maintained options. Avoid plugins with known performance issues on large servers.
- The economy should be separate from faction power. Wealth and territory are distinct.
- The server is 100% EULA-compliant. No pay-to-win. Cosmetic store only.

### Mod-to-Plugin Conversion

A core ongoing task for this project is **converting the original Forge mod list into custom Paper plugins tailored for The Hearthlands**. When helping with this:

- The original mods are `.jar` files built for Forge. They are **not compatible** with Paper directly.
- The goal is not simply to find drop-in replacements. The process is:
  1. **Find** the closest existing Paper/Spigot plugin equivalent on Modrinth, SpigotMC, or Hangar
  2. **Immediately reverse engineer it** — analyze its architecture, features, and configuration to understand how it works
  3. **Rebuild or adapt it** as a custom plugin shaped specifically around The Hearthlands' lore, gameplay pillars, and server goals
- Every plugin produced should feel native to this server, not like a generic install. The lore, faction system, and world design should inform how mechanics are implemented.
- Avoid abandoned projects (last updated 2+ years ago) as reference material where possible.

**When a mod has no direct Paper equivalent — STOP and escalate:**
Do not silently substitute or guess. Alert the user clearly and ask these three questions before proceeding:
1. **Scope** — How important is this mod's functionality to the server? Is it core to the experience or a nice-to-have?
2. **Context** — What specific features of this mod are actually being used, and what would players notice if it were missing?
3. **How to proceed** — Should we find the closest approximation, build a custom solution, cut the feature entirely, or explore another approach?

Once the user has answered all three, recap their input back to them in plain language and wait for explicit confirmation before making any changes or recommendations.

**Original Forge mod categories and their Paper conversion targets:**

| Forge Mod | Category | Priority | Paper Plugin Goal |
|---|---|---|---|
| Conquest Craft | Faction territory claiming | Core | Factions / GriefPrevention / Towny |
| FTB Quests | Lore-driven quests | Core | BetonQuest / Quests |
| Custom NPCs | NPC storytelling | Core | Citizens / MythicMobs |
| Ars Nouveau | Spell crafting / magic | Core | MythicMobs / custom implementation |
| EssentialsX | Core server utilities | Core | EssentialsX (Paper-native) |
| Conquest Reforged | Medieval building blocks | High | No direct equivalent — use vanilla + resource pack |
| Spartanweaponry | Medieval weapons | High | MythicMobs / ItemsAdder |
| Immersive Armors | Visual armor variety | High | ItemsAdder / Oraxen |
| Biomesoplenty | Fantasy biome generation | High | TerraformGenerator / custom world gen |
| Jobs Reborn | Player economy jobs | High | Jobs Reborn (has Paper version) |
| Simple Voice Chat | Proximity voice | Medium | Simple Voice Chat (has Paper version) |

---

*The Hearthlands is waiting. What legend will you leave behind?*
