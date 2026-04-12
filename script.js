const icons = {
    files: `<svg viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`,
    terminal: `<svg viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
    music: `<svg viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>`,
    notepad: `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
    calendar: `<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
    settings: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`
};

const state = {
    apps: {
        files: { id: 'files', title: 'My Files', icon: icons.files, color: 'var(--yellow)' },
        terminal: { id: 'terminal', title: 'Terminal', icon: icons.terminal, color: 'var(--black)' },
        music: { id: 'music', title: 'Music Player', icon: icons.music, color: 'var(--orange)' },
        notepad: { id: 'notepad', title: 'Notepad', icon: icons.notepad, color: 'var(--blue)' },
        calendar: { id: 'calendar', title: 'Calendar', icon: icons.calendar, color: 'var(--red)' },
        settings: { id: 'settings', title: 'Settings', icon: icons.settings, color: 'var(--grey)' }
    },
    openWindows: {},
    zIndexCounter: 10,
    activeAppId: null
};

const elements = {
    bootScreen: document.getElementById('boot-screen'),
    desktop: document.getElementById('desktop'),
    desktopIcons: document.getElementById('desktop-icons'),
    windowContainer: document.getElementById('window-container'),
    taskbar: document.getElementById('taskbar'),
    taskbarApps: document.getElementById('taskbar-apps'),
    clock: document.getElementById('clock')
};

