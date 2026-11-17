// Real-Time Taskbar Clock & Date
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    
    const month = String(now.getMonth() + 1);
    const day = String(now.getDate());
    const year = now.getFullYear();

    document.getElementById('clock-time').textContent = `${hours}:${minutes} ${ampm}`;
    document.getElementById('clock-date').textContent = `${month}/${day}/${year}`;
}

setInterval(updateClock, 1000);
updateClock();

// Global Language State ('en' or 'jp')
let currentGlobalLang = 'en';

// Window Management
function openWindow(type) {
    const win = document.getElementById('win-window');
    const title = document.getElementById('win-title');
    const content = document.getElementById('win-content');

    win.style.display = 'flex';

    if (type === 'wardrobe') {
        title.textContent = 'artazaun // wardrobe archive';
        content.innerHTML = `
            <div class="editorial-grid">
                <!-- Top Row - Item 1: Aelfric Eden Plaid Embroidery Shirt -->
                <div class="lookbook-item">
                    <a href="https://www.aelfriceden.com" target="_blank" class="item-image-box" style="text-decoration: none;">
                        <img src="wardrobe items/IMG_3393.jpeg" alt="Aelfric Eden Plaid Embroidery Shirt">
                    </a>
                    <div class="item-meta">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span class="item-title">AELFRIC EDEN PLAID EMBROIDERY SHIRT</span>
                            <span style="font-size: 9px; background: #111; color: #fff; padding: 2px 6px; border-radius: 2px; font-weight: 600; letter-spacing: 0.5px;">SOLD OUT</span>
                        </div>
                        <div class="item-desc" 
                             data-en="By far one of my favorite shirts. The bird houses are a really nice touch and will certainly bring some life into your outfit." 
                             data-jp="一番お気に入りのシャツの一つ。鳥小屋のデザインが良いアクセントになって、コーディネートに間違いなく個性をプラスしてくれる。">
                            By far one of my favorite shirts. The bird houses are a really nice touch and will certainly bring some life into your outfit.
                        </div>
                    </div>
                </div>

                <!-- Top Row - Slot 2 -->
                <div class="lookbook-item">
                    <div class="item-image-box">
                        <span class="empty-slot-content">+ ADD ITEM 02</span>
                    </div>
                    <div class="item-meta">
                        <span class="item-title">ARCHIVE SLOT 02</span>
                        <div class="item-desc" data-en="Awaiting curation..." data-jp="キュレーション待ち...">Awaiting curation...</div>
                    </div>
                </div>

                <!-- Top Row - Slot 3 -->
                <div class="lookbook-item">
                    <div class="item-image-box">
                        <span class="empty-slot-content">+ ADD ITEM 03</span>
                    </div>
                    <div class="item-meta">
                        <span class="item-title">ARCHIVE SLOT 03</span>
                        <div class="item-desc" data-en="Awaiting curation..." data-jp="キュレーション待ち...">Awaiting curation...</div>
                    </div>
                </div>

                <!-- Top Row - Slot 4 -->
                <div class="lookbook-item">
                    <div class="item-image-box">
                        <span class="empty-slot-content">+ ADD ITEM 04</span>
                    </div>
                    <div class="item-meta">
                        <span class="item-title">ARCHIVE SLOT 04</span>
                        <div class="item-desc" data-en="Awaiting curation..." data-jp="キュレーション待ち...">Awaiting curation...</div>
                    </div>
                </div>

                <!-- Bottom Row - Slot 5 -->
                <div class="lookbook-item">
                    <div class="item-image-box">
                        <span class="empty-slot-content">+ ADD ITEM 05</span>
                    </div>
                    <div class="item-meta">
                        <span class="item-title">ARCHIVE SLOT 05</span>
                        <div class="item-desc" data-en="Awaiting curation..." data-jp="キュレーション待ち...">Awaiting curation...</div>
                    </div>
                </div>

                <!-- Bottom Row - Slot 6 -->
                <div class="lookbook-item">
                    <div class="item-image-box">
                        <span class="empty-slot-content">+ ADD ITEM 06</span>
                    </div>
                    <div class="item-meta">
                        <span class="item-title">ARCHIVE SLOT 06</span>
                        <div class="item-desc" data-en="Awaiting curation..." data-jp="キュレーション待ち...">Awaiting curation...</div>
                    </div>
                </div>

                <!-- Bottom Row - Slot 7 -->
                <div class="lookbook-item">
                    <div class="item-image-box">
                        <span class="empty-slot-content">+ ADD ITEM 07</span>
                    </div>
                    <div class="item-meta">
                        <span class="item-title">ARCHIVE SLOT 07</span>
                        <div class="item-desc" data-en="Awaiting curation..." data-jp="キュレーション待ち...">Awaiting curation...</div>
                    </div>
                </div>

                <!-- Bottom Row - Slot 8 -->
                <div class="lookbook-item">
                    <div class="item-image-box">
                        <span class="empty-slot-content">+ ADD ITEM 08</span>
                    </div>
                    <div class="item-meta">
                        <span class="item-title">ARCHIVE SLOT 08</span>
                        <div class="item-desc" data-en="Awaiting curation..." data-jp="キュレーション待ち...">Awaiting curation...</div>
                    </div>
                </div>
            </div>
        `;
    } else if (type === 'japanese') {
        title.textContent = 'artazaun // japanese immersion';
        content.innerHTML = '<div style="padding: 20px; font-family: monospace;">Anki decks and kana modules go here.</div>';
    } else if (type === 'photography') {
        title.textContent = 'artazaun // photography archive';
        content.innerHTML = '<div style="padding: 20px; font-family: monospace;">Street photography lookbooks go here.</div>';
    }
}

// Global JP/ENG Language Toggle Switch
function toggleGlobalLanguage() {
    currentGlobalLang = currentGlobalLang === 'en' ? 'jp' : 'en';
    const descElements = document.querySelectorAll('.item-desc');
    
    descElements.forEach(el => {
        const text = el.getAttribute(`data-${currentGlobalLang}`);
        if (text) {
            el.textContent = text;
        }
    });
}

function closeWindow() {
    document.getElementById('win-window').style.display = 'none';
}

function minimizeWindow() {
    document.getElementById('win-window').style.display = 'none';
}

function maximizeWindow() {
    const win = document.getElementById('win-window');
    if (win.style.width === '100vw') {
        win.style.width = '96vw';
        win.style.height = '93vh';
        win.style.top = '2vh';
        win.style.left = '2vw';
    } else {
        win.style.width = '100vw';
        win.style.height = 'calc(100vh - 40px)';
        win.style.top = '0';
        win.style.left = '0';
        win.style.borderRadius = '0';
    }
}

// Window Dragging Functionality
let isDragging = false;
let offsetX, offsetY;

function startDrag(e) {
    isDragging = true;
    const win = document.getElementById('win-window');
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;

    document.addEventListener('mousemove', dragWindow);
    document.addEventListener('mouseup', stopDrag);
}

function dragWindow(e) {
    if (!isDragging) return;
    const win = document.getElementById('win-window');
    win.style.left = (e.clientX - offsetX) + 'px';
    win.style.top = (e.clientY - offsetY) + 'px';
}

function stopDrag() {
    isDragging = false;
    document.removeEventListener('mousemove', dragWindow);
    document.removeEventListener('mouseup', stopDrag);
}