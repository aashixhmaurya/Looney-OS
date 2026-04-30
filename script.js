const icons = {
    files: `<svg viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`,
    terminal: `<svg viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
    music: `<svg viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>`,
    notepad: `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
    calendar: `<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
    settings: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
    calc: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="8" x2="12" y2="16"></line></svg>`,
    doodle: `<svg viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>`,
    games: `<svg viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" stroke-width="2"></path><rect x="8" y="9" width="8" height="6" rx="2" fill="none" stroke="currentColor" stroke-width="2"></rect><circle cx="10.5" cy="12" r="0.5" fill="currentColor"></circle><circle cx="13.5" cy="12" r="0.5" fill="currentColor"></circle></svg>`,
    game: `<svg viewBox="0 0 24 24"><rect x="9" y="16" width="6" height="6" rx="1"></rect><circle cx="11" cy="18" r="0.5" fill="currentColor" stroke="none"></circle><circle cx="13" cy="18" r="0.5" fill="currentColor" stroke="none"></circle><rect x="3" y="3" width="6" height="6" rx="1"></rect><line x1="3" y1="3" x2="9" y2="9"></line><line x1="9" y1="3" x2="3" y2="9"></line><rect x="14" y="7" width="6" height="6" rx="1"></rect><line x1="14" y1="7" x2="20" y2="13"></line><line x1="20" y1="7" x2="14" y2="13"></line></svg>`,
    snake: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16h5v-6h6v3h5"></path><circle cx="20" cy="13" r="1.5" fill="currentColor"></circle><path d="M19 13h1"></path></svg>`,
    browser: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"></circle><ellipse cx="12" cy="12" rx="4" ry="10" fill="none" stroke="currentColor" stroke-width="2"></ellipse><line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="2"></line></svg>`
};

const state = {
    apps: {
        files: { id: 'files', title: 'My Files', icon: icons.files, color: 'var(--yellow)' },
        doodle: { id: 'doodle', title: 'Doodle Pad', icon: icons.doodle, color: 'var(--purple)' },
        calc: { id: 'calc', title: 'Calculator', icon: icons.calc, color: 'var(--green)' },
        browser: { id: 'browser', title: 'Browser', icon: icons.browser, color: 'var(--black)' },
        terminal: { id: 'terminal', title: 'Terminal', icon: icons.terminal, color: 'var(--black)' },
        music: { id: 'music', title: 'Music Player', icon: icons.music, color: 'var(--orange)' },
        notepad: { id: 'notepad', title: 'Notes', icon: icons.notepad, color: 'var(--blue)' },
        calendar: { id: 'calendar', title: 'Calendar', icon: icons.calendar, color: 'var(--red)' },
        settings: { id: 'settings', title: 'Settings', icon: icons.settings, color: 'var(--grey)' },
        games: { id: 'games', title: 'Games', icon: icons.games, color: 'var(--black)' },
        game: { id: 'game', title: 'Avoid Blocks', icon: icons.game, color: 'var(--black)' },
        snake: { id: 'snake', title: 'Snake Classic', icon: icons.snake, color: 'var(--black)' }
    },
    deletedApps: {},
    openWindows: {},
    zIndexCounter: 10,
    activeAppId: null,
    appHistory: [],
    bootTime: Date.now(),
    terminalHistory: [],
    currentTrack: null,
    currentBlobUrls: []
};

let saveTimeout;

function saveSystem() {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
        localStorage.setItem("looney_state", JSON.stringify({
            openApps: Object.keys(state.openWindows)
        }));
    }, 500);
}

let windowSizes = {};
try {
    const savedSizes = localStorage.getItem('looney_window_sizes');
    if (savedSizes && savedSizes !== "undefined") windowSizes = JSON.parse(savedSizes) || {};
} catch (e) {}

let savedIconPositions = {};
try {
    const savedIcons = localStorage.getItem('looney_icon_positions');
    if (savedIcons && savedIcons !== "undefined") savedIconPositions = JSON.parse(savedIcons) || {};
} catch (e) {}

try {
    const savedWP = localStorage.getItem('looney_wallpaper') || localStorage.getItem("wallpaper");
    if (savedWP) document.documentElement.style.setProperty('--wallpaper', `url(${savedWP})`);
} catch (e) {}

function applyWallpaperFromFile(file) {
    if (!file || !file.type.startsWith("image/")) return;

    const reader = new FileReader();

    reader.onload = function(event) {
        const dataUrl = event.target.result;
        document.documentElement.style.setProperty('--wallpaper', `url(${dataUrl})`);
        localStorage.setItem("looney_wallpaper", dataUrl);
        localStorage.setItem("wallpaper", dataUrl);
        console.log("Wallpaper Applied ✅");
    };

    reader.readAsDataURL(file);
}

document.addEventListener("dragover", (e) => {
    if (e.dataTransfer && Array.from(e.dataTransfer.types || []).includes("Files")) {
        e.preventDefault();
    }
}, true);

document.addEventListener("drop", (e) => {
    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        e.preventDefault();
    }
}, true);

let iconOrder = [];
try {
    const savedOrder = localStorage.getItem('looney_icon_order');
    if (savedOrder && savedOrder !== "undefined") {
        iconOrder = JSON.parse(savedOrder);
        let modified = false;
        if (iconOrder.includes('game') || iconOrder.includes('snake')) {
            iconOrder = iconOrder.filter(id => id !== 'game' && id !== 'snake');
            if (!iconOrder.includes('games')) iconOrder.push('games');
            modified = true;
        }
        if (modified) localStorage.setItem('looney_icon_order', JSON.stringify(iconOrder));
    }
} catch (e) {}

let orderChanged = false;
Object.keys(state.apps).forEach(appId => {
    if (!iconOrder.includes(appId) && appId !== 'game' && appId !== 'snake') {
        iconOrder.push(appId);
        orderChanged = true;
    }
});

if (orderChanged) {
    try { localStorage.setItem('looney_icon_order', JSON.stringify(iconOrder)); } catch (e) {}
}

const elements = {
    desktop: document.getElementById('desktop'),
    desktopIcons: document.getElementById('desktop-icons'),
    windowContainer: document.getElementById('window-container'),
    taskbar: document.getElementById('taskbar'),
    taskbarApps: document.getElementById('taskbar-apps'),
    clock: document.getElementById('clock')
};

async function runBoot() {
    await sleep(2000);
    if (document.getElementById('boot-screen')) {
        document.getElementById('boot-screen').style.opacity = "0";
        setTimeout(() => {
            document.getElementById('boot-screen').style.display = 'none';
            elements.desktop.style.display = 'block';
            elements.taskbar.style.display = 'flex';
            initOS();
        }, 800);
    } else {
        elements.desktop.style.display = 'block';
        elements.taskbar.style.display = 'flex';
        initOS();
    }
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

function initOS() {
    if (window.__osStarted) return;
    window.__osStarted = true;

    renderDesktopIcons();
    startClock();

    const ctxMenu = document.getElementById('context-menu');

    document.addEventListener('click', (e) => {
        if (ctxMenu && !e.target.closest('#context-menu')) {
            ctxMenu.style.display = 'none';
        }
    });

    elements.desktop.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        if (ctxMenu && (e.target === elements.desktop || e.target === elements.desktopIcons)) {
            ctxMenu.style.display = 'flex';
            let x = e.clientX;
            let y = e.clientY;
            if (x + ctxMenu.offsetWidth > window.innerWidth) x -= ctxMenu.offsetWidth;
            if (y + ctxMenu.offsetHeight > window.innerHeight) y -= ctxMenu.offsetHeight;
            ctxMenu.style.left = `${x}px`;
            ctxMenu.style.top = `${y}px`;
        }
    });

    const ctxRefresh = document.getElementById('ctx-refresh');
    if (ctxRefresh) {
        ctxRefresh.addEventListener('click', () => {
            elements.desktop.style.opacity = '0';
            setTimeout(() => elements.desktop.style.opacity = '1', 200);
        });
    }

    const ctxNote = document.getElementById('ctx-note');
    if (ctxNote) {
        ctxNote.addEventListener('click', () => {
            openApp('notepad');
        });
    }

    const ctxSettings = document.getElementById('ctx-settings');
    if (ctxSettings) {
        ctxSettings.addEventListener('click', () => {
            openApp('settings');
        });
    }

    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
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

    let data;
    try {
        data = JSON.parse(localStorage.getItem("looney_state")) || {};
    } catch (e) {
        data = {};
    }

    if (data && data.openApps) {
        data.openApps.forEach(appId => {
            setTimeout(() => openApp(appId), 200);
        });
    }
}

function renderDesktopIcons() {
    elements.desktopIcons.innerHTML = '';
    iconOrder.forEach(appId => {
        if (!state.apps[appId] || appId === 'game' || appId === 'snake') return;
        const app = state.apps[appId];

        const icon = document.createElement('div');
        icon.className = 'desktop-icon';
        icon.setAttribute('data-appid', app.id);
        icon.innerHTML = `
            <div class="emoji">${app.icon}</div>
            <span>${app.title}</span>
        `;

        if (savedIconPositions[app.id]) {
            icon.style.position = 'absolute';
            icon.style.left = savedIconPositions[app.id].left;
            icon.style.top = savedIconPositions[app.id].top;
            icon.style.width = '100px';
        }

        makeIconDraggable(icon, app.id);
        elements.desktopIcons.appendChild(icon);
    });
}

function saveIconOrder() {
    const icons = document.querySelectorAll('.desktop-icon:not(.placeholder)');
    const order = Array.from(icons).map(i => i.dataset.appid || i.getAttribute('data-appid'));
    iconOrder = order;
    try {
        localStorage.setItem('looney_icon_order', JSON.stringify(order));
    } catch (e) {}
}

let clockInterval;

function startClock() {
    if (clockInterval) clearInterval(clockInterval);

    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

    clockInterval = setInterval(() => {
        const now = new Date();
        try {
            elements.clock.textContent = new Intl.DateTimeFormat('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                timeZone: tz
            }).format(now);
        } catch (e) {
            elements.clock.textContent = now.toLocaleTimeString();
        }
    }, 1000);
}

function makeIconDraggable(iconElement, appId) {
    let isDragging = false;
    let startX, startY, initialMouseX, initialMouseY;
    let placeholder = null;
    let droppedOnGrid = false;

    function handleDown(e) {
        if (e.type === 'mousedown' && e.button !== 0) return;

        if (e.type === 'touchstart') {
            initialMouseX = e.touches[0].clientX;
            initialMouseY = e.touches[0].clientY;
        } else {
            initialMouseX = e.clientX;
            initialMouseY = e.clientY;
        }
        isDragging = false;
        iconElement.style.transition = 'none';

        // Disable pointer events on all iframes so mouse doesn't get lost
        document.querySelectorAll('iframe').forEach(ifr => ifr.style.pointerEvents = 'none');

        document.addEventListener('mousemove', handleMove, { passive: false });
        document.addEventListener('touchmove', handleMove, { passive: false });
        document.addEventListener('mouseup', handleUp);
        document.addEventListener('touchend', handleUp);
    }

    function handleMove(e) {
        let currentX, currentY;
        if (e.type === 'touchmove') {
            currentX = e.touches[0].clientX;
            currentY = e.touches[0].clientY;
        } else {
            currentX = e.clientX;
            currentY = e.clientY;
        }

        if (!isDragging && (Math.abs(currentX - initialMouseX) > 5 || Math.abs(currentY - initialMouseY) > 5)) {
            isDragging = true;
            droppedOnGrid = false;

            const rect = iconElement.getBoundingClientRect();

            if (iconElement.style.position !== 'absolute') {
                placeholder = document.createElement('div');
                placeholder.className = 'desktop-icon placeholder';
                placeholder.style.width = rect.width + 'px';
                placeholder.style.height = rect.height + 'px';
                placeholder.style.opacity = '0';
                iconElement.parentNode.insertBefore(placeholder, iconElement);
            }

            iconElement.style.position = 'absolute';
            iconElement.style.zIndex = '1000';
            iconElement.style.pointerEvents = 'none';
            iconElement.style.width = '100px';
            iconElement.style.left = rect.left + 'px';
            iconElement.style.top = rect.top + 'px';
            iconElement.style.transition = 'none';
            iconElement.style.transform = 'scale(1.05)';

            startX = currentX - rect.left;
            startY = currentY - rect.top;
        }

        if (isDragging) {
            e.preventDefault();

            let newLeft = currentX - startX;
            let newTop = currentY - startY;
            iconElement.style.left = newLeft + 'px';
            iconElement.style.top = newTop + 'px';

            let el = document.elementFromPoint(currentX, currentY);
            if (el) {
                let target = el.closest('.desktop-icon:not(.placeholder)');
                if (target && target !== iconElement && target.style.position !== 'absolute') {
                    droppedOnGrid = true;
                    if (!placeholder) {
                        placeholder = document.createElement('div');
                        placeholder.className = 'desktop-icon placeholder';
                        placeholder.style.width = '100px';
                        placeholder.style.height = '120px';
                        placeholder.style.opacity = '0';
                    }
                    const targetRect = target.getBoundingClientRect();
                    const targetCenter = targetRect.left + targetRect.width / 2;
                    if (currentX < targetCenter) {
                        target.parentNode.insertBefore(placeholder, target);
                    } else {
                        target.parentNode.insertBefore(placeholder, target.nextSibling);
                    }
                } else if (el.id === 'desktop' || el.id === 'desktop-icons' || (target && target.style.position === 'absolute')) {
                    droppedOnGrid = false;
                    if (placeholder && placeholder.parentNode) {
                        placeholder.remove();
                    }
                }
            }
        }
    }

    function handleUp(e) {
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('touchmove', handleMove);
        document.removeEventListener('mouseup', handleUp);
        document.removeEventListener('touchend', handleUp);

        // Re-enable pointer events on all iframes
        document.querySelectorAll('iframe').forEach(ifr => ifr.style.pointerEvents = '');

        if (isDragging) {
            iconElement.style.zIndex = '1';
            iconElement.style.pointerEvents = '';
            iconElement.style.transition = 'transform 0.2s, box-shadow 0.2s';
            iconElement.style.transform = '';

            if (droppedOnGrid && placeholder && placeholder.parentNode) {
                iconElement.style.position = '';
                iconElement.style.width = '';
                iconElement.style.height = '';
                iconElement.style.left = '';
                iconElement.style.top = '';

                placeholder.parentNode.insertBefore(iconElement, placeholder);
                placeholder.remove();
                delete savedIconPositions[appId];
            } else {
                if (placeholder) placeholder.remove();

                iconElement.style.position = 'absolute';
                iconElement.style.width = '100px';

                let maxLeft = Math.max(0, window.innerWidth - iconElement.offsetWidth);
                let maxTop = Math.max(0, window.innerHeight - iconElement.offsetHeight - 60);
                let newL = parseFloat(iconElement.style.left) || 0;
                let newT = parseFloat(iconElement.style.top) || 0;

                if (newL < 0) newL = 0;
                if (newL > maxLeft) newL = maxLeft;
                if (newT < 0) newT = 0;
                if (newT > maxTop) newT = maxTop;

                iconElement.style.left = newL + 'px';
                iconElement.style.top = newT + 'px';

                let isOverlapping = false;
                const myRect = iconElement.getBoundingClientRect();
                document.querySelectorAll('.desktop-icon').forEach(otherIcon => {
                    if (otherIcon !== iconElement && !otherIcon.classList.contains('placeholder')) {
                        const otherRect = otherIcon.getBoundingClientRect();
                        if (myRect.left < otherRect.right - 10 &&
                            myRect.right > otherRect.left + 10 &&
                            myRect.top < otherRect.bottom - 10 &&
                            myRect.bottom > otherRect.top + 10) {
                            isOverlapping = true;
                        }
                    }
                });

                if (isOverlapping) {
                    iconElement.style.position = '';
                    iconElement.style.width = '';
                    iconElement.style.height = '';
                    iconElement.style.left = '';
                    iconElement.style.top = '';
                    delete savedIconPositions[appId];
                    document.getElementById('desktop-icons').appendChild(iconElement);
                } else {
                    savedIconPositions[appId] = { left: newL + 'px', top: newT + 'px' };
                }
            }

            saveIconOrder();
            try {
                localStorage.setItem('looney_icon_positions', JSON.stringify(savedIconPositions));
            } catch (err) {}
        } else {
            iconElement.style.transition = 'transform 0.2s, box-shadow 0.2s';
            openApp(appId);
        }
        isDragging = false;
        placeholder = null;
    }

    iconElement.addEventListener('mousedown', handleDown);
    iconElement.addEventListener('touchstart', handleDown, { passive: true });
}

