# 03 - Server Setup Guide
*Last updated: 2026-04-01*

## Quick Start: Forge 1.20.1 Local Test Server

You know how to set up servers, so this is just the specific steps for your modpack. Goal: spin up locally, test for crashes, move forward.

---

## Step 1: Download & Install Forge Server

1. Go to **forge.gemwire.net** (official Forge site)
2. Select version **1.20.1**
3. Download the **installer** (not the universal jar)
4. Create a new folder for your server (e.g., `Hearthlands-Server`)
5. Run the installer: `java -jar forge-1.20.1-installer.jar --installServer`
6. Wait for installation to complete
7. You'll get `forge-1.20.1-server.jar` in the folder

---

## Step 2: Create Launch Script

Create a file called `run.bat` (Windows) or `run.sh` (Mac/Linux) in your server folder:

**Windows (run.bat):**
```batch
@echo off
java -Xms4G -Xmx8G -XX:+UseG1GC -XX:MaxGCPauseMillis=200 -XX:+ParallelRefProcEnabled -jar forge-1.20.1-server.jar nogui
pause
```

**Mac/Linux (run.sh):**
```bash
#!/bin/bash
java -Xms4G -Xmx8G -XX:+UseG1GC -XX:MaxGCPauseMillis=200 -XX:+ParallelRefProcEnabled -jar forge-1.20.1-server.jar nogui
```

This allocates 4–8 GB RAM with G1GC garbage collection (good middle ground).

---

## Step 3: Accept EULA

1. Run the launch script once — it will create `eula.txt`
2. Edit `eula.txt` and change `eula=false` to `eula=true`
3. Save and close

---

## Step 4: Add Mods

1. Create a `mods` folder in your server directory if it doesn't exist
2. Download **1.20.1 Forge versions** of each mod:
   - Conquest Reforged
   - Macaw's Doors
   - Spartanweaponry
   - Immersive Armors
   - Ars Nouveau
   - JEI (Just Enough Items)
   - WAILA
   - Supplementaries

3. Drop all `.jar` files into the `mods` folder
4. **Check mod dependencies** — some mods require other mods:
   - Conquest Reforged may require Architecture API (check mod page)
   - Ars Nouveau may require Curios API
   - Look at each mod's CurseForge page under "Dependencies" to catch these

---

## Step 5: First Launch & Testing

1. Run your launch script
2. Wait for the server to fully start (watch for `Done! For help, type "help"`)
3. Watch the logs for errors:
   - **Red text = problem** (mod conflict, missing dependency)
   - **Yellow text = warning** (usually fine)
4. If crashes happen, note the error and Google the specific mod + error

**Common issues:**
- Missing dependency mod → download it, add to mods folder, restart
- Java version wrong → make sure you have Java 21+ installed
- RAM allocation too high → lower Xmx value in launch script

---

## Step 6: Test World & Mods

Once server is running:
1. Create a test account (or use your own launcher)
2. Connect to `localhost:25565`
3. Spawn in and verify:
   - Can you see Conquest Reforged blocks in creative?
   - Do Ars Nouveau spells appear?
   - Can you craft Spartanweaponry weapons?
   - Is JEI working (shows recipes)?

---

## Step 7: Add Economy Plugins (Optional for Test)

Once mods are stable, add these economy plugins to test the full ecosystem:

1. Create a `plugins` folder in your server directory if it doesn't exist
2. Download 1.20.1 compatible versions:
   - **Vault** (currency API foundation)
   - **EssentialsX** (money commands, /pay, /balance)
   - **Jobs Reborn** (earn money by doing activities)
3. Drop `.jar` files into `plugins` folder
4. Restart server — plugins will generate config files
5. Test with `/balance` command — should work if Vault/EssentialsX loaded

---

## Step 8: Shutdown & Next Phase

1. Type `stop` in the server console to shut down cleanly
2. Once offline, you've completed the test phase

---

## What NOT to do yet:
- ❌ Don't set up port forwarding
- ❌ Don't configure WarForge Factions yet (just test it loads)
- ❌ Don't create FTB Quests yet
- ❌ Don't worry about DDoS protection

Just verify the modpack runs stable. If it crashes within 5 minutes of startup, there's a mod conflict. If it runs clean for 10+ minutes, you're good to move forward.

---

## Troubleshooting Checklist

| Issue | Solution |
|-------|----------|
| Server won't start | Check Java version (need 21+), read error log, check mod dependencies |
| Server crashes on load | Comment out half the mods, restart. If it works, add mods back one by one to find the culprit |
| Mods not showing in-game | Make sure `.jar` files are in `mods` folder, not a subfolder |
| Out of memory error | Increase Xmx value in launch script (try 10G) |
| Mod items missing | Missing dependency — check CurseForge for what other mods it needs |

---

## Next Steps (after testing succeeds)
1. Add plugins to the server (Towny, Vault, EssentialsX, Jobs, Dynmap)
2. Configure server.properties for your world
3. Tune Towny economy settings
4. Test plugin + mod interactions