async function runBoot() {
    await sleep(2000);
    elements.bootScreen.style.opacity = "0";
    setTimeout(() => {
        elements.bootScreen.style.display = 'none';
        elements.desktop.style.display = 'block';
        elements.taskbar.style.display = 'flex';
        initOS();
    }, 800);
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

function initOS() {
    renderDesktopIcons();
    startClock();
    elements.desktop.addEventListener('contextmenu', (e) => e.preventDefault());
    document.getElementById('start-btn').addEventListener('click', () => {
        let anyOpen = false;
        Object.values(state.openWindows).forEach(winData => {
            if (!winData.minimized) anyOpen = true;
        });
        Object.keys(state.openWindows).forEach(appId => {
            if (anyOpen) {
                minimizeApp(appId);
            } else {
                const winData = state.openWindows[appId];
                if (winData.lastTop) {
                    winData.element.style.top = winData.lastTop;
                    winData.element.style.left = winData.lastLeft;
                }
                winData.element.classList.remove('minimized');
                winData.minimized = false;
                focusWindow(appId);
            }
        });
    });
}

function renderDesktopIcons() {
    elements.desktopIcons.innerHTML = '';
    Object.values(state.apps).forEach(app => {
        const icon = document.createElement('div');
        icon.className = 'desktop-icon';
        icon.innerHTML = `<div class="emoji">${app.icon}</div><span>${app.title}</span>`;
        icon.addEventListener('click', () => openApp(app.id));
        elements.desktopIcons.appendChild(icon);
    });
}

function startClock() {
    setInterval(() => {
        const now = new Date();
        elements.clock.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }, 1000);
}

function openApp(appId) {
    const app = state.apps[appId];
    if (state.openWindows[appId]) {
        const winData = state.openWindows[appId];
        if (winData.lastTop) {
            winData.element.style.top = winData.lastTop;
            winData.element.style.left = winData.lastLeft;
        }
        winData.element.classList.remove('minimized');
        winData.minimized = false;
        focusWindow(appId);
        updateTaskbar();
        return;
    }
    const win = document.createElement('div');
    win.className = 'window';
    const offset = Object.keys(state.openWindows).length * 30;
    const initialTop = `${50 + offset}px`;
    const initialLeft = `${100 + offset}px`;
    win.style.top = initialTop;
    win.style.left = initialLeft;
    win.innerHTML = `
        <div class="window-header" style="background: ${app.color};">
            <div class="window-title">${app.icon} ${app.title}</div>
        </div>
        <div class="window-content content-hook"></div>
    `;
    elements.windowContainer.appendChild(win);
    state.openWindows[appId] = {
        element: win,
        maximized: false,
        minimized: false,
        lastTop: initialTop,
        lastLeft: initialLeft
    };
    populateAppContent(appId, win.querySelector(`.content-hook`));
    win.addEventListener('mousedown', () => focusWindow(appId));
    win.addEventListener('touchstart', () => focusWindow(appId), { passive: true });
    makeDraggable(win, win.querySelector('.window-header'), appId);
    focusWindow(appId);
    updateTaskbar();
}

function closeApp(appId) {
    const winData = state.openWindows[appId];
    if (!winData) return;
    winData.element.classList.add('closing');
    if (appId === 'music') stopMusic();
    delete state.openWindows[appId];
    if (state.activeAppId === appId) state.activeAppId = null;
    updateTaskbar();
    setTimeout(() => winData.element.remove(), 300);
}

function maximizeApp(appId) {
    const winData = state.openWindows[appId];
    if (!winData) return;
    if (winData.maximized) {
        winData.element.classList.remove('maximized');
        winData.maximized = false;
    } else {
        winData.element.classList.add('maximized');
        winData.maximized = true;
    }
    focusWindow(appId);
}

function minimizeApp(appId) {
    const winData = state.openWindows[appId];
    if (!winData) return;
    winData.element.classList.add('minimized');
    winData.minimized = true;
    updateTaskbar();
}

function focusWindow(appId) {
    state.zIndexCounter++;
    const winData = state.openWindows[appId];
    if (!winData) return;
    winData.element.style.zIndex = state.zIndexCounter;
    state.activeAppId = appId;
    updateTaskbar();
}

function updateTaskbar() {
    elements.taskbarApps.innerHTML = '';
    Object.keys(state.openWindows).forEach(appId => {
        const appData = state.apps[appId];
        const winData = state.openWindows[appId];
        const taskItem = document.createElement('div');
        taskItem.className = `taskbar-item ${state.activeAppId === appId && !winData.minimized ? 'active' : ''}`;
        taskItem.innerHTML = `${appData.icon} ${appData.title}`;
        taskItem.addEventListener('click', () => {
            if (state.activeAppId === appId && !winData.minimized) {
                minimizeApp(appId);
            } else {
                if (winData.lastTop) {
                    winData.element.style.top = winData.lastTop;
                    winData.element.style.left = winData.lastLeft;
                }
                winData.element.classList.remove('minimized');
                winData.minimized = false;
                focusWindow(appId);
            }
        });
        elements.taskbarApps.appendChild(taskItem);
    });
}

function makeDraggable(element, handle, appId) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let dragAction = null;
    handle.onmousedown = dragStart;
    handle.ontouchstart = dragStart;
    function dragStart(e) {
        e.preventDefault();
        if (element.classList.contains('maximized')) {
            element.classList.remove('maximized');
            state.openWindows[appId].maximized = false;
            element.style.width = '450px';
            element.style.height = '350px';
            let clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
            let newLeft = clientX - 225;
            if (newLeft < 0) newLeft = 0;
            if (newLeft > window.innerWidth - 450) newLeft = window.innerWidth - 450;
            element.style.left = newLeft + 'px';
            element.style.top = '10px';
            state.openWindows[appId].lastTop = '10px';
            state.openWindows[appId].lastLeft = newLeft + 'px';
        } else {
            state.openWindows[appId].lastTop = element.style.top;
            state.openWindows[appId].lastLeft = element.style.left;
        }
        if (e.type === 'touchstart') {
            pos3 = e.touches[0].clientX; pos4 = e.touches[0].clientY;
        } else {
            pos3 = e.clientX; pos4 = e.clientY;
        }
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        document.ontouchend = closeDragElement;
        document.ontouchmove = elementDrag;
        window.addEventListener('blur', closeDragElement);
        element.style.transition = 'none';
    }
    function elementDrag(e) {
        e.preventDefault();
        let clientX, clientY;
        if (e.type === 'touchmove') {
            clientX = e.touches[0].clientX; clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX; clientY = e.clientY;
        }
        pos1 = pos3 - clientX; pos2 = pos4 - clientY;
        pos3 = clientX; pos4 = clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
        const indMax = document.getElementById('indicator-max');
        const indClose = document.getElementById('indicator-close');
        const taskbar = document.getElementById('taskbar');
        dragAction = null;
        indMax.classList.remove('active');
        indClose.classList.remove('active');
        taskbar.classList.remove('drag-over');
        if (clientY < 150 && clientX > window.innerWidth - 150) {
            dragAction = 'close'; indClose.classList.add('active');
        } else if (clientY < 50) {
            dragAction = 'max'; indMax.classList.add('active');
        } else if (clientY > window.innerHeight - 100) {
            dragAction = 'min'; taskbar.classList.add('drag-over');
        }
    }
    function closeDragElement() {
        document.onmouseup = null; document.onmousemove = null;
        document.ontouchend = null; document.ontouchmove = null;
        window.removeEventListener('blur', closeDragElement);
        element.style.transition = '';
        document.getElementById('indicator-max').classList.remove('active');
        document.getElementById('indicator-close').classList.remove('active');
        document.getElementById('taskbar').classList.remove('drag-over');
        if (dragAction === 'close') closeApp(appId);
        else if (dragAction === 'max') maximizeApp(appId);
        else if (dragAction === 'min') {
            element.style.top = state.openWindows[appId].lastTop || '50px';
            element.style.left = state.openWindows[appId].lastLeft || '100px';
            minimizeApp(appId);
        }
        dragAction = null;
    }
}

