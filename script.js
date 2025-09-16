// Main JavaScript functionality for Catholic Spiritual Resources

// Login functionality
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username.trim() && password.trim()) {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('mainContent').classList.add('active');
        document.getElementById('welcomeMessage').innerHTML = `Welcome back, ${username}! <button class="logout-btn" onclick="logout()">Logout</button>`;
        
        // Initialize daily content
        initializeApp();
    } else {
        alert('Please enter both username and password');
    }
}

function logout() {
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('mainContent').classList.remove('active');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

// Initialize app after login
function initializeApp() {
    getNewVerse();
    getRandomPrayer();
    loadPrayers();
    loadSaints();
    loadMassVideos();
    loadLiturgy();
}

// Navigation functionality
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section-content').forEach(section => {
        section.style.display = 'none';
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionName + 'Section').style.display = 'block';
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// Bible verse functionality
function getNewVerse() {
    const randomVerse = bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
    document.getElementById('verseText').textContent = randomVerse.text;
    document.getElementById('verseReference').textContent = randomVerse.reference;
}

// Random prayer functionality
function getRandomPrayer() {
    const randomPrayer = prayers[Math.floor(Math.random() * prayers.length)];
    document.getElementById('randomPrayer').innerHTML = `<h3>${randomPrayer.name}</h3><p>${randomPrayer.text}</p>`;
}

// Load prayers section
function loadPrayers() {
    const prayersContent = document.getElementById('prayersContent');
    let content = '';
    prayers.forEach(prayer => {
        content += `<div class="prayer-text"><h3>${prayer.name}</h3><p>${prayer.text}</p></div>`;
    });
    prayersContent.innerHTML = content;
}

// Load saints section
function loadSaints() {
    const saintsContent = document.getElementById('saintsContent');
    let content = '';
    saints.forEach(saint => {
        content += `<div class="saint-info">
            <div class="saint-name">${saint.name}</div>
            <p><strong>${saint.info}</strong></p>
            <p>${saint.description}</p>
        </div>`;
    });
    saintsContent.innerHTML = content;
}

function getRandomSaint() {
    const randomSaint = saints[Math.floor(Math.random() * saints.length)];
    const saintsContent = document.getElementById('saintsContent');
    saintsContent.innerHTML = `<div class="saint-info">
        <div class="saint-name">${randomSaint.name}</div>
        <p><strong>${randomSaint.info}</strong></p>
        <p>${randomSaint.description}</p>
    </div>`;
}

// Load mass videos section
function loadMassVideos() {
    const massContent = document.getElementById('massContent');
    let content = '';
    massVideos.forEach(video => {
        content += `<div class="mass-video">
            <a href="${video.url}" target="_blank" rel="noopener noreferrer">${video.title}</a>
            <p>${video.description}</p>
        </div>`;
    });
    massContent.innerHTML = content;
}

// Load liturgical prayers section
function loadLiturgy() {
    const liturgyContent = document.getElementById('liturgyContent');
    let content = '';
    liturgicalPrayers.forEach(prayer => {
        content += `<div class="prayer-text">
            <h3>${prayer.name}</h3>
            <p>${prayer.text}</p>
        </div>`;
    });
    liturgyContent.innerHTML = content;
}

// Utility functions
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Allow Enter key to login
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && document.getElementById('loginSection').style.display !== 'none') {
            login();
        }
    });
    
    // Initialize focus on username field
    document.getElementById('username').focus();
});

// Additional utility functions for future expansion
function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Console welcome message for developers
console.log('Catholic Spiritual Resources App Loaded');
console.log('May God bless your coding journey! ✝');