function openFolderPopup(folderId) {
    if (document.getElementById('folder-popup-overlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'folder-popup-overlay';
    overlay.style.cssText = 'position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(255,255,255,0.7); z-index:100000; display:flex; align-items:center; justify-content:center; transition: opacity 0.2s;';

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.opacity = '0';
            setTimeout(() => overlay.remove(), 200);
        }
    });

    const popup = document.createElement('div');
    popup.className = 'folder-popup';
    popup.style.cssText = 'background:var(--white); border:2px solid var(--black); border-radius:15px 255px 15px 225px / 225px 15px 255px 15px; box-shadow:6px 6px 0px var(--black); padding:40px 30px 30px; display:flex; gap:30px; min-width:250px; justify-content:center; flex-wrap:wrap; position:relative; transform:scale(0.8); opacity:0; transition:all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);';

    const title = document.createElement('div');
    title.style.cssText = 'position:absolute; top:-15px; background:var(--white); border:2px solid var(--black); padding:4px 15px; border-radius:var(--radius-sm); font-weight:bold; box-shadow:2px 2px 0px var(--black); font-size:1.1rem;';
    title.innerText = state.apps[folderId].title;
    popup.appendChild(title);

    if (folderId === 'games') {
        const content = document.createElement('div');
        content.style.cssText = 'display:flex; gap:25px;';
        content.innerHTML = `
            <div class="games-folder-item" onclick="document.getElementById('folder-popup-overlay').style.opacity='0'; setTimeout(() => document.getElementById('folder-popup-overlay').remove(), 200); openApp('game')">
                <div class="icon-box">${icons.game}</div>
                <span>Avoid Blocks</span>
            </div>
            <div class="games-folder-item" onclick="document.getElementById('folder-popup-overlay').style.opacity='0'; setTimeout(() => document.getElementById('folder-popup-overlay').remove(), 200); openApp('snake')">
                <div class="icon-box">${icons.snake}</div>
                <span>Snake Classic</span>
            </div>
        `;
        popup.appendChild(content);
    }

    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
        popup.style.transform = 'scale(1)';
        popup.style.opacity = '1';
    });
}

function openApp(appId) {
    if (appId === 'games') {
        openFolderPopup(appId);
        return;
    }

    if (!state.apps[appId]) return;

    const app = state.apps[appId];

    if (state.openWindows[appId]) {
        const winData = state.openWindows[appId];
        const win = winData.element;
        if (winData.lastTop) {
            win.style.top = winData.lastTop;
            win.style.left = winData.lastLeft;
        }
        win.classList.remove('minimized');
        winData.minimized = false;
        focusWindow(appId);
        updateTaskbar();
        saveSystem();
        return;
    }

    const timeStr = new Date().toLocaleTimeString('en-US', { hour12: false });
    state.appHistory.push(`[${timeStr}] Opened: ${app.title}`);

    const win = document.createElement('div');
    win.className = 'window';

    if (windowSizes[appId]) {
        win.style.width = windowSizes[appId].width + 'px';
        win.style.height = windowSizes[appId].height + 'px';
    }

    const offset = Object.keys(state.openWindows).length * 30;
    const initialTop = `${50 + offset}px`;
    const initialLeft = `${100 + offset}px`;
    win.style.top = initialTop;
    win.style.left = initialLeft;

    const headerColor = app.color;
    const headerText = app.title;

    win.innerHTML = `
        <div class="window-header" style="background: ${headerColor};">
            <div class="window-title">${app.icon} ${headerText}</div>
        </div>
        <div class="window-content content-hook" style="display:flex; flex-direction:column; height:100%;"></div>
        <div class="resize-handle">
            <svg viewBox="0 0 24 24" style="width: 16px; height: 16px; stroke: var(--black); stroke-width: 2.5; stroke-linecap: round;">
                <line x1="14" y1="20" x2="20" y2="14"></line>
                <line x1="8" y1="20" x2="20" y2="8"></line>
            </svg>
        </div>
    `;

    elements.windowContainer.appendChild(win);

    state.openWindows[appId] = {
        element: win,
        maximized: false,
        minimized: false,
        lastTop: initialTop,
        lastLeft: initialLeft
    };

    const contentContainer = win.querySelector(`.content-hook`);
    populateAppContent(appId, contentContainer);

    win.addEventListener('mousedown', () => focusWindow(appId));
    win.addEventListener('touchstart', () => focusWindow(appId), { passive: true });

    makeDraggable(win, win.querySelector('.window-header'), appId);
    makeResizable(win, win.querySelector('.resize-handle'), appId);

    focusWindow(appId);
    updateTaskbar();
    saveSystem();
}

function closeApp(appId) {
    const winData = state.openWindows[appId];
    if (!winData) return;

    if (appId === 'music') stopMusic();

    if (state.apps[appId]) {
        const timeStr = new Date().toLocaleTimeString('en-US', { hour12: false });
        state.appHistory.push(`[${timeStr}] Closed: ${state.apps[appId].title}`);
    }

    winData.element.remove();
    delete state.openWindows[appId];

    saveSystem();

    if (state.activeAppId === appId) state.activeAppId = null;
    updateTaskbar();
}

function maximizeApp(appId) {
    const winData = state.openWindows[appId];
    if (!winData) return;
    const win = winData.element;
    if (winData.maximized) {
        win.classList.remove('maximized');
        winData.maximized = false;
    } else {
        win.classList.add('maximized');
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
    saveSystem();
}

function focusWindow(appId) {
    state.zIndexCounter++;
    const winData = state.openWindows[appId];
    if (!winData) return;
    const win = winData.element;
    win.style.zIndex = state.zIndexCounter;
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
        taskItem.innerHTML = `${appData.icon} <span>${appData.title}</span>`;

        let isDragging = false;
        let startX, startY;
        let clone = null;

        function handlePointerDown(e) {
            if (e.type === 'mousedown' && e.button !== 0) return;

            if (e.type === 'touchstart') {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            } else {
                startX = e.clientX;
                startY = e.clientY;
            }
            isDragging = false;

            // Disable pointer events on all iframes so mouse doesn't get lost
            document.querySelectorAll('iframe').forEach(ifr => ifr.style.pointerEvents = 'none');

            document.addEventListener('mousemove', handlePointerMove);
            document.addEventListener('touchmove', handlePointerMove, { passive: false });
            document.addEventListener('mouseup', handlePointerUp);
            document.addEventListener('touchend', handlePointerUp);
        }

        function handlePointerMove(e) {
            let currentX, currentY;
            if (e.type === 'touchmove') {
                currentX = e.touches[0].clientX;
                currentY = e.touches[0].clientY;
            } else {
                currentX = e.clientX;
                currentY = e.clientY;
            }

            if (!isDragging && (Math.abs(currentX - startX) > 10 || Math.abs(currentY - startY) > 10)) {
                isDragging = true;

                clone = taskItem.cloneNode(true);
                clone.style.position = 'fixed';
                clone.style.zIndex = '100000';
                clone.style.pointerEvents = 'none';
                clone.style.opacity = '0.7';
                clone.style.transform = 'rotate(-5deg)';
                clone.style.boxShadow = '6px 6px 0px var(--black)';
                clone.style.margin = '0';
                document.body.appendChild(clone);
            }

            if (isDragging && clone) {
                e.preventDefault();
                clone.style.left = (currentX - clone.offsetWidth / 2) + 'px';
                clone.style.top = (currentY - clone.offsetHeight / 2) + 'px';

                const indClose = document.getElementById('indicator-close');
                if (currentY < window.innerHeight - 80) {
                    indClose.classList.add('active');
                } else {
                    indClose.classList.remove('active');
                }
            }
        }

        function handlePointerUp(e) {
            document.removeEventListener('mousemove', handlePointerMove);
            document.removeEventListener('touchmove', handlePointerMove);
            document.removeEventListener('mouseup', handlePointerUp);
            document.removeEventListener('touchend', handlePointerUp);

            // Re-enable pointer events on all iframes
            document.querySelectorAll('iframe').forEach(ifr => ifr.style.pointerEvents = '');

            const indClose = document.getElementById('indicator-close');
            indClose.classList.remove('active');

            if (isDragging) {
                let currentY;
                if (e.type === 'touchend' && e.changedTouches.length > 0) {
                    currentY = e.changedTouches[0].clientY;
                } else {
                    currentY = e.clientY;
                }

                if (currentY < window.innerHeight - 80) {
                    closeApp(appId);
                }

                if (clone) {
                    clone.remove();
                    clone = null;
                }
                isDragging = false;
            } else {
                if (state.activeAppId === appId && !winData.minimized) {
                    minimizeApp(appId);
                } else {
                    if (winData.lastTop) {
                        winData.element.style.top = winData.lastTop;
                        winData.element.style.left = winData.lastLeft;
                    }
                    state.openWindows[appId].element.classList.remove('minimized');
                    state.openWindows[appId].minimized = false;
                    focusWindow(appId);
                }
            }
        }

        taskItem.addEventListener('mousedown', handlePointerDown);
        taskItem.addEventListener('touchstart', handlePointerDown, { passive: true });
        elements.taskbarApps.appendChild(taskItem);
    });
}

function makeDraggable(element, handle, appId) {
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    let dragAction = null;

    handle.onmousedown = dragStart;
    handle.ontouchstart = dragStart;

    function dragStart(e) {
        e.preventDefault();

        // Disable pointer events on all iframes globally during drag
        document.querySelectorAll('iframe').forEach(ifr => ifr.style.pointerEvents = 'none');

        const contentWindow = element.querySelector('.window-content');
        if (contentWindow) contentWindow.style.pointerEvents = 'none';

        if (element.classList.contains('maximized')) {
            element.classList.remove('maximized');
            state.openWindows[appId].maximized = false;

            element.style.width = (windowSizes[appId] ? windowSizes[appId].width : 450) + 'px';
            element.style.height = (windowSizes[appId] ? windowSizes[appId].height : 350) + 'px';

            let clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
            let newLeft = clientX - (parseInt(element.style.width) / 2);
            if (newLeft < 0) newLeft = 0;
            if (newLeft > window.innerWidth - parseInt(element.style.width)) newLeft = window.innerWidth - parseInt(element.style.width);

            element.style.left = newLeft + 'px';
            element.style.top = '10px';

            state.openWindows[appId].lastTop = '10px';
            state.openWindows[appId].lastLeft = newLeft + 'px';
        } else {
            state.openWindows[appId].lastTop = element.style.top;
            state.openWindows[appId].lastLeft = element.style.left;
        }

        if (e.type === 'touchstart') {
            pos3 = e.touches[0].clientX;
            pos4 = e.touches[0].clientY;
        } else {
            pos3 = e.clientX;
            pos4 = e.clientY;
        }

        document.addEventListener('mousemove', elementDrag);
        document.addEventListener('mouseup', closeDragElement);
        document.ontouchend = closeDragElement;
        document.ontouchmove = elementDrag;
        window.addEventListener('blur', closeDragElement);
        element.style.transition = 'none';
    }

    function elementDrag(e) {
        let currentX, currentY;
        if (e.type === 'touchmove') {
            currentX = e.touches[0].clientX;
            currentY = e.touches[0].clientY;
        } else {
            currentX = e.clientX;
            currentY = e.clientY;
        }

        pos1 = pos3 - currentX;
        pos2 = pos4 - currentY;
        pos3 = currentX;
        pos4 = currentY;

        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";

        const indMax = document.getElementById('indicator-max');
        const indClose = document.getElementById('indicator-close');
        const taskbar = document.getElementById('taskbar');

        dragAction = null;
        indMax.classList.remove('active');
        indClose.classList.remove('active');
        taskbar.classList.remove('drag-over');

        if (currentY < 150 && currentX > window.innerWidth - 150) {
            dragAction = 'close';
            indClose.classList.add('active');
        } else if (currentY < 50) {
            dragAction = 'max';
            indMax.classList.add('active');
        } else if (currentY > window.innerHeight - 100) {
            dragAction = 'min';
            taskbar.classList.add('drag-over');
        }
    }

    function closeDragElement() {
        document.removeEventListener('mousemove', elementDrag);
        document.removeEventListener('mouseup', closeDragElement);
        document.ontouchend = null;
        document.ontouchmove = null;
        window.removeEventListener('blur', closeDragElement);

        element.style.transition = '';

        // Re-enable pointer events on all iframes
        document.querySelectorAll('iframe').forEach(ifr => ifr.style.pointerEvents = '');

        const contentWindow = element.querySelector('.window-content');
        if (contentWindow) contentWindow.style.pointerEvents = '';

        document.getElementById('indicator-max').classList.remove('active');
        document.getElementById('indicator-close').classList.remove('active');
        document.getElementById('taskbar').classList.remove('drag-over');

        if (dragAction === 'close') {
            closeApp(appId);
        } else if (dragAction === 'max') {
            maximizeApp(appId);
        } else if (dragAction === 'min') {
            element.style.top = state.openWindows[appId].lastTop || '50px';
            element.style.left = state.openWindows[appId].lastLeft || '100px';
            minimizeApp(appId);
        }
        dragAction = null;
    }
}