function populateAppContent(appId, container) {
    switch (appId) {
        case 'notepad': renderNotepad(container); break;
        case 'terminal': renderTerminal(container); break;
        case 'files': renderFiles(container); break;
        case 'calendar': renderCalendar(container); break;
        case 'settings': renderSettings(container); break;
        case 'music': renderMusic(container); break;
    }
}

function renderNotepad(container) {
    container.className = 'window-content app-notepad';
    let savedText = 'Start typing your cartoon script here...';
    try { savedText = localStorage.getItem('looney_notes') || savedText; } catch (e) { }
    container.innerHTML = `<textarea class="np-textarea">${savedText}</textarea><div class="toolbar"><button class="looney-btn np-save">💾 Save Notes</button></div>`;
    container.querySelector('.np-save').addEventListener('click', () => {
        const text = container.querySelector('.np-textarea').value;
        try { localStorage.setItem('looney_notes', text); } catch (e) { }
        const btn = container.querySelector('.np-save');
        btn.innerHTML = "✅ Saved!";
        setTimeout(() => btn.innerHTML = "💾 Save Notes", 2000);
    });
}

function renderFiles(container) {
    container.className = 'window-content app-files';
    const fileIcons = {
        doc: `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
        img: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`,
        blueprint: `<svg viewBox="0 0 24 24"><polygon points="12 2 2 12 12 22 22 12 12 2"></polygon></svg>`,
        secret: `<svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
        joke: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`
    };
    [{ name: 'Documents', icon: fileIcons.doc }, { name: 'Images', icon: fileIcons.img }, { name: 'ACME Blueprints', icon: fileIcons.blueprint }, { name: 'Top Secret', icon: fileIcons.secret }, { name: 'Jokes', icon: fileIcons.joke }].forEach(folder => {
        const fDiv = document.createElement('div');
        fDiv.className = 'folder';
        fDiv.innerHTML = `<div class="icon">${folder.icon}</div><span>${folder.name}</span>`;
        container.appendChild(fDiv);
    });
}

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function renderCalendar(container) {
    container.className = 'window-content app-calendar';
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const updateCalendar = () => {
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const today = new Date();
        let html = `<div class="cal-header"><button class="looney-btn cal-prev">◀</button><span>${monthNames[currentMonth]} ${currentYear}</span><button class="looney-btn cal-next">▶</button></div><div class="cal-grid">`;
        ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].forEach(d => html += `<div class="cal-day-name">${d}</div>`);
        for (let i = 0; i < firstDay; i++) html += `<div class="cal-day empty"></div>`;
        for (let i = 1; i <= daysInMonth; i++) {
            const isToday = i === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
            html += `<div class="cal-day ${isToday ? 'today' : ''}">${i}</div>`;
        }
        container.innerHTML = html + `</div>`;
        container.querySelector('.cal-prev').addEventListener('click', () => { currentMonth--; if (currentMonth < 0) { currentMonth = 11; currentYear--; } updateCalendar(); });
        container.querySelector('.cal-next').addEventListener('click', () => { currentMonth++; if (currentMonth > 11) { currentMonth = 0; currentYear++; } updateCalendar(); });
    };
    updateCalendar();
}

function renderTerminal(container) {
    container.className = 'window-content app-terminal';
    container.innerHTML = `<div class="output term-output"><div>Welcome to Looney Terminal v1.0</div><div>Type 'help' for a list of commands.</div></div><div class="input-line"><span class="prompt">guest@looneyos:~$</span><input type="text" class="term-input" autocomplete="off" spellcheck="false" autofocus></div>`;
    const input = container.querySelector('.term-input');
    const output = container.querySelector('.term-output');
    container.addEventListener('click', () => input.focus());
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const cmd = input.value.trim().toLowerCase();
            output.innerHTML += `<div><span style="color:var(--yellow)">guest@looneyos:~$</span> ${cmd}</div>`;
            if (cmd === 'help') output.innerHTML += `<div>Available commands: help, clear, date, open [app], bounce</div>`;
            else if (cmd === 'clear') output.innerHTML = '';
            else if (cmd === 'date') output.innerHTML += `<div>${new Date().toString()}</div>`;
            else if (cmd.startsWith('open ')) {
                const appName = cmd.split(' ')[1];
                if (state.apps[appName]) openApp(appName);
                else output.innerHTML += `<div>App '${appName}' not found.</div>`;
            } else if (cmd === 'bounce') {
                const win = state.openWindows['terminal']?.element;
                if (win) {
                    win.style.animation = 'windowPop 0.5s infinite alternate cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                    setTimeout(() => win.style.animation = 'none', 3000);
                }
            } else if (cmd !== '') output.innerHTML += `<div>Command not found: ${cmd}</div>`;
            input.value = '';
            container.scrollTop = container.scrollHeight;
        }
    });
}

