/**
 * Media Browser Module (UDP-only)
 *
 * Keeps the Music Assistant browser placeholder while removing Spotify app
 * browser/source switching from the add-on UI.
 */

import { lastTrackInfo } from './state.js';

const MA_BROWSER_URL = '/media-browser/?source=music_assistant';

export function setupMediaBrowser() {
    const mediaBrowserBtn = document.getElementById('btn-media-browser');
    const modal = document.getElementById('media-browser-modal');
    const iframe = document.getElementById('media-browser-frame');
    const closeBtn = document.getElementById('media-browser-close');
    const refreshBtn = document.getElementById('media-browser-refresh');
    const devicesBtn = document.getElementById('media-browser-devices');
    const toggleBtn = document.getElementById('media-browser-toggle-source');

    if (!mediaBrowserBtn || !modal || !iframe) return;

    if (toggleBtn) {
        toggleBtn.style.display = 'none';
    }

    mediaBrowserBtn.addEventListener('click', () => {
        iframe.src = MA_BROWSER_URL;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    closeBtn?.addEventListener('click', () => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    });

    refreshBtn?.addEventListener('click', () => {
        iframe.src = MA_BROWSER_URL;
    });

    devicesBtn?.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('open-device-picker', {
            detail: { source: 'music_assistant' }
        }));
    });
}

export function updateMediaBrowserIcon() {
    const btn = document.getElementById('btn-media-browser');
    if (!btn) return;
    btn.title = lastTrackInfo?.source === 'music_assistant'
        ? 'Music Assistant Browser'
        : 'Music Assistant Browser (optional)';
}