function makeResizable(element, handle, appId) {
    let startX, startY, startWidth, startHeight;

    function initResize(e) {
        e.preventDefault();
        e.stopPropagation();

        // Disable pointer events on all iframes globally during resize
        document.querySelectorAll('iframe').forEach(ifr => ifr.style.pointerEvents = 'none');

        const contentWindow = element.querySelector('.window-content');
        if (contentWindow) contentWindow.style.pointerEvents = 'none';

        if (e.type === 'touchstart') {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        } else {
            startX = e.clientX;
            startY = e.clientY;
        }

        startWidth = parseInt(document.defaultView.getComputedStyle(element).width, 10);
        startHeight = parseInt(document.defaultView.getComputedStyle(element).height, 10);

        if (element.classList.contains('maximized')) {
            element.classList.remove('maximized');
            state.openWindows[appId].maximized = false;
            element.style.width = startWidth + 'px';
            element.style.height = startHeight + 'px';
            element.style.top = '0px';
            element.style.left = '0px';
            state.openWindows[appId].lastTop = '0px';
            state.openWindows[appId].lastLeft = '0px';
        }

        document.addEventListener('mousemove', resize);
        document.addEventListener('touchmove', resize, { passive: false });
        document.addEventListener('mouseup', stopResize);
        document.addEventListener('touchend', stopResize);
        element.style.transition = 'none';
    }

    function resize(e) {
        e.preventDefault();
        let currentX, currentY;
        if (e.type === 'touchmove') {
            currentX = e.touches[0].clientX;
            currentY = e.touches[0].clientY;
        } else {
            currentX = e.clientX;
            currentY = e.clientY;
        }

        let newWidth = startWidth + (currentX - startX);
        let newHeight = startHeight + (currentY - startY);

        let maxWidth = window.innerWidth - parseInt(element.style.left, 10);
        let maxHeight = window.innerHeight - parseInt(element.style.top, 10) - 60;

        if (newWidth > maxWidth) newWidth = maxWidth;
        if (newHeight > maxHeight) newHeight = maxHeight;

        if (newWidth >= 300) element.style.width = newWidth + 'px';
        if (newHeight >= 200) element.style.height = newHeight + 'px';
    }

    function stopResize() {
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('touchmove', resize);
        document.removeEventListener('mouseup', stopResize);
        document.removeEventListener('touchend', stopResize);

        element.style.transition = '';

        // Re-enable pointer events on all iframes
        document.querySelectorAll('iframe').forEach(ifr => ifr.style.pointerEvents = '');

        const contentWindow = element.querySelector('.window-content');
        if (contentWindow) contentWindow.style.pointerEvents = '';

        windowSizes[appId] = {
            width: parseInt(element.style.width, 10),
            height: parseInt(element.style.height, 10)
        };

        try {
            localStorage.setItem('looney_window_sizes', JSON.stringify(windowSizes));
        } catch (e) {}
    }

    handle.addEventListener('mousedown', initResize);
    handle.addEventListener('touchstart', initResize, { passive: false });
}

function populateAppContent(appId, container) {
    try {
        switch (appId) {
            case 'notepad':
                renderNotepad(container);
                break;
            case 'terminal':
                renderTerminal(container);
                break;
            case 'browser':
                renderBrowser(container);
                break;
            case 'files':
                renderFiles(container);
                break;
            case 'calendar':
                renderCalendar(container);
                break;
            case 'settings':
                renderSettings(container);
                break;
            case 'music':
                renderMusic(container);
                break;
            case 'calc':
                renderCalc(container);
                break;
            case 'doodle':
                renderDoodle(container);
                break;
            case 'game':
                renderGame(container);
                break;
            case 'snake':
                renderSnake(container);
                break;
        }
    } catch (e) {
        container.innerHTML = "<div style='padding:20px;font-weight:bold;'>App crashed 😵</div>";
        console.error(e);
    }
}

function renderNotepad(container) {
    container.className = 'window-content app-notepad';
    container.innerHTML = `<div style="display:flex; justify-content:center; align-items:center; height:100%; font-weight:bold; font-size:1.2rem;">Loading...</div>`;

    setTimeout(() => {
        let savedText = 'Start typing your cartoon script here...';
        try {
            savedText = localStorage.getItem('looney_notes') || savedText;
        } catch (e) {}

        container.innerHTML = `
            <textarea class="np-textarea">${savedText}</textarea>
            <div class="toolbar">
                <button class="looney-btn np-save">💾 Save Notes</button>
            </div>
        `;

        container.querySelector('.np-save').addEventListener('click', () => {
            const text = container.querySelector('.np-textarea').value;
            try { localStorage.setItem('looney_notes', text); } catch (e) {}

            const btn = container.querySelector('.np-save');
            const origText = btn.innerHTML;
            btn.innerHTML = "✅ Saved!";
            setTimeout(() => btn.innerHTML = origText, 2000);
        });
    }, 300);
}

