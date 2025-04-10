// Game levels
const levels = [
    {
        id: 1,
        name: "Firewall Breach",
        correctPath: [
            {x: 50, y: 50},
            {x: 150, y: 150},
            {x: 250, y: 50},
            {x: 350, y: 150}
        ],
        securityZones: [
            {x: 200, y: 100, radius: 40}
        ],
        timeLimit: 30
    },
    // ... (rest of the levels data)
];

// Game state
const gameState = {
    currentLevel: 0,
    score: 0,
    alarmsTriggered: 0,
    timeLeft: 0,
    isDrawing: false,
    currentPath: [],
    timer: null
};

// ... (rest of the game logic without audio references)

function triggerAlarm() {
    gameState.alarmsTriggered++;
    document.getElementById('alarms').textContent = gameState.alarmsTriggered;
    
    // Visual feedback only
    ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setTimeout(() => drawPath(), 200);
}

function checkPathAccuracy() {
    // ... (keep all logic but remove sound feedback)
    if (distance < 30) {
        // Visual feedback only
        ctx.fillStyle = 'rgba(0, 255, 0, 0.3)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        if (gameState.currentLevel < levels.length - 1) {
            setTimeout(() => {
                alert(`Level Complete!`);
                startLevel(gameState.currentLevel + 1);
            }, 500);
        }
    } else {
        // Visual feedback only
        ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}
