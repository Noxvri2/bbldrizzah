// game.js

import { player } from './player.js';
import { enemy } from './enemy.js';
import { Weapon } from './weapon.js'; // Import the Weapon class from weapon.js

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let keys = {
    w: false,
    a: false,
    s: false,
    d: false,
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
};

document.addEventListener('keydown', function(event) {
    if (event.key in keys) {
        keys[event.key] = true;
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key in keys) {
        keys[event.key] = false;
    }
});

document.addEventListener('mousemove', function(event) {
    player.angle = Math.atan2(event.clientY - player.y, event.clientX - player.x);
});

document.addEventListener('mousedown', function(event) {
    if (event.button === 0) {
        player.isAttacking = true;
        let damage = player.attack();
        console.log(`Player attacks for ${damage} damage.`);
        // Implement logic to apply damage to enemy or perform attack action
    }
});

document.addEventListener('mouseup', function(event) {
    if (event.button === 0) {
        player.isAttacking = false;
    }
});

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw player
    player.update(keys);
    player.draw(ctx);

    // Update and draw enemy
    enemy.update(player);
    enemy.draw(ctx);

    requestAnimationFrame(gameLoop);
}

// Example: Equipping a weapon to the player
player.weapon = new Weapon('Sword', 10); // Example weapon with 10 damage

// Spawn player and enemy upon game start
function spawnEntities() {
    gameLoop();
}

export function startGame() {
    // Spawn player and then enemy after a delay
    spawnEntities();
    setTimeout(() => {
        console.log("Enemy spawned!");
    }, 3000); // Example delay for enemy spawn after 3 seconds
}