function renderFiles(container) {
    container.innerHTML = '';

    let currentPath = '/';
    let selectedItems = new Set();

    const fileIcons = {
        doc: `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
        img: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`,
        video: `<svg viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`,
        blueprint: `<svg viewBox="0 0 24 24"><polygon points="12 2 2 12 12 22 22 12 12 2"></polygon></svg>`,
        secret: `<svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
        joke: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
        generic: `<svg viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`,
        add: `<svg viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line></svg>`,
        trash: `<svg viewBox="0 0 24 24"><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`,
        upload: `<svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>`,
        music: `<svg viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>`
    };

    const defaultFolders = [
        { id: 'recycle', name: 'Recycle Bin', icon: fileIcons.trash, type: 'folder', path: '/' },
        { id: 'uploads', name: 'Uploads', icon: fileIcons.upload, type: 'folder', path: '/' },
        { id: 'pictures', name: 'Pictures', icon: fileIcons.img, type: 'folder', path: '/' },
        { id: 'music', name: 'Music', icon: fileIcons.music, type: 'folder', path: '/' },
        { id: 'videos', name: 'Videos', icon: fileIcons.video, type: 'folder', path: '/' },
        { id: 'hidden', name: 'Hidden', icon: fileIcons.secret, type: 'folder', path: '/' }
    ];

    let customItems = [];
    try {
        const saved = localStorage.getItem('looney_fs_items');
        if (saved) {
            customItems = JSON.parse(saved);
        }
    } catch (e) {}

    function getItemsForPath(path) {
        if (path === '/Uploads') {
            return customItems.filter(item => item.type === 'file' && !item.deleted);
        }
        if (path === '/Recycle Bin') {
            return customItems.filter(item => item.deleted === true);
        }
        const items = customItems.filter(item => item.path === path && !item.deleted);
        if (path === '/') {
            return [...defaultFolders, ...items];
        }
        return items;
    }

    function saveCustomItem(item) {
        customItems.push(item);
        try {
            localStorage.setItem('looney_fs_items', JSON.stringify(customItems));
        } catch (e) {
            alert('Storage full! Cannot save file.');
            customItems.pop();
        }
        renderView();
    }

    container.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.stopPropagation();
        container.style.background = 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 12px)';
    });

    container.addEventListener('dragleave', (e) => {
        e.preventDefault();
        e.stopPropagation();
        container.style.background = 'var(--white)';
    });

    container.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        container.style.background = 'var(--white)';

        const globalOverlay = document.getElementById('global-drop-overlay');
        if (globalOverlay) globalOverlay.classList.remove('active');

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            Array.from(e.dataTransfer.files).forEach(file => {
                if (currentPath === '/Pictures' && !file.type.startsWith('image/')) {
                    alert('Hold on! Only photos here.');
                    return;
                }
                if (currentPath === '/Music' && !file.type.startsWith('audio/')) {
                    alert('Hold on! Only audio files here.');
                    return;
                }
                if (currentPath === '/Videos' && !file.type.startsWith('video/')) {
                    alert('Hold on! Only video files here.');
                    return;
                }

                if (file.size > 10 * 1024 * 1024) {
                    alert(`File too large <svg viewBox="0 0 24 24" width="20" height="20" style="vertical-align: text-bottom; margin-left: 4px;" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>`);
                    return;
                }

                const isImg = file.type.startsWith('image/');
                const isAudio = file.type.startsWith('audio/');
                const isVideo = file.type.startsWith('video/');

                let fileIcon = fileIcons.generic;
                if (isImg) fileIcon = fileIcons.img;
                else if (isAudio) fileIcon = fileIcons.music;
                else if (isVideo) fileIcon = fileIcons.video;

                if (isVideo || isAudio || file.size > 5 * 1024 * 1024) {
                    const blobUrl = URL.createObjectURL(file);
                    state.currentBlobUrls.push(blobUrl);
                    const newItem = {
                        id: 'f_' + Date.now() + Math.floor(Math.random() * 1000),
                        name: file.name,
                        type: 'file',
                        mimeType: file.type,
                        path: currentPath,
                        icon: fileIcon,
                        data: blobUrl,
                        deleted: false
                    };
                    saveCustomItem(newItem);
                } else {
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                        const newItem = {
                            id: 'f_' + Date.now() + Math.floor(Math.random() * 1000),
                            name: file.name,
                            type: 'file',
                            mimeType: file.type,
                            path: currentPath,
                            icon: fileIcon,
                            data: ev.target.result,
                            deleted: false
                        };
                        saveCustomItem(newItem);
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
    });

    function promptHiddenPassword(onSuccess) {
        let contentDiv = container.querySelector('.files-content-wrapper');
        let savedPwd = localStorage.getItem('looney_hidden_pwd');

        const pwdOverlay = document.createElement('div');
        pwdOverlay.style.cssText = 'position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(255,255,255,0.95); z-index:100; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:20px; box-sizing:border-box;';

        const title = document.createElement('h3');
        title.innerHTML = savedPwd ? 'Enter Hidden Password' : 'Set 7-Digit Password';
        title.style.marginBottom = '15px';

        const pwdInput = document.createElement('input');
        pwdInput.type = 'password';
        pwdInput.maxLength = 7;
        pwdInput.className = 'new-folder-input';
        pwdInput.style.width = '150px';
        pwdInput.style.fontSize = '1.2rem';
        pwdInput.style.letterSpacing = '5px';
        pwdInput.placeholder = '*******';

        const btnRow = document.createElement('div');
        btnRow.style.cssText = 'display:flex; gap:10px; margin-top:15px;';

        const submitBtn = document.createElement('button');
        submitBtn.className = 'looney-btn';
        submitBtn.style.padding = '5px 15px';
        submitBtn.innerHTML = 'Submit';

        const cancelBtn = document.createElement('button');
        cancelBtn.className = 'looney-btn';
        cancelBtn.style.padding = '5px 15px';
        cancelBtn.innerHTML = 'Cancel';

        btnRow.appendChild(submitBtn);
        btnRow.appendChild(cancelBtn);

        pwdOverlay.appendChild(title);
        pwdOverlay.appendChild(pwdInput);
        pwdOverlay.appendChild(btnRow);
        contentDiv.appendChild(pwdOverlay);

        pwdInput.focus();

        pwdInput.onkeydown = (e) => {
            if (e.key === 'Enter') submitBtn.click();
        };

        cancelBtn.onclick = () => pwdOverlay.remove();

        submitBtn.onclick = () => {
            const val = pwdInput.value;
            if (!/^\d{7}$/.test(val)) {
                alert('Please enter exactly 7 digits!');
                pwdInput.value = '';
                pwdInput.focus();
                return;
            }
            if (!savedPwd) {
                localStorage.setItem('looney_hidden_pwd', val);
                pwdOverlay.remove();
                onSuccess();
            } else {
                if (val === savedPwd) {
                    pwdOverlay.remove();
                    onSuccess();
                } else {
                    alert(`Incorrect Password! <svg viewBox="0 0 24 24" width="20" height="20" style="vertical-align: text-bottom; margin-left: 4px;" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`);
                    pwdInput.value = '';
                    pwdInput.focus();
                }
            }
        };
    }

    function openItem(item) {
        if (state.currentBlobUrl) {
            URL.revokeObjectURL(state.currentBlobUrl);
            state.currentBlobUrl = null;
        }
        if (item.type === 'folder') {
            if (item.id === 'hidden') {
                promptHiddenPassword(() => {
                    currentPath = currentPath === '/' ? '/' + item.name : currentPath + '/' + item.name;
                    selectedItems.clear();
                    renderView();
                });
                return;
            }
            currentPath = currentPath === '/' ? '/' + item.name : currentPath + '/' + item.name;
            selectedItems.clear();
            renderView();
        } else if (item.type === 'file') {
            const isImgData = item.mimeType ? item.mimeType.startsWith('image/') : (item.data && item.data.startsWith('data:image'));
            const isVidData = item.mimeType ? item.mimeType.startsWith('video/') : (item.data && item.data.startsWith('data:video'));
            const isAudData = item.mimeType ? item.mimeType.startsWith('audio/') : (item.data && item.data.startsWith('data:audio'));

            if (isAudData) {
                state.currentTrack = { name: item.name, data: item.data };
                openApp('music');
                const musicWin = state.openWindows['music'];
                if (musicWin) {
                    const contentContainer = musicWin.element.querySelector('.content-hook');
                    populateAppContent('music', contentContainer);
                }
                selectedItems.clear();
                renderView();
                return;
            }

            let contentDiv = container.querySelector('.files-content-wrapper');
            let mediaHtml = '<div style="padding: 20px; font-weight: bold;">Cannot preview this file type natively.</div>';

            if (isImgData) {
                mediaHtml = `<img id="preview-img" src="${item.data}" style="max-width:90%; max-height:90%; border:4px solid var(--black); border-radius:4px; box-shadow:6px 6px 0px var(--black); object-fit:contain; cursor: grab; transition: transform 0.1s ease-out;">`;
            } else if (isVidData) {
                mediaHtml = `<video src="${item.data}" controls autoplay style="max-width:90%; max-height:90%; border:4px solid var(--black); border-radius:4px; box-shadow:6px 6px 0px var(--black); background: #000;"></video>`;
            }

            contentDiv.innerHTML = `
                <div class="files-header">
                    <button class="looney-btn back-btn" style="padding: 2px 8px; font-size: 0.8rem;">◀ Back</button>
                    <div class="files-path">${item.name}</div>
                </div>
                <div id="preview-area" style="flex:1; display:flex; align-items:center; justify-content:center; background: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 12px); overflow:hidden; position:relative;">
                    ${mediaHtml}
                </div>
            `;

            contentDiv.querySelector('.back-btn').onclick = () => {
                selectedItems.clear();
                renderView();
            };

            if (isImgData) {
                const img = contentDiv.querySelector('#preview-img');
                const viewArea = contentDiv.querySelector('#preview-area');
                let scale = 1,
                    panX = 0,
                    panY = 0;
                let isDraggingImg = false,
                    startX, startY;

                viewArea.addEventListener('wheel', (e) => {
                    e.preventDefault();
                    const zoomFactor = 1.1;
                    if (e.deltaY < 0) scale *= zoomFactor;
                    else scale /= zoomFactor;
                    scale = Math.max(0.2, Math.min(scale, 10));
                    img.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
                });

                img.addEventListener('mousedown', (e) => {
                    e.preventDefault();
                    isDraggingImg = true;
                    startX = e.clientX - panX;
                    startY = e.clientY - panY;
                    img.style.cursor = 'grabbing';
                    img.style.transition = 'none';
                });

                viewArea.addEventListener('mousemove', (e) => {
                    if (!isDraggingImg) return;
                    e.preventDefault();
                    panX = e.clientX - startX;
                    panY = e.clientY - startY;
                    img.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
                });

                viewArea.addEventListener('mouseup', () => {
                    isDraggingImg = false;
                    img.style.cursor = 'grab';
                    img.style.transition = 'transform 0.1s ease-out';
                });

                viewArea.addEventListener('mouseleave', () => {
                    isDraggingImg = false;
                    img.style.cursor = 'grab';
                    img.style.transition = 'transform 0.1s ease-out';
                });

                img.addEventListener('touchstart', (e) => {
                    if (e.touches.length === 1) {
                        isDraggingImg = true;
                        startX = e.touches[0].clientX - panX;
                        startY = e.touches[0].clientY - panY;
                        img.style.transition = 'none';
                    }
                }, { passive: false });

                viewArea.addEventListener('touchmove', (e) => {
                    if (!isDraggingImg || e.touches.length !== 1) return;
                    e.preventDefault();
                    panX = e.touches[0].clientX - startX;
                    panY = e.touches[0].clientY - startY;
                    img.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
                }, { passive: false });

                viewArea.addEventListener('touchend', () => {
                    isDraggingImg = false;
                    img.style.transition = 'transform 0.1s ease-out';
                });
            }
        }
    }

    function renderView() {
        let contentDiv = container.querySelector('.files-content-wrapper');
        if (!contentDiv) {
            contentDiv = document.createElement('div');
            contentDiv.className = 'files-content-wrapper';
            contentDiv.style.height = '100%';
            contentDiv.style.display = 'flex';
            contentDiv.style.flexDirection = 'column';
            contentDiv.style.position = 'relative';
            container.appendChild(contentDiv);
        }
        contentDiv.innerHTML = '';

        const header = document.createElement('div');
        header.className = 'files-header';

        const backBtn = document.createElement('button');
        backBtn.className = 'looney-btn';
        backBtn.style.padding = '2px 8px';
        backBtn.style.fontSize = '0.8rem';
        backBtn.innerHTML = '◀ Back';
        backBtn.style.visibility = currentPath === '/' ? 'hidden' : 'visible';
        backBtn.onclick = () => {
            if (currentPath !== '/') {
                const parts = currentPath.split('/');
                parts.pop();
                currentPath = parts.length > 1 ? parts.join('/') : '/';
                selectedItems.clear();
                renderView();
            }
        };

        const pathDisplay = document.createElement('div');
        pathDisplay.className = 'files-path';

        let displayPath = 'Home';
        if (currentPath !== '/') {
            displayPath = 'Home > ' + currentPath.substring(1).replace(/\//g, ' > ');
        }
        pathDisplay.textContent = displayPath;

        header.appendChild(backBtn);
        header.appendChild(pathDisplay);
        contentDiv.appendChild(header);

        const toolbar = document.createElement('div');
        toolbar.style.cssText = `display: ${selectedItems.size > 0 ? 'flex' : 'none'}; gap: 10px; padding: 6px 12px; border-bottom: 2px solid var(--black); background: #eee; align-items: center;`;

        if (selectedItems.size > 0) {
            if (currentPath === '/Recycle Bin') {
                toolbar.innerHTML = `
                    <span style="font-weight:bold; font-size: 0.9rem; margin-right: auto;">${selectedItems.size} selected</span>
                    <button class="looney-btn" id="tb-restore" style="padding: 4px 10px; font-size: 0.85rem;">✨ Recover</button>
                    <button class="looney-btn" id="tb-perm-del" style="padding: 4px 10px; font-size: 0.85rem; color: var(--black);">🗑️ Delete</button>
                `;
            } else {
                toolbar.innerHTML = `
                    <span style="font-weight:bold; font-size: 0.9rem; margin-right: auto;">${selectedItems.size} selected</span>
                    ${selectedItems.size === 1 ? `<button class="looney-btn" id="tb-open" style="padding: 4px 10px; font-size: 0.85rem;">📂 Open</button>` : ''}
                    <button class="looney-btn" id="tb-move" style="padding: 4px 10px; font-size: 0.85rem;">📦 Move</button>
                    <button class="looney-btn" id="tb-delete" style="padding: 4px 10px; font-size: 0.85rem;">✖ Delete</button>
                `;
            }
        }
        contentDiv.appendChild(toolbar);

        if (selectedItems.size > 0) {
            if (currentPath === '/Recycle Bin') {
                toolbar.querySelector('#tb-restore').onclick = () => {
                    selectedItems.forEach(id => {
                        const itm = customItems.find(i => i.id === id);
                        if (itm) itm.deleted = false;
                    });
                    localStorage.setItem('looney_fs_items', JSON.stringify(customItems));
                    selectedItems.clear();
                    renderView();
                };
                toolbar.querySelector('#tb-perm-del').onclick = () => {
                    state.currentBlobUrls.forEach(url => URL.revokeObjectURL(url));
                    state.currentBlobUrls = [];
                    customItems = customItems.filter(i => !selectedItems.has(i.id));
                    localStorage.setItem('looney_fs_items', JSON.stringify(customItems));
                    selectedItems.clear();
                    renderView();
                };
            } else {
                if (selectedItems.size === 1 && toolbar.querySelector('#tb-open')) {
                    toolbar.querySelector('#tb-open').onclick = () => {
                        const id = Array.from(selectedItems)[0];
                        const itm = [...defaultFolders, ...customItems].find(i => i.id === id);
                        if (itm) openItem(itm);
                    };
                }
                toolbar.querySelector('#tb-delete').onclick = () => {
                    selectedItems.forEach(id => {
                        const itm = customItems.find(i => i.id === id);
                        if (itm) itm.deleted = true;
                    });
                    localStorage.setItem('looney_fs_items', JSON.stringify(customItems));
                    selectedItems.clear();
                    renderView();
                };

                toolbar.querySelector('#tb-move').onclick = () => {
                    const moveOverlay = document.createElement('div');
                    moveOverlay.style.cssText = 'position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(255,255,255,0.95); z-index:100; display:flex; flex-direction:column; padding:20px; box-sizing:border-box;';

                    const headerRow = document.createElement('div');
                    headerRow.style.display = 'flex';
                    headerRow.style.justifyContent = 'space-between';
                    headerRow.style.alignItems = 'center';
                    headerRow.style.marginBottom = '15px';

                    const title = document.createElement('h3');
                    title.innerHTML = 'Move to...';
                    title.style.margin = '0';

                    const closeBtn = document.createElement('button');
                    closeBtn.className = 'looney-btn';
                    closeBtn.style.padding = '2px 8px';
                    closeBtn.style.fontSize = '0.8rem';
                    closeBtn.innerHTML = '✖ Cancel';
                    closeBtn.onclick = () => moveOverlay.remove();

                    headerRow.appendChild(title);
                    headerRow.appendChild(closeBtn);

                    const folderList = document.createElement('div');
                    folderList.style.cssText = 'flex:1; overflow-y:auto; display:flex; flex-direction:column; gap:10px; padding-bottom: 20px;';

                    const dests = [];
                    
                    dests.push({ 
                        label: 'Home (Root)', 
                        targetPath: '/', 
                        icon: `<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>` 
                    });

                    defaultFolders.forEach(df => {
                        if (df.id !== 'recycle' && df.id !== 'uploads') {
                            dests.push({ label: df.name, targetPath: '/' + df.name, icon: df.icon });
                        }
                    });

                    customItems.forEach(ci => {
                        if (ci.type === 'folder' && !ci.deleted && !selectedItems.has(ci.id)) {
                            const tPath = ci.path === '/' ? '/' + ci.name : ci.path + '/' + ci.name;
                            dests.push({ label: ci.name, targetPath: tPath, icon: fileIcons.generic });
                        }
                    });

                    let hasValidFolders = false;
                    dests.forEach(dest => {
                        if (dest.targetPath === currentPath) return; 

                        let isChild = false;
                        selectedItems.forEach(id => {
                            const selItem = customItems.find(i => i.id === id);
                            if (selItem && selItem.type === 'folder') {
                                const selPath = selItem.path === '/' ? '/' + selItem.name : selItem.path + '/' + selItem.name;
                                if (dest.targetPath.startsWith(selPath + '/') || dest.targetPath === selPath) {
                                    isChild = true;
                                }
                            }
                        });
                        if (isChild) return;

                        hasValidFolders = true;
                        const fItem = document.createElement('div');
                        fItem.style.cssText = 'padding:10px; border:2px solid var(--black); border-radius:var(--radius-sm); cursor:pointer; background:var(--white); box-shadow:2px 2px 0px var(--black); display:flex; align-items:center; gap:12px; transition:transform 0.1s;';
                        
                        fItem.innerHTML = `
                            <div style="width:24px;height:24px;fill:none;stroke:var(--black);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;display:flex;align-items:center;justify-content:center;">
                                ${dest.icon}
                            </div>
                            <div style="display:flex; flex-direction:column; text-align:left;">
                                <span style="font-weight:bold; font-size:1rem;">${dest.label}</span>
                                <span style="font-size:0.75rem; font-weight:normal; opacity:0.7; margin-top:2px;">${dest.targetPath}</span>
                            </div>
                        `;

                        fItem.onmouseenter = () => fItem.style.transform = 'translate(-2px, -2px)';
                        fItem.onmouseleave = () => fItem.style.transform = 'none';

                        fItem.onclick = () => {
                            selectedItems.forEach(id => {
                                const itm = customItems.find(i => i.id === id);
                                if (itm) itm.path = dest.targetPath;
                            });
                            try { localStorage.setItem('looney_fs_items', JSON.stringify(customItems)); } catch (e) { }
                            selectedItems.clear();
                            moveOverlay.remove();
                            renderView();
                        };
                        folderList.appendChild(fItem);
                    });

                    if (!hasValidFolders) {
                        folderList.innerHTML = '<div style="color:var(--black); font-weight:bold; text-align:center; margin-top:20px;">No valid destinations available!</div>';
                    }

                    moveOverlay.appendChild(headerRow);
                    moveOverlay.appendChild(folderList);
                    contentDiv.appendChild(moveOverlay);
                };
            }
        }

        const grid = document.createElement('div');
        grid.className = 'files-grid';

        grid.onclick = (e) => {
            if (e.target === grid && selectedItems.size > 0) {
                selectedItems.clear();
                renderView();
            }
        };

        const items = getItemsForPath(currentPath);

        if (items.length === 0) {
            const emptyMsg = document.createElement('div');
            emptyMsg.className = 'empty-folder';
            emptyMsg.textContent = 'This folder is empty...';
            grid.appendChild(emptyMsg);
        } else {
            items.forEach(item => {
                const fDiv = document.createElement('div');
                fDiv.className = 'folder';
                fDiv.style.position = 'relative';

                if (selectedItems.has(item.id)) {
                    fDiv.style.background = 'rgba(0,0,0,0.08)';
                    fDiv.style.outline = '2px dashed var(--black)';
                    fDiv.style.borderRadius = 'var(--radius-sm)';
                }

                const isImgData = item.mimeType ? item.mimeType.startsWith('image/') : (item.type === 'file' && item.data && item.data.startsWith('data:image'));
                let visualIcon = `<div class="icon">${item.icon}</div>`;
                if (isImgData) {
                    visualIcon = `<div class="icon"><img src="${item.data}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;filter:grayscale(100%) contrast(120%);" /></div>`;
                }

                fDiv.innerHTML = `
                    ${visualIcon}
                    <span style="word-break: break-all; max-width: 100%;">${item.name}</span>
                `;

                const isDefaultFolder = defaultFolders.find(df => df.id === item.id);

                fDiv.onclick = (e) => {
                    e.stopPropagation();

                    if (isDefaultFolder) {
                        openItem(item);
                        return;
                    }

                    if (selectedItems.has(item.id)) {
                        selectedItems.delete(item.id);
                    } else {
                        selectedItems.add(item.id);
                    }
                    renderView();
                };

                fDiv.ondblclick = (e) => {
                    e.stopPropagation();
                    if (!isDefaultFolder) {
                        openItem(item);
                    }
                };

                grid.appendChild(fDiv);
            });
        }

        if (currentPath !== '/Recycle Bin' && currentPath !== '/Uploads') {
            const addDiv = document.createElement('div');
            addDiv.className = 'folder new-folder-btn';
            addDiv.innerHTML = `
                <div class="icon">${fileIcons.add}</div>
                <span>New Folder</span>
            `;

            addDiv.onclick = (e) => {
                e.stopPropagation();
                addDiv.onclick = null;
                addDiv.innerHTML = `
                    <div class="icon">${fileIcons.generic}</div>
                    <input type="text" class="new-folder-input" placeholder="Name..." autofocus>
                `;
                const inp = addDiv.querySelector('input');
                inp.focus();

                const handleSave = () => {
                    const val = inp.value.trim();
                    if (val) {
                        saveCustomItem({
                            id: 'f_' + Date.now(),
                            name: val,
                            type: 'folder',
                            path: currentPath,
                            icon: fileIcons.generic,
                            deleted: false
                        });
                    } else {
                        renderView();
                    }
                };

                inp.onblur = handleSave;
                inp.onkeydown = (e) => {
                    if (e.key === 'Enter') {
                        inp.onblur = null;
                        handleSave();
                    }
                };
            };
            grid.appendChild(addDiv);
        }

        contentDiv.appendChild(grid);
    }

    renderView();

    const handleFilesKeyDown = (e) => {
        if (!document.body.contains(container)) {
            window.removeEventListener('keydown', handleFilesKeyDown);
            return;
        }
        if (state.activeAppId !== 'files') return;
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        if (e.key === 'Escape') {
            if (selectedItems.size > 0) {
                selectedItems.clear();
                renderView();
            }
        } else if (e.key === 'Delete') {
            if (selectedItems.size > 0) {
                if (currentPath === '/Recycle Bin') {
                    state.currentBlobUrls.forEach(url => URL.revokeObjectURL(url));
                    state.currentBlobUrls = [];
                    customItems = customItems.filter(i => !selectedItems.has(i.id));
                } else {
                    selectedItems.forEach(id => {
                        const itm = customItems.find(i => i.id === id);
                        if (itm) itm.deleted = true;
                    });
                }
                localStorage.setItem('looney_fs_items', JSON.stringify(customItems));
                selectedItems.clear();
                renderView();
            }
        }
    };
    window.addEventListener('keydown', handleFilesKeyDown);
}

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function renderCalendar(container) {
    container.className = 'window-content app-calendar';

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const buildCalendarHTML = (month, year) => {
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const today = new Date();

        let html = `
            <div class="cal-header">
                <button class="looney-btn cal-prev" style="padding: 5px 15px;">◀</button>
                <span>${monthNames[month]} ${year}</span>
                <button class="looney-btn cal-next" style="padding: 5px 15px;">▶</button>
            </div>
            <div class="cal-grid">
                <div class="cal-day-name">Su</div><div class="cal-day-name">Mo</div><div class="cal-day-name">Tu</div>
                <div class="cal-day-name">We</div><div class="cal-day-name">Th</div><div class="cal-day-name">Fr</div><div class="cal-day-name">Sa</div>
        `;

        for (let i = 0; i < firstDay; i++) {
            html += `<div class="cal-day empty"></div>`;
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const isToday = i === today.getDate() && month === today.getMonth() && year === today.getFullYear();
            html += `<div class="cal-day ${isToday ? 'today' : ''}">${i}</div>`;
        }

        html += `</div>`;
        return html;
    };

    const updateCalendar = () => {
        container.innerHTML = buildCalendarHTML(currentMonth, currentYear);

        container.querySelector('.cal-prev').addEventListener('click', () => {
            currentMonth--;
            if (currentMonth < 0) { currentMonth = 11; currentYear--; }
            updateCalendar();
        });
        container.querySelector('.cal-next').addEventListener('click', () => {
            currentMonth++;
            if (currentMonth > 11) { currentMonth = 0; currentYear++; }
            updateCalendar();
        });
    };

    updateCalendar();
}

