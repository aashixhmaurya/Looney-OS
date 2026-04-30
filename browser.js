document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.browser-input');
    const goBtn = document.querySelector('.b-go');
    const backBtn = document.querySelector('.b-back');
    const fwdBtn = document.querySelector('.b-fwd');
    const refreshBtn = document.querySelector('.b-refresh');
    const homeBtn = document.querySelector('.b-home');
    const extBtn = document.querySelector('.b-ext');
    const iframe = document.querySelector('.browser-iframe');

    let historyUrls = ['https://www.google.com/webhp?igu=1'];
    let currIndex = 0;

    function loadUrl(url, addToHistory = true) {
        iframe.src = url;
        if (addToHistory) {
            historyUrls = historyUrls.slice(0, currIndex + 1);
            historyUrls.push(url);
            currIndex++;
        }

        if (url.includes('google.com/search')) {
            try {
                const params = new URLSearchParams(url.split('?')[1]);
                if (params.has('q')) input.value = params.get('q');
                else input.value = url;
            } catch (e) { input.value = url; }
        } else {
            input.value = url;
        }
    }

    function navigate() {
        let query = input.value.trim();
        if (!query) return;

        let finalUrl;
        if (query.includes(' ') || (!query.includes('.') && !query.startsWith('http'))) {
            finalUrl = 'https://www.google.com/search?igu=1&q=' + encodeURIComponent(query);
        } else {
            if (!query.startsWith('http://') && !query.startsWith('https://')) {
                finalUrl = 'https://' + query;
            } else {
                finalUrl = query;
            }
        }
        loadUrl(finalUrl);
    }

    goBtn.addEventListener('click', navigate);

    extBtn.addEventListener('click', () => {
        let u = input.value.trim() || iframe.src;
        if (u && !u.startsWith('http://') && !u.startsWith('https://')) {
            if (u.includes(' ') || !u.includes('.')) {
                u = 'https://www.google.com/search?q=' + encodeURIComponent(u);
            } else {
                u = 'https://' + u;
            }
        }
        window.open(u, '_blank');
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') navigate();
    });

    backBtn.addEventListener('click', () => {
        if (currIndex > 0) {
            currIndex--;
            loadUrl(historyUrls[currIndex], false);
        }
    });

    fwdBtn.addEventListener('click', () => {
        if (currIndex < historyUrls.length - 1) {
            currIndex++;
            loadUrl(historyUrls[currIndex], false);
        }
    });

    refreshBtn.addEventListener('click', () => {
        iframe.src = iframe.src;
    });

    homeBtn.addEventListener('click', () => {
        loadUrl('https://www.google.com/webhp?igu=1');
        input.value = '';
    });
});