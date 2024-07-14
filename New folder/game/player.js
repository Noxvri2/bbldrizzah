// player.js

export const player = {
    x: 100,
    y: 200,
    size: 25,
    color: '#00f',
    speed: 3,
    health: 150,
    weapon: null, // To be assigned with a weapon object
    isAttacking: false,
    angle: 0,

    attack() {
        if (this.weapon) {
            return this.weapon.damage;
        } else {
            return 3; // Default damage without a weapon
        }
    },

    takeDamage(amount) {
        this.health -= amount;
        console.log(`Player takes ${amount} damage. Health: ${this.health}`);
        // Handle game over condition if health <= 0
    },

    update(keys) {
        if (keys['w']) {
            this.y -= this.speed;
        }
        if (keys['a']) {
            this.x -= this.speed;
        }
        if (keys['s']) {
            this.y += this.speed;
        }
        if (keys['d']) {
            this.x += this.speed;
        }
    },

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
};