function renderTerminal(container) {
    container.className = 'window-content app-terminal';
    container.innerHTML = `
        <div class="output term-output">
            <div>Welcome to Looney Terminal v2.0</div>
            <div>Type 'help' for a list of commands.</div>
        </div>
        <div class="input-line">
            <span class="prompt">guest@looneyos:~$</span>
            <input type="text" class="term-input" autocomplete="off" spellcheck="false" autofocus>
        </div>
    `;

    const input = container.querySelector('.term-input');
    const output = container.querySelector('.term-output');

    const appAliases = {
        'files': 'files', 'my files': 'files', 'folder': 'files',
        'doodle': 'doodle', 'doodle pad': 'doodle', 'paint': 'doodle', 'drawing': 'doodle',
        'calc': 'calc', 'calculator': 'calc', 'math': 'calc',
        'browser': 'browser', 'web': 'browser', 'internet': 'browser',
        'terminal': 'terminal', 'cmd': 'terminal', 'command': 'terminal',
        'music': 'music', 'music player': 'music', 'audio': 'music',
        'notepad': 'notepad', 'notes': 'notepad', 'text': 'notepad',
        'calendar': 'calendar', 'date': 'calendar',
        'settings': 'settings', 'config': 'settings',
        'games': 'games', 'game folder': 'games',
        'game': 'game', 'avoid blocks': 'game', 'play': 'game',
        'snake': 'snake', 'snake classic': 'snake', 'play snake': 'snake'
    };

    function getAppIdFromAlias(name) {
        return appAliases[name.toLowerCase().trim()];
    }

    container.addEventListener('click', () => input.focus());

    let historyIndex = state.terminalHistory.length;

    input.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (state.terminalHistory.length > 0 && historyIndex > 0) {
                historyIndex--;
                input.value = state.terminalHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex < state.terminalHistory.length - 1) {
                historyIndex++;
                input.value = state.terminalHistory[historyIndex];
            } else {
                historyIndex = state.terminalHistory.length;
                input.value = '';
            }
        } else if (e.key === 'Enter') {
            const rawCmd = input.value.trim();
            if (rawCmd) {
                state.terminalHistory.push(rawCmd);
            }
            historyIndex = state.terminalHistory.length;

            const cmd = rawCmd.toLowerCase();

            output.innerHTML += `<div><span style="color:var(--yellow)">guest@looneyos:~$</span> ${cmd}</div>`;

            if (cmd === 'help') {
                output.innerHTML += `<div>Available commands:</div>
                                     <div>- help: Show this message</div>
                                     <div>- clear: Clear terminal output</div>
                                     <div>- open [app]: Open an app</div>
                                     <div>- close [app]: Close an app</div>
                                     <div>- delete [app]: Remove app</div>
                                     <div>- restore [app]: Bring back app</div>
                                     <div>- history: Show OS logs</div>
                                     <div>- status: List running apps</div>
                                     <div>- uptime: System uptime</div>`;
            } else if (cmd === 'clear') {
                output.innerHTML = '';
            } else if (cmd.startsWith('open ')) {
                const appName = cmd.replace(/^open\s+/, '');
                const appId = getAppIdFromAlias(appName);
                if (appId && state.apps[appId]) {
                    output.innerHTML += `<div>Opening ${state.apps[appId].title}...</div>`;
                    openApp(appId);
                } else {
                    output.innerHTML += `<div>App '${appName}' not found.</div>`;
                }
            } else if (cmd.startsWith('close ')) {
                const appName = cmd.replace(/^close\s+/, '');
                const appId = getAppIdFromAlias(appName);
                if (appId && state.openWindows[appId]) {
                    output.innerHTML += `<div>Closing ${state.apps[appId].title}...</div>`;
                    closeApp(appId);
                } else {
                    output.innerHTML += `<div>App '${appName}' is not running.</div>`;
                }
            } else if (cmd.startsWith('delete ') || cmd.startsWith('remove ')) {
                const appName = cmd.replace(/^(delete|remove)\s+/, '');
                const appId = getAppIdFromAlias(appName);
                if (appId && state.apps[appId]) {
                    if (appId === 'terminal') {
                        output.innerHTML += `<div><span style="color:var(--black); font-weight:bold;">[ERROR] You cannot delete the Terminal while using it!</span></div>`;
                    } else {
                        if (state.openWindows[appId]) closeApp(appId);
                        const appTitle = state.apps[appId].title;

                        state.deletedApps[appId] = state.apps[appId];
                        delete state.apps[appId];
                        renderDesktopIcons();

                        const timeStr = new Date().toLocaleTimeString('en-US', { hour12: false });
                        state.appHistory.push(`[${timeStr}] Deleted: ${appTitle}`);
                        output.innerHTML += `<div>🗑️ ${appTitle} removed. Type 'restore ${appId}' to bring it back.</div>`;
                    }
                } else {
                    output.innerHTML += `<div>App '${appName}' not found or already deleted.</div>`;
                }
            } else if (cmd.startsWith('restore ') || cmd.startsWith('install ')) {
                const appName = cmd.replace(/^(restore|install)\s+/, '');
                const appId = getAppIdFromAlias(appName);
                if (appId && state.deletedApps[appId]) {
                    state.apps[appId] = state.deletedApps[appId];
                    delete state.deletedApps[appId];
                    renderDesktopIcons();

                    const timeStr = new Date().toLocaleTimeString('en-US', { hour12: false });
                    state.appHistory.push(`[${timeStr}] Restored: ${state.apps[appId].title}`);
                    output.innerHTML += `<div>✨ ${state.apps[appId].title} has been successfully restored!</div>`;
                } else if (appId && state.apps[appId]) {
                    output.innerHTML += `<div>App '${appName}' is already installed on your system.</div>`;
                } else {
                    output.innerHTML += `<div>App '${appName}' not found in the trash.</div>`;
                }
            } else if (cmd.includes('history')) {
                if (state.appHistory.length === 0) {
                    output.innerHTML += `<div>No system history recorded yet.</div>`;
                } else {
                    output.innerHTML += `<div>--- System Activity Logs ---</div>`;
                    state.appHistory.forEach(log => {
                        output.innerHTML += `<div>${log}</div>`;
                    });
                }
            } else if (cmd === 'status' || cmd === 'running') {
                const openApps = Object.keys(state.openWindows);
                if (openApps.length === 0) {
                    output.innerHTML += `<div>No apps are currently running.</div>`;
                } else {
                    output.innerHTML += `<div>--- Running Apps ---</div>`;
                    openApps.forEach(id => {
                        const status = state.openWindows[id].minimized ? '(Minimized)' : '(Active)';
                        output.innerHTML += `<div>🟢 ${state.apps[id].title} ${status}</div>`;
                    });
                }
            } else if (cmd === 'uptime') {
                const diff = Math.floor((Date.now() - state.bootTime) / 1000);
                const m = Math.floor(diff / 60);
                const s = diff % 60;
                output.innerHTML += `<div>System uptime: ${m} minutes, ${s} seconds.</div>`;
            } else if (cmd === 'bounce') {
                const winData = state.openWindows['terminal'];
                if (winData) {
                    const win = winData.element;
                    win.style.animation = 'none';
                    void win.offsetWidth;
                    win.style.animation = 'windowPop 0.5s infinite alternate cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                    setTimeout(() => win.style.animation = 'none', 3000);
                }
                output.innerHTML += `<div>Bouncing! Boing!</div>`;
            }
            else if (cmd !== '') {
                output.innerHTML += `<div>Command not found: ${cmd}. Type 'help' for available commands.</div>`;
            }

            input.value = '';
            container.scrollTop = container.scrollHeight;
        }
    });
}

function renderBrowser(container) {
    container.className = 'window-content app-browser';
    container.innerHTML = `<iframe src="browser.html" style="width: 100%; height: 100%; border: none; background: #fff;"></iframe>`;
}

