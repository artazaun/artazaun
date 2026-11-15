// Complete Basic Hiragana & Katakana Datasets
const hiraganaList = [
    { char: 'あ', romaji: 'a' }, { char: 'い', romaji: 'i' }, { char: 'う', romaji: 'u' }, { char: 'え', romaji: 'e' }, { char: 'お', romaji: 'o' },
    { char: 'か', romaji: 'ka' }, { char: 'き', romaji: 'ki' }, { char: 'く', romaji: 'ku' }, { char: 'け', romaji: 'ke' }, { char: 'こ', romaji: 'ko' },
    { char: 'さ', romaji: 'sa' }, { char: 'し', romaji: 'shi' }, { char: 'す', romaji: 'su' }, { char: 'せ', romaji: 'se' }, { char: 'そ', romaji: 'so' },
    { char: 'た', romaji: 'ta' }, { char: 'ち', romaji: 'chi' }, { char: 'つ', romaji: 'tsu' }, { char: 'て', romaji: 'te' }, { char: 'と', romaji: 'to' },
    { char: 'な', romaji: 'na' }, { char: 'に', romaji: 'ni' }, { char: 'ぬ', romaji: 'nu' }, { char: 'ね', romaji: 'ne' }, { char: 'の', romaji: 'no' },
    { char: 'は', romaji: 'ha' }, { char: 'ひ', romaji: 'hi' }, { char: 'ふ', romaji: 'fu' }, { char: 'へ', romaji: 'he' }, { char: 'ほ', romaji: 'ho' },
    { char: 'ま', romaji: 'ma' }, { char: 'み', romaji: 'mi' }, { char: 'む', romaji: 'mu' }, { char: 'め', romaji: 'me' }, { char: 'も', romaji: 'mo' },
    { char: 'や', romaji: 'ya' }, { char: 'ゆ', romaji: 'yu' }, { char: 'よ', romaji: 'yo' },
    { char: 'ら', romaji: 'ra' }, { char: 'り', romaji: 'ri' }, { char: 'る', romaji: 'ru' }, { char: 'れ', romaji: 're' }, { char: 'ろ', romaji: 'ro' },
    { char: 'わ', romaji: 'wa' }, { char: 'を', romaji: 'wo' }, { char: 'ん', romaji: 'n' }
].map(item => ({ ...item, type: 'Hiragana' }));

const katakanaList = [
    { char: 'ア', romaji: 'a' }, { char: 'イ', romaji: 'i' }, { char: 'ウ', romaji: 'u' }, { char: 'エ', romaji: 'e' }, { char: 'オ', romaji: 'o' },
    { char: 'カ', romaji: 'ka' }, { char: 'キ', romaji: 'ki' }, { char: 'ク', romaji: 'ku' }, { char: 'ケ', romaji: 'ke' }, { char: 'コ', romaji: 'ko' },
    { char: 'サ', romaji: 'sa' }, { char: 'シ', romaji: 'shi' }, { char: 'ス', romaji: 'su' }, { char: 'セ', romaji: 'se' }, { char: 'ソ', romaji: 'so' },
    { char: 'タ', romaji: 'ta' }, { char: 'チ', romaji: 'chi' }, { char: 'ツ', romaji: 'tsu' }, { char: 'テ', romaji: 'te' }, { char: 'ト', romaji: 'to' },
    { char: 'ナ', romaji: 'na' }, { char: 'ニ', romaji: 'ni' }, { char: 'ヌ', romaji: 'nu' }, { char: 'ネ', romaji: 'ne' }, { char: 'ノ', romaji: 'no' },
    { char: 'ハ', romaji: 'ha' }, { char: 'ヒ', romaji: 'hi' }, { char: 'フ', romaji: 'fu' }, { char: 'ヘ', romaji: 'he' }, { char: 'ホ', romaji: 'ho' },
    { char: 'マ', romaji: 'ma' }, { char: 'ミ', romaji: 'mi' }, { char: 'ム', romaji: 'mu' }, { char: 'メ', romaji: 'me' }, { char: 'モ', romaji: 'mo' },
    { char: 'ヤ', romaji: 'ya' }, { char: 'ユ', romaji: 'yu' }, { char: 'ヨ', romaji: 'yo' },
    { char: 'ら', romaji: 'ra' }, { char: 'り', romaji: 'ri' }, { char: 'る', romaji: 'ru' }, { char: 'れ', romaji: 're' }, { char: 'ろ', romaji: 'ro' },
    { char: 'ワ', romaji: 'wa' }, { char: 'ヲ', romaji: 'wo' }, { char: 'ン', romaji: 'n' }
].map(item => ({ ...item, type: 'Katakana' }));