function renderSettings(container) {
    container.className = 'window-content app-settings';
    container.innerHTML = `<div class="setting-group"><h3>🎨 Desktop Wallpaper</h3><div class="color-swatches"><div class="swatch" data-color="var(--blue)"></div><div class="swatch" data-color="var(--green)"></div><div class="swatch" data-color="var(--purple)"></div><div class="swatch" data-color="var(--red)"></div></div><div class="drop-zone" id="wp-drop-zone">📁 Drag & Drop image here<input type="file" id="wp-file-input" accept="image/*"></div></div>`;
    container.querySelectorAll('.swatch').forEach(sw => {
        sw.addEventListener('click', (e) => {
            const color = e.target.getAttribute('data-color');
            document.documentElement.style.setProperty('--wallpaper', `repeating-radial-gradient(circle, ${color}, ${color} 40px, rgba(0,0,0,0.1) 40px, rgba(0,0,0,0.1) 80px)`);
        });
    });
    const dropZone = container.querySelector('#wp-drop-zone');
    const fileInput = container.querySelector('#wp-file-input');
    dropZone.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => { if (e.target.files.length > 0) setWallpaperFromFile(e.target.files[0]); });
    dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('dragover'); });
    dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
    dropZone.addEventListener('drop', (e) => { e.preventDefault(); e.stopPropagation(); dropZone.classList.remove('dragover'); if (e.dataTransfer.files.length > 0) setWallpaperFromFile(e.dataTransfer.files[0]); });
}

let isMusicPlaying = false;
function renderMusic(container) {
    container.className = 'window-content app-music';
    container.innerHTML = `<audio class="looney-audio" src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Kevin_MacLeod_-_The_Entertainer.ogg" loop></audio><div class="record-player"></div><div class="track-info">Playing: The Entertainer.ogg</div><div class="music-controls"><button class="music-btn m-prev">⏮</button><button class="music-btn m-play">▶</button><button class="music-btn m-next">⏭</button></div>`;
    const audioEl = container.querySelector('.looney-audio');
    const playBtn = container.querySelector('.m-play');
    const record = container.querySelector('.record-player');
    playBtn.addEventListener('click', () => {
        if (isMusicPlaying) {
            audioEl.pause(); playBtn.textContent = '▶'; record.classList.remove('spin');
        } else {
            audioEl.play().catch(e => console.log(e)); playBtn.textContent = '⏸'; record.classList.add('spin');
        }
        isMusicPlaying = !isMusicPlaying;
    });
}

function stopMusic() {
    document.querySelectorAll('.looney-audio').forEach(audio => audio.pause());
    isMusicPlaying = false;
}

function setWallpaperFromFile(file) {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width; canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imgData.data;
            for (let i = 0; i < data.length; i += 4) {
                let gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
                gray = gray < 128 ? Math.max(0, gray - 20) : Math.min(255, gray + 20);
                data[i] = data[i + 1] = data[i + 2] = gray;
            }
            ctx.putImageData(imgData, 0, 0);
            document.documentElement.style.setProperty('--wallpaper', `url(${canvas.toDataURL('image/jpeg', 0.9)})`);
            const desk = document.getElementById('desktop');
            desk.style.backgroundSize = 'cover'; desk.style.backgroundPosition = 'center';
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

const globalOverlay = document.getElementById('global-drop-overlay');
window.addEventListener('dragenter', (e) => { if (e.dataTransfer.types?.includes('Files')) { e.preventDefault(); globalOverlay.classList.add('active'); } });
globalOverlay.addEventListener('dragover', (e) => { e.preventDefault(); e.stopPropagation(); });
globalOverlay.addEventListener('dragleave', (e) => { e.preventDefault(); e.stopPropagation(); globalOverlay.classList.remove('active'); });
globalOverlay.addEventListener('drop', (e) => { e.preventDefault(); e.stopPropagation(); globalOverlay.classList.remove('active'); if (e.dataTransfer.files?.length > 0) setWallpaperFromFile(e.dataTransfer.files[0]); });

window.onload = () => runBoot();