function renderSettings(container) {
    container.className = 'window-content app-settings';

    container.innerHTML = `
        <div style="display: flex; height: 100%; width: 100%;">
            <div style="width: 140px; border-right: 2px solid var(--black); background: #f9f9f9; padding: 10px; display: flex; flex-direction: column; flex-shrink: 0;">
                <div class="settings-nav-item active" data-tab="display">🎨 Display</div>
                <div class="settings-nav-item" data-tab="audio">🔊 Audio</div>
                <div class="settings-nav-item" data-tab="about">ℹ️ About</div>
            </div>
            <div class="settings-main-content" style="flex: 1; padding: 20px; overflow-y: auto;">
            </div>
        </div>
    `;

    const mainContent = container.querySelector('.settings-main-content');
    const navItems = container.querySelectorAll('.settings-nav-item');

    function loadTab(tabName) {
        navItems.forEach(nav => {
            if (nav.dataset.tab === tabName) {
                nav.style.background = 'var(--black)';
                nav.style.color = 'var(--white)';
                nav.style.borderColor = 'var(--black)';
            } else {
                nav.style.background = 'transparent';
                nav.style.color = 'var(--black)';
                nav.style.borderColor = 'transparent';
            }
        });

        if (tabName === 'display') {
            mainContent.innerHTML = `
                <h3 style="border-bottom: 2px solid var(--black); padding-bottom: 5px; margin-bottom: 15px;">Display Settings</h3>
                <h4 style="margin-bottom: 10px; font-size: 1rem;">Desktop Wallpaper</h4>
                <p style="font-size: 0.85rem; margin-bottom: 10px;">Select an image from your computer to sketchify it.</p>
                <div class="drop-zone" id="wp-drop-zone">
                    📁 Drag & Drop image here<br><span style="font-size:0.9rem; font-weight:normal;">Or click to select</span>
                    <input type="file" id="wp-file-input" accept="image/*">
                </div>
                <button class="looney-btn" id="remove-wp-btn" style="margin-top: 15px; padding: 5px 15px; font-size: 0.9rem;">🚫 Remove Wallpaper</button>
            `;

            const dropZone = mainContent.querySelector('#wp-drop-zone');
            const fileInput = mainContent.querySelector('#wp-file-input');
            const removeBtn = mainContent.querySelector('#remove-wp-btn');

            if (removeBtn) {
                removeBtn.addEventListener('click', () => {
                    document.documentElement.style.setProperty('--wallpaper', '#ffffff');
                    try { localStorage.removeItem('looney_wallpaper'); } catch (e) { }
                    try { localStorage.removeItem("wallpaper"); } catch (e) { }
                });
            }

            dropZone.addEventListener('click', () => fileInput.click());

            fileInput.addEventListener('change', (e) => {
                if (e.target.files.length > 0) {
                    applyWallpaperFromFile(e.target.files[0]);
                }
            });

            dropZone.addEventListener('dragover', (e) => {
                e.preventDefault();
                dropZone.classList.add('dragover');
            });

            dropZone.addEventListener('dragleave', () => {
                dropZone.classList.remove('dragover');
            });

            dropZone.addEventListener('drop', (e) => {
                e.preventDefault();
                e.stopPropagation();
                dropZone.classList.remove('dragover');
                if (e.dataTransfer.files.length > 0) {
                    applyWallpaperFromFile(e.dataTransfer.files[0]);
                }
            });

        } else if (tabName === 'audio') {
            let currentVol = 100;
            let data;
            try {
                data = localStorage.getItem('looney_volume');
                if (data !== null) currentVol = parseInt(data);
            } catch (e) { }

            mainContent.innerHTML = `
                <h3 style="border-bottom: 2px solid var(--black); padding-bottom: 5px; margin-bottom: 15px;">Audio Settings</h3>
                <h4 style="margin-bottom: 10px; font-size: 1rem;">Master Volume</h4>
                <div style="display: flex; align-items: center; gap: 15px;">
                    <span>🔈</span>
                    <input type="range" id="master-volume" class="sketchy-slider" min="0" max="100" value="${currentVol}">
                    <span>🔊</span>
                </div>
                <p style="font-size: 0.85rem; margin-top: 15px;">Adjusts the volume for music and future media apps.</p>
            `;

            const volSlider = mainContent.querySelector('#master-volume');
            volSlider.addEventListener('input', (e) => {
                const val = e.target.value;
                try { localStorage.setItem('looney_volume', val); } catch (err) { }
                const audios = document.querySelectorAll('audio, video');
                audios.forEach(a => a.volume = val / 100);
            });

        } else if (tabName === 'about') {
            mainContent.innerHTML = `
                <h3 style="border-bottom: 2px solid var(--black); padding-bottom: 5px; margin-bottom: 15px;">About LooneyOS</h3>
                <div style="display: flex; flex-direction: column; align-items: center; gap: 10px; margin-top: 20px;">
                    <div class="logo-mark" style="transform: scale(0.8);">
                        <div class="l-vert" style="position: absolute; left: 0; top: 0; width: 18px; height: 60px; background: var(--black); border-radius: 9px;"></div>
                        <div class="l-horiz" style="position: absolute; left: 0; bottom: 0; width: 50px; height: 18px; background: var(--black); border-radius: 9px;"></div>
                        <div class="l-end" style="position: absolute; left: 32px; bottom: 0; width: 18px; height: 35px; background: var(--black); border-radius: 9px;"></div>
                        <div class="l-dot" style="position: absolute; left: 60px; top: 12px; width: 15px; height: 15px; background: var(--black); border-radius: 50%;"></div>
                    </div>
                    <h2 style="margin: 0;">LooneyOS</h2>
                    <p style="font-weight: bold;">Version 1.0 (Sketch Edition)</p>
                    <p style="text-align: center; font-size: 0.9rem; margin-top: 10px; padding: 10px; border: 2px dashed var(--black); border-radius: var(--radius-sm);">
                        A lightweight, wireframe operating system designed entirely in HTML, CSS, and JS. Pure sketch vibes.
                    </p>
                </div>
            `;
        }
    }

    navItems.forEach(nav => {
        nav.addEventListener('click', () => {
            loadTab(nav.dataset.tab);
        });
    });

    loadTab('display');
}

