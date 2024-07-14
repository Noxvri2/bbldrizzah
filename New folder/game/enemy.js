// enemy.js

import { Weapon } from './weapon.js'; // Import the Weapon class from weapon.js

export const enemy = {
    x: 400,
    y: 200,
    size: 25,
    color: '#f00',
    speed: 1,
    health: 100,
    weapon: new Weapon('Enemy Sword', 13),
    canAttack: true,

    attack(player) {
        if (this.canAttack && this.isTouchingPlayer(player)) {
            player.takeDamage(this.weapon.damage);
            console.log(`Enemy attacks player for ${this.weapon.damage} damage.`);
            this.canAttack = false;
            setTimeout(() => {
                this.canAttack = true;
            }, 8 * 1000); // 8 frames at 60fps
        }
    },

    isTouchingPlayer(player) {
        let dx = player.x - this.x;
        let dy = player.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        return distance < player.size / 2 + this.size / 2; // Simple collision detection
    },

    update(player) {
        // Move towards player
        if (player.x > this.x) {
            this.x += this.speed;
        } else {
            this.x -= this.speed;
        }

        if (player.y > this.y) {
            this.y += this.speed;
        } else {
            this.y -= this.speed;
        }

        // Perform attack if player is in range
        this.attack(player);
    },

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
};
