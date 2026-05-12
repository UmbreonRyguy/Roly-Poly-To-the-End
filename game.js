//I missed section so I just made a title screen simulating my contribution to the project. 

const W = 800;
const H = 600;

class Title extends Phaser.Scene {    
    constructor() { super({key: 'Title'});}
        
    preload() {
        this.load.image('rolypoly', 'assets/RolyPoly.png');
        this.load.image('snail',    'assets/Snail.png');
    }
 
    create() {
        // Background gradient
        const sky = this.add.graphics();
        sky.fillGradientStyle(0x2a1b4a, 0x3d2466, 0xff9d7a, 0xffd4a3, 1);
        sky.fillRect(0, 0, W, H);
 
        // Ground strip
        const groundY = H * 0.80;
        this.add.rectangle(W / 2, (groundY + H) / 2, W, H - groundY, 0x2e1a10);
 
        // Title
        const title = this.add.text(W / 2, H * 0.22, 'Roly Poly: To the End', {
            fontFamily: 'Georgia, serif',
            fontSize: '56px',
            color: '#fff8e7',
            fontStyle: 'bold',
            stroke: '#2a1b4a',
            strokeThickness: 8,
            shadow: { offsetX: 0, offsetY: 5, color: '#000', blur: 12, fill: true }
        }).setOrigin(0.5);
 
        this.tweens.add({
            targets: title, y: title.y - 10, duration: 2000,
            yoyo: true, repeat: -1, ease: 'Sine.easeInOut'
        });
 
        // Snail
        const snail = this.add.image(W * 0.78, groundY - 50, 'snail').setScale(0.85);
        this.tweens.add({
            targets: snail, y: snail.y - 6, duration: 2800,
            yoyo: true, repeat: -1, ease: 'Sine.easeInOut'
        });
 
        // Roly Poly
        const roly = this.add.image(W * 0.28, groundY - 55, 'rolypoly').setScale(1.25);
        this.tweens.add({
            targets: roly, y: roly.y - 16, duration: 1100,
            yoyo: true, repeat: -1, ease: 'Sine.easeInOut'
        });
        this.tweens.add({
            targets: roly, angle: { from: -7, to: 7 }, duration: 1600,
            yoyo: true, repeat: -1, ease: 'Sine.easeInOut'
        });
 
       
        // Start Button
        const btn = this.add.circle(400, 540, 46, 0xffd47a).setStrokeStyle(5, 0xfff8e7);
        const tri = this.add.triangle(420, 555, -15, -19, -15, 19, 22, 0, 0x2a1b4a);
        this.tweens.add({
            targets: [btn, tri], scale: 1.08, duration: 750,
            yoyo: true, repeat: -1, ease: 'Sine.easeInOut'
        });
 
        //Tap to start
        this.input.on('pointerdown', () => this.cameras.main.flash(220, 255, 250, 230));
    }
}
const config = {
    type: Phaser.AUTO,
    width: W,
    height: H,
    parent: 'root',
    scene: [Title]
};

const game = new Phaser.Game(config);