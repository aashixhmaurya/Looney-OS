# LooneyOS

LooneyOS is a browser-based operating system built entirely with HTML, CSS, and JavaScript. It’s not just a visual clone of a desktop — it actually behaves like one.

The idea was simple: push the browser to its limits and see how close it can get to a real system 😮

---

## What is LooneyOS?

Think of it as a mini OS living inside your browser.

You get a desktop, apps, windows, a taskbar, and even a terminal that can control parts of the system. Everything runs locally — no backend, no frameworks, just raw logic.

Lowkey, it’s more of a system simulation than just a UI 💀

---

## What You Can Do

Once it boots, you’re dropped into a working desktop where you can:

* Open apps in movable, resizable windows with proper focus + layering
* Switch between running apps using a synced taskbar
* Drag, reorder, or freely place desktop icons (and yes, they persist after refresh 😳)
* Use right-click context menus for quick system-level actions

It’s designed to feel natural — like you already know how to use it 😏

---

## Apps Inside

LooneyOS comes with built-in apps that actually make it feel alive:

* Terminal (commands like `open`, `close`, `whoami`, `status`)
* Files (simulated file system with persistence)
* Notes, Calendar, Settings
* Music player
* Small games like Snake and Avoid Blocks 🎮

The terminal is where things get interesting — it doesn’t just print text, it actually interacts with the system 😤

---

## How It Works

Behind the scenes, it’s not random:

* A central state controls apps, windows, and UI
* localStorage handles persistence (layout, apps, data)
* Apps are modular and rendered dynamically
* Everything runs on event-driven logic (drag, click, keyboard)

No libraries. No shortcuts. Built from scratch to actually understand how systems behave 😵

---

## Limitations

Since it’s browser-based:

* No real OS-level access
* File system is simulated
* Performance depends on the browser
* Some features (like Google login) need a local server

So yeah, it’s not a real OS — but it gets surprisingly close 😶‍🌫️

---

## Run It

Clone the project and run a local server:

```bash
npx live-server
```

Then open:

```
http://localhost:5500
```

Avoid opening with `file://` — some features won’t work 😭

---

## Why This Exists

This started with a simple question:

“How far can a browser go if you treat it like an operating system?”

This project is basically that answer 🤡

Still experimental, still evolving — but already way beyond a basic UI clone.

---

Built as a learning project, but with real system-level thinking 😏