function renderMusic(container) {
    container.className = 'window-content app-music';

    container.style.justifyContent = 'flex-start';
    container.style.overflowY = 'auto';

    let audioSrc = "";
    let trackName = "No track selected";
    let autoPlay = false;

    if (state.currentTrack) {
        audioSrc = state.currentTrack.data;
        trackName = state.currentTrack.name;
        autoPlay = true;
    }

    let fsItems = [];
    try {
        let data = JSON.parse(localStorage.getItem('looney_fs_items'));
        if (data) fsItems = data;
    } catch (e) { }

    const rootTracks = fsItems.filter(i => i.type === 'file' && i.path === '/Music' && !i.deleted && (i.mimeType?.startsWith('audio/') || i.data?.startsWith('data:audio')));
    const albums = fsItems.filter(i => i.type === 'folder' && i.path === '/Music' && !i.deleted);

    let libraryHtml = `<div style="width:100%; max-width: 400px; margin-top: 20px; text-align:left; border-top: 2px dashed var(--black); padding-top: 15px;">
        <h4 style="margin-bottom: 10px;">🎵 My Music Library</h4>`;

    if (albums.length === 0 && rootTracks.length === 0) {
        libraryHtml += `<p style="font-size:0.9rem; color:var(--black); opacity:0.7;">Upload mp3 files in the "Music" folder to see them here!</p>`;
    }

    if (albums.length > 0) {
        albums.forEach(album => {
            libraryHtml += `<div style="font-weight:bold; margin-top:10px; font-size:1.1rem; color:var(--black);">💿 ${album.name}</div>`;
            const albumTracks = fsItems.filter(i => i.type === 'file' && i.path === `/Music/${album.name}` && !i.deleted && (i.mimeType?.startsWith('audio/') || i.data?.startsWith('data:audio')));
            if (albumTracks.length === 0) {
                libraryHtml += `<div style="margin-left:20px; font-size:0.85rem; opacity:0.6;">(Empty Album)</div>`;
            }
            albumTracks.forEach(t => {
                libraryHtml += `<div class="lib-track" data-id="${t.id}" style="margin-left:15px; padding:5px; cursor:pointer; border-radius:var(--radius-sm); border:2px solid transparent; transition:all 0.1s; display:flex; align-items:center; gap:8px;">
                    <svg viewBox="0 0 24 24" style="width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
                    <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis; width:100%;">${t.name}</span>
                </div>`;
            });
        });
    }

    if (rootTracks.length > 0) {
        libraryHtml += `<div style="font-weight:bold; margin-top:15px; font-size:1.1rem; color:var(--black);">🎶 Singles</div>`;
        rootTracks.forEach(t => {
            libraryHtml += `<div class="lib-track" data-id="${t.id}" style="margin-left:15px; padding:5px; cursor:pointer; border-radius:var(--radius-sm); border:2px solid transparent; transition:all 0.1s; display:flex; align-items:center; gap:8px;">
                <svg viewBox="0 0 24 24" style="width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
                <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis; width:100%;">${t.name}</span>
            </div>`;
        });
    }
    libraryHtml += `</div>`;

    container.innerHTML = `
        <div style="display:flex; flex-direction:column; align-items:center; width:100%;">
            <audio class="looney-audio" ${audioSrc ? `src="${audioSrc}"` : ''} ${autoPlay ? 'autoplay' : ''}></audio>
            <div class="record-player ${state.currentTrack ? 'playing-mode' : 'empty-state'} ${autoPlay ? 'spin' : ''}">
            </div>
            <div class="track-info" style="word-break: break-all; max-width: 90%; text-align:center;">Playing: <br><span style="font-weight:normal;">${trackName}</span></div>
            
            <div class="music-timeline-wrapper" style="width: 100%; max-width: 350px; display: flex; align-items: center; gap: 10px; margin-top: 15px;">
                <span class="m-time-current" style="font-size: 0.85rem; font-weight: bold; width: 35px; text-align: right;">0:00</span>
                <input type="range" class="sketchy-slider m-timeline" min="0" max="100" value="0" step="0.1" style="flex: 1;">
                <span class="m-time-total" style="font-size: 0.85rem; font-weight: bold; width: 35px; text-align: left;">0:00</span>
            </div>

            <div class="music-controls">
                <button class="music-btn m-prev">⏮</button>
                <button class="music-btn m-play">${autoPlay ? '⏸' : '▶'}</button>
                <button class="music-btn m-next">⏭</button>
            </div>
        </div>
        ${libraryHtml}
    `;

    const audioEl = container.querySelector('.looney-audio');
    const playBtn = container.querySelector('.m-play');
    const record = container.querySelector('.record-player');
    const timeline = container.querySelector('.m-timeline');
    const timeCurrent = container.querySelector('.m-time-current');
    const timeTotal = container.querySelector('.m-time-total');

    let isLocalPlaying = autoPlay;

    try {
        let data = localStorage.getItem('looney_volume');
        if (data !== null) {
            audioEl.volume = parseInt(data) / 100;
        }
    } catch (e) { }

    function formatTime(seconds) {
        if (isNaN(seconds)) return "0:00";
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${m}:${s < 10 ? '0' + s : s}`;
    }

    audioEl.addEventListener('loadedmetadata', () => {
        timeTotal.textContent = formatTime(audioEl.duration);
    });

    audioEl.addEventListener('timeupdate', () => {
        if (!timeline.activeDrag) {
            const val = (audioEl.currentTime / audioEl.duration) * 100;
            timeline.value = val || 0;
        }
        timeCurrent.textContent = formatTime(audioEl.currentTime);
    });

    audioEl.addEventListener('ended', () => {
        isLocalPlaying = false;
        playBtn.textContent = '▶';
        record.classList.remove('spin');
        timeline.value = 0;
        timeCurrent.textContent = "0:00";
    });

    timeline.addEventListener('mousedown', () => timeline.activeDrag = true);
    timeline.addEventListener('touchstart', () => timeline.activeDrag = true, { passive: true });

    timeline.addEventListener('mouseup', () => timeline.activeDrag = false);
    timeline.addEventListener('touchend', () => timeline.activeDrag = false);

    timeline.addEventListener('input', (e) => {
        if (audioEl.duration) {
            const seekTo = (e.target.value / 100) * audioEl.duration;
            audioEl.currentTime = seekTo;
        }
    });

    playBtn.addEventListener('click', () => {
        if (!state.currentTrack) return;

        if (isLocalPlaying) {
            audioEl.pause();
            playBtn.textContent = '▶';
            record.classList.remove('spin');
        } else {
            audioEl.play().catch(e => console.log("Audio play blocked by browser:", e));
            playBtn.textContent = '⏸';
            record.classList.add('spin');
            record.classList.remove('empty-state');
            record.classList.add('playing-mode');
        }
        isLocalPlaying = !isLocalPlaying;
    });

    const bounceBtn = (e) => {
        e.target.style.transform = 'scale(0.8)';
        setTimeout(() => e.target.style.transform = 'none', 100);
    };
    container.querySelector('.m-prev').addEventListener('click', bounceBtn);
    container.querySelector('.m-next').addEventListener('click', bounceBtn);

    const handleMusicKeyDown = (e) => {
        if (!document.body.contains(container)) {
            window.removeEventListener('keydown', handleMusicKeyDown);
            return;
        }

        if (state.activeAppId !== 'music') return;
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        if (e.code === 'Space') {
            e.preventDefault();
            playBtn.click();
        } else if (e.code === 'ArrowRight') {
            e.preventDefault();
            if (audioEl.duration) audioEl.currentTime = Math.min(audioEl.duration, audioEl.currentTime + 5);
            bounceBtn({ target: container.querySelector('.m-next') });
        } else if (e.code === 'ArrowLeft') {
            e.preventDefault();
            if (audioEl.duration) audioEl.currentTime = Math.max(0, audioEl.currentTime - 5);
            bounceBtn({ target: container.querySelector('.m-prev') });
        }
    };
    window.addEventListener('keydown', handleMusicKeyDown);

    container.querySelectorAll('.lib-track').forEach(el => {
        el.onmouseenter = () => {
            el.style.border = '2px solid var(--black)';
            el.style.transform = 'translate(-2px, -2px)';
            el.style.boxShadow = '2px 2px 0px var(--black)';
        };
        el.onmouseleave = () => {
            el.style.border = '2px solid transparent';
            el.style.transform = 'none';
            el.style.boxShadow = 'none';
        };
        el.onclick = () => {
            const trackId = el.getAttribute('data-id');
            const t = fsItems.find(i => i.id === trackId);
            if (t) {
                state.currentTrack = { name: t.name, data: t.data };
                populateAppContent('music', container);
            }
        };
    });
}

function stopMusic() {
    const audios = document.querySelectorAll('.looney-audio');
    audios.forEach(audio => audio.pause());
}

function renderCalc(container) {
    container.className = 'window-content app-calc';
    container.innerHTML = `
        <div class="calc-display" id="calc-disp">0</div>
        <div class="calc-grid">
            <button class="calc-btn">C</button><button class="calc-btn">/</button><button class="calc-btn">*</button><button class="calc-btn">-</button>
            <button class="calc-btn">7</button><button class="calc-btn">8</button><button class="calc-btn">9</button><button class="calc-btn">+</button>
            <button class="calc-btn">4</button><button class="calc-btn">5</button><button class="calc-btn">6</button><button class="calc-btn" style="grid-row: span 2;">=</button>
            <button class="calc-btn">1</button><button class="calc-btn">2</button><button class="calc-btn">3</button>
            <button class="calc-btn" style="grid-column: span 2;">0</button><button class="calc-btn">.</button>
        </div>
    `;

    const display = container.querySelector('#calc-disp');
    const buttons = container.querySelectorAll('.calc-btn');
    let currentExp = '';

    function processInput(val) {
        if (val === 'C') {
            currentExp = '';
            display.textContent = '0';
        } else if (val === 'Backspace') {
            currentExp = currentExp.toString().slice(0, -1);
            display.textContent = currentExp === '' ? '0' : currentExp;
        } else if (val === '=') {
            try {
                if (currentExp !== '') {
                    currentExp = String(Function('"use strict";return (' + currentExp + ')')());
                    display.textContent = currentExp;
                }
            } catch (err) {
                display.textContent = 'Error';
                currentExp = '';
            }
        } else {
            if (currentExp === '' && val !== '.') currentExp = val;
            else currentExp += val;
            display.textContent = currentExp;
        }
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            processInput(e.target.textContent);
        });
    });

    const handleKeyDown = (e) => {
        if (!document.body.contains(container)) {
            window.removeEventListener('keydown', handleKeyDown);
            return;
        }

        if (state.activeAppId !== 'calc') return;

        const key = e.key;
        const validNumbersAndOperators = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '+', '-', '*', '/'];

        if (validNumbersAndOperators.includes(key)) {
            processInput(key);
        } else if (key === 'Enter' || key === '=') {
            e.preventDefault();
            processInput('=');
        } else if (key === 'Escape' || key.toLowerCase() === 'c') {
            processInput('C');
        } else if (key === 'Backspace') {
            processInput('Backspace');
        }

        let btnText = key === 'Enter' ? '=' : (key.toLowerCase() === 'c' || key === 'Escape' ? 'C' : key);
        buttons.forEach(btn => {
            if (btn.textContent === btnText) {
                btn.style.background = '#e0e0e0';
                btn.style.transform = 'translate(2px, 2px)';
                btn.style.boxShadow = '0px 0px 0px var(--black)';
                setTimeout(() => {
                    btn.style.background = 'var(--white)';
                    btn.style.transform = '';
                    btn.style.boxShadow = '2px 2px 0px var(--black)';
                }, 100);
            }
        });
    };

    window.addEventListener('keydown', handleKeyDown);
}

function renderDoodle(container) {
    container.className = 'window-content app-doodle';
    container.innerHTML = `
        <div class="doodle-tools">
            <div class="doodle-palette">
                <div class="color-btn active" style="background: #000000;" data-color="#000000"></div>
                <div class="color-btn" style="background: #ff3333;" data-color="#ff3333"></div>
                <div class="color-btn" style="background: #3333ff;" data-color="#3333ff"></div>
                <div class="color-btn" style="background: #33cc33;" data-color="#33cc33"></div>
                
                <div style="width: 2px; height: 20px; background: var(--black); margin-left: 5px; opacity: 0.3; border-radius: 2px;"></div>
                
                <div class="color-btn" style="background: #ffffff; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: bold; margin-left: 5px;" data-color="#ffffff" title="Eraser">E</div>
            </div>
            
            <div class="doodle-palette" style="margin-left: 60px;">
                <button class="size-btn active" data-size="2" style="width: 14px; height: 14px;" title="Small"></button>
                <button class="size-btn" data-size="6" style="width: 20px; height: 20px;" title="Medium"></button>
                <button class="size-btn" data-size="12" style="width: 28px; height: 28px;" title="Large"></button>
            </div>
            <button class="looney-btn clear-btn" style="padding: 2px 8px; font-size: 0.8rem; margin-left: auto;">🗑️ Clear</button>
        </div>
        <div class="doodle-viewport">
            <canvas class="doodle-canvas" width="3000" height="3000"></canvas>
        </div>
    `;

    const canvas = container.querySelector('.doodle-canvas');
    const ctx = canvas.getContext('2d');
    const viewport = container.querySelector('.doodle-viewport');
    const clearBtn = container.querySelector('.clear-btn');

    let isDrawing = false;
    let isPanning = false;
    let currentColor = '#000000';
    let currentSize = 2;

    let scale = 1;
    let panX = 0;
    let panY = 0;
    let panStartX, panStartY;

    viewport.addEventListener('contextmenu', e => {
        e.preventDefault();
        e.stopPropagation();
    });

    setTimeout(() => {
        panX = (viewport.clientWidth - 3000) / 2;
        panY = (viewport.clientHeight - 3000) / 2;
        updateTransform();
    }, 10);

    function updateTransform() {
        canvas.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
    }

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const colorBtns = container.querySelectorAll('.color-btn');
    colorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            colorBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentColor = btn.dataset.color;
        });
    });

    const sizeBtns = container.querySelectorAll('.size-btn');
    sizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sizeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSize = parseInt(btn.dataset.size);
        });
    });

    function getCoords(e) {
        const rect = viewport.getBoundingClientRect();
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);

        const mouseX = clientX - rect.left;
        const mouseY = clientY - rect.top;

        return {
            x: (mouseX - panX) / scale,
            y: (mouseY - panY) / scale
        };
    }

    viewport.addEventListener('wheel', (e) => {
        e.preventDefault();
        const zoomFactor = 1.1;
        const newScale = e.deltaY < 0 ? scale * zoomFactor : scale / zoomFactor;
        const clampedScale = Math.min(Math.max(0.1, newScale), 5);

        const rect = viewport.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        panX = mouseX - (mouseX - panX) * (clampedScale / scale);
        panY = mouseY - (mouseY - panY) * (clampedScale / scale);
        scale = clampedScale;

        updateTransform();
    }, { passive: false });

    viewport.addEventListener('mousedown', (e) => {
        if (e.button === 2 || e.button === 1) {
            isPanning = true;
            panStartX = e.clientX - panX;
            panStartY = e.clientY - panY;
            canvas.style.cursor = 'grabbing';
        } else if (e.button === 0) {
            isDrawing = true;
            ctx.lineWidth = currentSize;
            ctx.strokeStyle = currentColor;
            const { x, y } = getCoords(e);
            ctx.beginPath();
            ctx.moveTo(x, y);
        }
    });

    window.addEventListener('mousemove', (e) => {
        if (isPanning) {
            panX = e.clientX - panStartX;
            panY = e.clientY - panStartY;
            updateTransform();
        } else if (isDrawing) {
            const { x, y } = getCoords(e);
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x, y);
        }
    });

    window.addEventListener('mouseup', (e) => {
        if (isPanning) {
            isPanning = false;
            canvas.style.cursor = 'crosshair';
        }
        if (isDrawing) {
            isDrawing = false;
        }
    });

    viewport.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            e.preventDefault();
            isDrawing = true;
            ctx.lineWidth = currentSize;
            ctx.strokeStyle = currentColor;
            const { x, y } = getCoords(e);
            ctx.beginPath();
            ctx.moveTo(x, y);
        }
    }, { passive: false });

    viewport.addEventListener('touchmove', (e) => {
        if (isDrawing && e.touches.length === 1) {
            e.preventDefault();
            const { x, y } = getCoords(e);
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x, y);
        }
    }, { passive: false });

    viewport.addEventListener('touchend', (e) => {
        isDrawing = false;
    });

    clearBtn.addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    });
}

function renderGame(container) {
    container.className = 'window-content app-game';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.height = '100%';

    container.innerHTML = `
        <div style="display:flex; justify-content:space-between; padding: 10px; border-bottom: 2px solid var(--black); font-weight: bold; background: var(--white);">
            <span>Score: <span class="g-score">0</span></span>
            <span>High Score: <span class="g-hi">0</span></span>
        </div>
        <div class="game-viewport" style="flex:1; position:relative; overflow:hidden; background: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 12px);">
            <canvas class="game-canvas" style="display:block; width:100%; height:100%; touch-action: none;"></canvas>
            <div class="g-overlay" style="position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(255,255,255,0.85); display:flex; flex-direction:column; align-items:center; justify-content:center;">
                <h2 style="margin-bottom: 10px; font-size: 2rem;">Avoid Blocks</h2>
                <p style="font-size: 1rem; margin-bottom: 20px; font-weight: bold;">Use ⬅️ / ➡️ Arrows or Tap Sides</p>
                <button class="looney-btn g-start">🎮 Play</button>
            </div>
        </div>
    `;

    const canvas = container.querySelector('.game-canvas');
    const ctx = canvas.getContext('2d');
    const overlay = container.querySelector('.g-overlay');
    const startBtn = container.querySelector('.g-start');
    const scoreEl = container.querySelector('.g-score');
    const hiScoreEl = container.querySelector('.g-hi');

    let animId;
    let isPlaying = false;
    let score = 0;
    let hiScore = 0;
    try {
        let data = localStorage.getItem('looney_game_hi');
        if (data !== null) hiScore = parseInt(data) || 0;
    } catch (e) { }
    hiScoreEl.textContent = hiScore;

    let player = { x: 0, y: 0, w: 30, h: 30, speed: 6, dx: 0 };
    let keys = { left: false, right: false };
    let blocks = [];
    let frameCount = 0;
    let blockSpeed = 2.5;

    const resizeObserver = new ResizeObserver(() => {
        if (canvas.parentElement) {
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
            if (!isPlaying && !animId) {
                player.x = canvas.width / 2 - player.w / 2;
                player.y = canvas.height - player.h - 20;
                draw();
            }
        }
    });
    resizeObserver.observe(canvas.parentElement);

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.lineWidth = 3;
        ctx.strokeStyle = '#000000';
        ctx.fillStyle = '#ffffff';

        ctx.beginPath();
        ctx.roundRect(player.x, player.y, player.w, player.h, 4);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeRect(player.x + 6, player.y + 6, 4, 4);
        ctx.strokeRect(player.x + 20, player.y + 6, 4, 4);

        blocks.forEach(b => {
            ctx.beginPath();
            ctx.roundRect(b.x, b.y, b.w, b.h, 2);
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(b.x, b.y);
            ctx.lineTo(b.x + b.w, b.y + b.h);
            ctx.moveTo(b.x + b.w, b.y);
            ctx.lineTo(b.x, b.y + b.h);
            ctx.stroke();
        });
    }

    function update() {
        if (!isPlaying) return;

        player.dx = 0;
        if (keys.left) player.dx -= player.speed;
        if (keys.right) player.dx += player.speed;

        player.x += player.dx;
        if (player.x < 0) player.x = 0;
        if (player.x + player.w > canvas.width) player.x = canvas.width - player.w;

        frameCount++;
        if (frameCount % Math.max(20, 60 - Math.floor(score / 150)) === 0) {
            let bw = 30 + Math.random() * 50;
            let bx;

            let edgeRoll = Math.random();
            if (edgeRoll < 0.20) {
                bx = 0;
            } else if (edgeRoll < 0.40) {
                bx = canvas.width - bw;
            } else {
                bx = Math.random() * (canvas.width - bw);
            }

            blocks.push({
                x: bx,
                y: -50,
                w: bw,
                h: 20 + Math.random() * 20
            });
        }

        for (let i = 0; i < blocks.length; i++) {
            let b = blocks[i];
            b.y += blockSpeed;

            let pPad = 4;
            if (player.x + pPad < b.x + b.w && player.x + player.w - pPad > b.x &&
                player.y + pPad < b.y + b.h && player.y + player.h - pPad > b.y) {
                gameOver();
                return;
            }
        }

        blocks = blocks.filter(b => b.y < canvas.height + 50);

        score++;
        scoreEl.textContent = score;
        if (score % 300 === 0) blockSpeed += 0.3;

        draw();
        animId = requestAnimationFrame(update);
    }

    function startGame() {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
        player.x = canvas.width / 2 - player.w / 2;
        player.y = canvas.height - player.h - 20;
        keys.left = false;
        keys.right = false;
        blocks = [];
        score = 0;
        blockSpeed = 2.5;
        frameCount = 0;
        isPlaying = true;
        overlay.style.display = 'none';
        update();
    }

    function gameOver() {
        isPlaying = false;
        cancelAnimationFrame(animId);
        animId = null;
        if (score > hiScore) {
            hiScore = score;
            try { localStorage.setItem('looney_game_hi', hiScore); } catch (e) { }
            hiScoreEl.textContent = hiScore;
        }
        overlay.style.display = 'flex';
        overlay.innerHTML = `
            <h2 style="margin-bottom: 10px; font-size: 2rem;">Game Over!</h2>
            <p style="font-size: 1.1rem; margin-bottom: 15px; font-weight:bold;">Score: ${score}</p>
            <button class="looney-btn g-start">🔄 Try Again</button>
        `;
        overlay.querySelector('.g-start').onclick = startGame;
    }

    startBtn.onclick = startGame;

    const handleKeyDown = (e) => {
        if (!document.body.contains(container)) {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            cancelAnimationFrame(animId);
            return;
        }
        if (state.activeAppId !== 'game') return;

        if (e.key === 'ArrowLeft') keys.left = true;
        if (e.key === 'ArrowRight') keys.right = true;
        if (e.key === ' ' && overlay.style.display !== 'none') { e.preventDefault(); startGame(); }
    };
    const handleKeyUp = (e) => {
        if (state.activeAppId !== 'game') return;
        if (e.key === 'ArrowLeft') keys.left = false;
        if (e.key === 'ArrowRight') keys.right = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const handleSidePress = (e) => {
        e.preventDefault();
        if (!isPlaying) return;
        let clientX;
        if (e.type === 'touchstart') clientX = e.touches[0].clientX;
        else clientX = e.clientX;

        const rect = canvas.getBoundingClientRect();
        const x = clientX - rect.left;
        if (x < canvas.width / 2) { keys.left = true; keys.right = false; }
        else { keys.right = true; keys.left = false; }
    };
    const handleSideRelease = (e) => {
        e.preventDefault();
        keys.left = false;
        keys.right = false;
    };

    canvas.addEventListener('touchstart', handleSidePress, { passive: false });
    canvas.addEventListener('mousedown', handleSidePress);

    canvas.addEventListener('touchend', handleSideRelease, { passive: false });
    canvas.addEventListener('mouseup', handleSideRelease);
    canvas.addEventListener('mouseleave', handleSideRelease);
}

function renderSnake(container) {
    container.className = 'window-content app-snake';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.height = '100%';

    container.innerHTML = `
        <div style="display:flex; justify-content:space-between; padding: 10px; border-bottom: 2px solid var(--black); font-weight: bold; background: var(--white);">
            <span>Score: <span class="s-score">0</span></span>
            <span>High Score: <span class="s-hi">0</span></span>
        </div>
        <div class="snake-viewport" style="flex:1; position:relative; overflow:hidden; background: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 12px); display: flex; align-items: center; justify-content: center; padding: 10px;">
            <canvas class="snake-canvas" style="display:block; border: 2px solid var(--black); background: var(--white); box-shadow: 4px 4px 0px var(--black); touch-action: none; max-width: 100%; max-height: 100%;"></canvas>
            <div class="s-overlay" style="position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(255,255,255,0.85); display:flex; flex-direction:column; align-items:center; justify-content:center; z-index: 10;">
                <h2 style="margin-bottom: 10px; font-size: 2rem;">Snake Classic</h2>
                <p style="font-size: 1rem; margin-bottom: 20px; font-weight: bold; text-align: center;">Use Arrows / WASD<br>or Drag/Swipe on screen</p>
                <button class="looney-btn s-start">🍎 Play</button>
            </div>
        </div>
    `;

    const canvas = container.querySelector('.snake-canvas');
    const ctx = canvas.getContext('2d');
    const overlay = container.querySelector('.s-overlay');
    const startBtn = container.querySelector('.s-start');
    const scoreEl = container.querySelector('.s-score');
    const hiScoreEl = container.querySelector('.s-hi');

    let gameInterval;
    let isPlaying = false;
    let score = 0;
    let hiScore = 0;
    try {
        let data = localStorage.getItem('looney_snake_hi');
        if (data !== null) hiScore = parseInt(data) || 0;
    } catch (e) { }
    hiScoreEl.textContent = hiScore;

    const gridSize = 20;
    let tileCountX, tileCountY;
    let snake = [];
    let food = { x: 0, y: 0 };
    let dx = 1, dy = 0;
    let nextDx = 1, nextDy = 0;

    function setupCanvas() {
        const parent = canvas.parentElement;
        let maxW = parent.clientWidth - 20;
        let maxH = parent.clientHeight - 20;

        tileCountX = Math.floor(maxW / gridSize);
        tileCountY = Math.floor(maxH / gridSize);

        canvas.width = tileCountX * gridSize;
        canvas.height = tileCountY * gridSize;
    }

    const resizeObserver = new ResizeObserver(() => {
        if (canvas.parentElement && !isPlaying) {
            setupCanvas();
            drawInitial();
        }
    });
    resizeObserver.observe(canvas.parentElement);

    function spawnFood() {
        let valid = false;
        while (!valid) {
            food.x = Math.floor(Math.random() * tileCountX);
            food.y = Math.floor(Math.random() * tileCountY);
            valid = true;
            for (let part of snake) {
                if (part.x === food.x && part.y === food.y) {
                    valid = false; break;
                }
            }
        }
    }

    function drawSketchyBox(x, y, isHead) {
        let pad = 2;

        if (isHead) {
            ctx.fillStyle = "#ffffff";
            ctx.beginPath();
            ctx.roundRect(x * gridSize + 1, y * gridSize + 1, gridSize - 2, gridSize - 2, 4);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = "#000000";
            let eyeOffset = 5;
            let eyeSize = 3;

            ctx.beginPath();
            if (dx === 1) {
                ctx.fillRect(x * gridSize + gridSize - eyeOffset * 2, y * gridSize + 4, eyeSize, eyeSize);
                ctx.fillRect(x * gridSize + gridSize - eyeOffset * 2, y * gridSize + gridSize - 7, eyeSize, eyeSize);
                ctx.moveTo(x * gridSize + gridSize - 1, y * gridSize + gridSize / 2); ctx.lineTo(x * gridSize + gridSize + 4, y * gridSize + gridSize / 2);
            } else if (dx === -1) {
                ctx.fillRect(x * gridSize + eyeOffset, y * gridSize + 4, eyeSize, eyeSize);
                ctx.fillRect(x * gridSize + eyeOffset, y * gridSize + gridSize - 7, eyeSize, eyeSize);
                ctx.moveTo(x * gridSize + 1, y * gridSize + gridSize / 2); ctx.lineTo(x * gridSize - 4, y * gridSize + gridSize / 2);
            } else if (dy === -1) {
                ctx.fillRect(x * gridSize + 4, y * gridSize + eyeOffset, eyeSize, eyeSize);
                ctx.fillRect(x * gridSize + gridSize - 7, y * gridSize + eyeOffset, eyeSize, eyeSize);
                ctx.moveTo(x * gridSize + gridSize / 2, y * gridSize + 1); ctx.lineTo(x * gridSize + gridSize / 2, y * gridSize - 4);
            } else {
                ctx.fillRect(x * gridSize + 4, y * gridSize + gridSize - eyeOffset * 2, eyeSize, eyeSize);
                ctx.fillRect(x * gridSize + gridSize - 7, y * gridSize + gridSize - eyeOffset * 2, eyeSize, eyeSize);
                ctx.moveTo(x * gridSize + gridSize / 2, y * gridSize + gridSize - 1); ctx.lineTo(x * gridSize + gridSize / 2, y * gridSize + 4);
            }
            ctx.stroke();
        } else {
            ctx.fillStyle = "#000000";
            ctx.beginPath();
            ctx.roundRect(x * gridSize + pad, y * gridSize + pad, gridSize - pad * 2, gridSize - pad * 2, 2);
            ctx.fill();
            ctx.stroke();
        }
    }

    function draw() {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.lineWidth = 2;
        ctx.strokeStyle = "#000000";

        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(food.x * gridSize + gridSize / 2, food.y * gridSize + gridSize / 2, gridSize / 2 - 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(food.x * gridSize + gridSize / 2, food.y * gridSize + gridSize / 2 - (gridSize / 2 - 2));
        ctx.lineTo(food.x * gridSize + gridSize / 2 + 3, food.y * gridSize + gridSize / 2 - (gridSize / 2 + 2));
        ctx.stroke();

        ctx.fillStyle = "#000000";
        for (let i = 0; i < snake.length; i++) {
            drawSketchyBox(snake[i].x, snake[i].y, i === 0);
        }
    }

    function drawInitial() {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#000000";
        ctx.font = "1.2rem 'Architects Daughter'";
        ctx.textAlign = "center";
        ctx.fillText("Ready to slither?", canvas.width / 2, canvas.height / 2);
    }

    function update() {
        if (!isPlaying) return;

        dx = nextDx;
        dy = nextDy;

        let headX = snake[0].x + dx;
        let headY = snake[0].y + dy;

        if (headX < 0 || headX >= tileCountX || headY < 0 || headY >= tileCountY) {
            gameOver();
            return;
        }

        for (let part of snake) {
            if (part.x === headX && part.y === headY) {
                gameOver();
                return;
            }
        }

        snake.unshift({ x: headX, y: headY });

        if (headX === food.x && headY === food.y) {
            score += 10;
            scoreEl.textContent = score;
            spawnFood();

            let newSpeed = Math.max(50, 150 - Math.floor(score / 3));
            clearInterval(gameInterval);
            gameInterval = setInterval(update, newSpeed);
        } else {
            snake.pop();
        }

        draw();
    }

    function startGame() {
        setupCanvas();
        snake = [
            { x: Math.floor(tileCountX / 2), y: Math.floor(tileCountY / 2) },
            { x: Math.floor(tileCountX / 2) - 1, y: Math.floor(tileCountY / 2) },
            { x: Math.floor(tileCountX / 2) - 2, y: Math.floor(tileCountY / 2) }
        ];
        dx = 1; dy = 0;
        nextDx = 1; nextDy = 0;
        score = 0;
        scoreEl.textContent = score;
        spawnFood();

        isPlaying = true;
        overlay.style.display = 'none';

        if (gameInterval) clearInterval(gameInterval);
        gameInterval = setInterval(update, 150);
    }

    function gameOver() {
        isPlaying = false;
        clearInterval(gameInterval);
        if (score > hiScore) {
            hiScore = score;
            try { localStorage.setItem('looney_snake_hi', hiScore); } catch (e) { }
            hiScoreEl.textContent = hiScore;
        }
        overlay.style.display = 'flex';
        overlay.innerHTML = `
            <h2 style="margin-bottom: 10px; font-size: 2rem;">Game Over!</h2>
            <p style="font-size: 1.1rem; margin-bottom: 15px; font-weight:bold;">Score: ${score}</p>
            <button class="looney-btn s-start">🔄 Play Again</button>
        `;
        overlay.querySelector('.s-start').onclick = startGame;
    }

    startBtn.onclick = startGame;

    const handleKeyDown = (e) => {
        if (!document.body.contains(container)) {
            window.removeEventListener('keydown', handleKeyDown);
            if (gameInterval) clearInterval(gameInterval);
            return;
        }
        if (state.activeAppId !== 'snake') return;

        if (e.key === ' ' && overlay.style.display !== 'none') { e.preventDefault(); startGame(); return; }
        if (!isPlaying) return;

        if ((e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') && dy !== 1) { nextDx = 0; nextDy = -1; e.preventDefault(); }
        if ((e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') && dy !== -1) { nextDx = 0; nextDy = 1; e.preventDefault(); }
        if ((e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') && dx !== 1) { nextDx = -1; nextDy = 0; e.preventDefault(); }
        if ((e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') && dx !== -1) { nextDx = 1; nextDy = 0; e.preventDefault(); }
    };

    window.addEventListener('keydown', handleKeyDown);

    let pointerStartX = 0;
    let pointerStartY = 0;
    let isSwiping = false;

    const handlePointerDown = (e) => {
        if (e.target.tagName === 'BUTTON') return;
        e.preventDefault();
        isSwiping = true;
        if (e.type === 'touchstart') {
            pointerStartX = e.touches[0].clientX;
            pointerStartY = e.touches[0].clientY;
        } else {
            pointerStartX = e.clientX;
            pointerStartY = e.clientY;
        }
    };

    const handlePointerMove = (e) => {
        if (isSwiping) e.preventDefault();
    };

    const handlePointerUp = (e) => {
        if (!isSwiping) return;
        isSwiping = false;
        if (!isPlaying) return;

        let pointerEndX, pointerEndY;
        if (e.type === 'touchend') {
            pointerEndX = e.changedTouches[0].clientX;
            pointerEndY = e.changedTouches[0].clientY;
        } else {
            pointerEndX = e.clientX;
            pointerEndY = e.clientY;
        }

        let deltaX = pointerEndX - pointerStartX;
        let deltaY = pointerEndY - pointerStartY;

        if (Math.abs(deltaX) < 30 && Math.abs(deltaY) < 30) return;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 0 && dx !== -1) { 
                nextDx = 1; nextDy = 0; 
            }
            else if (deltaX < 0 && dx !== 1) { 
                nextDx = -1; nextDy = 0; 
            }
        } else {
            if (deltaY > 0 && dy !== -1) {  
                nextDx = 0; nextDy = 1; 
            }
            else if (deltaY < 0 && dy !== 1) { 
                nextDx = 0; nextDy = -1; 
            }
        }
    };

    canvas.addEventListener('touchstart', handlePointerDown, { passive: false });
    canvas.addEventListener('mousedown', handlePointerDown);

    canvas.addEventListener('touchmove', handlePointerMove, { passive: false });

    canvas.addEventListener('touchend', handlePointerUp, { passive: false });
    canvas.addEventListener('mouseup', handlePointerUp);
    canvas.addEventListener('mouseleave', () => isSwiping = false);
}

window.addEventListener('error', (e) => {
    console.error("Global Error:", e.message);
});

window.addEventListener('load', runBoot);

window.alert = function(message) {
    let overlay = document.getElementById('looney-alert-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'looney-alert-overlay';
        overlay.innerHTML = `
            <div class="looney-alert-box">
                <div class="looney-alert-msg" id="looney-alert-text"></div>
                <button class="looney-btn" id="looney-alert-btn" style="align-self: center; padding: 5px 25px;">OK</button>
            </div>
        `;
        document.body.appendChild(overlay);
        document.getElementById('looney-alert-btn').addEventListener('click', () => {
            overlay.classList.remove('active');
        });
    }
    document.getElementById('looney-alert-text').innerHTML = message;
    overlay.classList.add('active');
};