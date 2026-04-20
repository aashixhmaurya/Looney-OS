LooneyOS

LooneyOS is a browser-based mini operating system built using HTML, CSS, and JavaScript.
It recreates a desktop-like environment directly inside the browser, giving users an interactive and playful OS experience.

Instead of a normal website, LooneyOS feels like a personal computer where users can open apps, move windows, and interact with the system just like a real desktop.

Features
🖥️ Desktop Interface with icons and wallpaper
🪟 Draggable, resizable, minimizable windows
📂 File Manager system
📝 Notepad with writing support
🎵 Music Player
💻 Terminal (basic commands)
📅 Calendar
🧮 Calculator
🎨 Doodle Pad
🎮 Mini Games (Snake, Avoid Blocks)
⚙️ Settings (wallpaper, customization)
🖱️ Right-click context menu
🧭 Taskbar with active apps

User Experience

LooneyOS is designed with a strong focus on UI/UX and interactivity:

Smooth animations and transitions
Cartoon / sketch-style theme
Custom cursor and playful design
Real OS-like window behavior
Clean and minimal layout

The goal is to make the system feel fun, responsive, and engaging — not just functional.

Optimization

This project implements multiple optimization techniques to improve performance and user experience:

🔹 1. Caching (localStorage)

User preferences like wallpaper, window sizes, and icon positions are stored using browser localStorage.

Result:

Faster load time
Persistent user experience
🔹 2. Efficient State Handling

Only necessary data is updated and stored (e.g., avoiding duplicate icon entries and unnecessary updates).

Result:

Reduced unnecessary computations
Better performance
🔹 3. Lightweight Assets (SVG Icons)

All icons are implemented using inline SVG instead of image files.

Result:

Smaller asset size
Faster rendering
No additional network requests
🔹 4. CSS Optimization (Grid Layout)

Responsive layouts are handled using CSS Grid instead of heavy JavaScript calculations.

Result:

Better performance
Cleaner layout handling
🔹 5. Safe Data Handling

All stored data is validated before use to avoid crashes or corrupted state.

Results
Improved UI smoothness during interactions
Faster initial load experience
Reduced memory usage
Stable and crash-resistant behavior

Tech Stack
HTML
CSS
JavaScript (Vanilla JS)

Future Plans
Cloud sync (Google Drive integration)
Session restore (resume where you left off)
More apps and system features
Advanced window management
Mobile responsiveness