let currentMode = 'all';
let currentQuestion = null;
let streak = 0;
let isAnswering = false;
let hasEntered = false;

function enterDashboard() {
    if (hasEntered) return;
    hasEntered = true;

    const gate = document.getElementById('gate');
    const shell = document.getElementById('console-shell');
    
    gate.style.opacity = '0';
    setTimeout(() => {
        gate.style.display = 'none';
        shell.style.display = 'flex';
        setTimeout(() => {
            shell.style.opacity = '1';
        }, 40);
    }, 400);
}

// Boot loader (duration can be changed here easily)
(function startBootLoader() {
    const fill = document.getElementById('progress-fill');
    const brush = document.getElementById('paintbrush');
    const text = document.getElementById('progress-text');
    const statusEl = document.getElementById('status-text');

    const duration = 3200; // <-- CHANGE LOADING SPEED HERE (milliseconds)
    const startTime = Date.now();

    const messages = [
        "Just a second...",
        "Taking you to another world",
        "Almost there"
    ];

    let lastMsgIndex = 0;

    const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const rawProgress = Math.min(elapsed / duration, 1);
        const percent = Math.round(rawProgress * 100);

        if (fill) fill.style.width = percent + '%';
        if (brush) brush.style.left = Math.min(percent, 92) + '%';
        if (text) text.textContent = percent + '%';

        let msgIndex = 0;
        if (percent >= 70) {
            msgIndex = 2;
        } else if (percent >= 35) {
            msgIndex = 1;
        }

        if (msgIndex !== lastMsgIndex && statusEl) {
            lastMsgIndex = msgIndex;
            statusEl.textContent = messages[msgIndex];
        }

        if (rawProgress >= 1) {
            clearInterval(timer);
            setTimeout(enterDashboard, 250);
        }
    }, 30);

    setTimeout(enterDashboard, 4000);
})();

function openKanaPractice() {
    document.getElementById('dashboard-view').style.display = 'none';
    document.getElementById('kana-view').style.display = 'flex';
    nextQuestion();
}

function backToDashboard() {
    document.getElementById('kana-view').style.display = 'none';
    document.getElementById('dashboard-view').style.display = 'grid';
}

function setMode(mode) {
    currentMode = mode;
    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
    if (mode === 'all') document.getElementById('btn-all').classList.add('active');
    if (mode === 'hiragana') document.getElementById('btn-hira').classList.add('active');
    if (mode === 'katakana') document.getElementById('btn-kata').classList.add('active');
    nextQuestion();
}

function getPool() {
    if (currentMode === 'hiragana') return hiraganaList;
    if (currentMode === 'katakana') return katakanaList;
    return [...hiraganaList, ...katakanaList];
}

function nextQuestion() {
    isAnswering = false;
    const pool = getPool();
    
    let candidate;
    do {
        candidate = pool[Math.floor(Math.random() * pool.length)];
    } while (currentQuestion && candidate.char === currentQuestion.char);
    
    currentQuestion = candidate;

    document.getElementById('script-type').textContent = currentQuestion.type;
    document.getElementById('kana-char').textContent = currentQuestion.char;

    const wrongOptions = new Set();
    while (wrongOptions.size < 3) {
        const randomRomaji = pool[Math.floor(Math.random() * pool.length)].romaji;
        if (randomRomaji !== currentQuestion.romaji) {
            wrongOptions.add(randomRomaji);
        }
    }

    const choices = [currentQuestion.romaji, ...Array.from(wrongOptions)]
        .sort(() => Math.random() - 0.5);

    const container = document.getElementById('options-container');
    container.innerHTML = '';

    choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = choice;
        btn.onclick = () => checkAnswer(btn, choice);
        container.appendChild(btn);
    });
}

function checkAnswer(selectedBtn, chosenRomaji) {
    if (isAnswering) return;
    isAnswering = true;

    const allButtons = document.querySelectorAll('.option-btn');
    allButtons.forEach(b => b.disabled = true);

    if (chosenRomaji === currentQuestion.romaji) {
        selectedBtn.classList.add('correct');
        streak++;
        document.getElementById('streak-count').textContent = streak;
        setTimeout(nextQuestion, 450);
    } else {
        selectedBtn.classList.add('wrong');
        streak = 0;
        document.getElementById('streak-count').textContent = streak;
        
        allButtons.forEach(b => {
            if (b.textContent === currentQuestion.romaji) {
                b.classList.add('correct');
            }
        });
        setTimeout(nextQuestion, 1100);
    }
}