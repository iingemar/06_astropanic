/*
* Enemy
*/
var Enemy = Class.extend({
    init: function(ctx, level) {
        this.ctx = ctx;
        this.image = new Image();
        this.image.src = "images/enemy.jpg";
        // 84 x 82 px
        this.x = Math.random() * ASTRO.WIDTH + 42;
        this.y = Math.random() * 100  + 41;
        this.width = 84;
        this.height = 82;
        this.level = level;
        this.r = 41;
        
        // Random direction in radians
        this.direction = Math.random() * (Math.PI * 2);
        this.vx = level * Math.cos(this.direction);
        this.vy = level * Math.sin(this.direction);        
        
        this.dead = false;
        
        this.ctx.fillStyle   = '#00f'; // blue
        this.ctx.strokeStyle = '#f00'; // red
        this.ctx.lineWidth   = 1;        
    },
    
    update: function() {
        this.x += this.vx;
        this.y += this.vy;
        this.checkBounds();
    },
    
    checkBounds: function() {
        if (this.x > 610) {
            this.x = 610;
            this.vx *= -1;
        }
        if (this.x < 25) {
            this.x = 25;
            this.vx *= -1;
        }        
        if (this.y > 440) {
            this.y = 440;
            this.vy *= -1;
        }
        if (this.y < 35) {
            this.y = 35;
            this.vy *= -1;
        }        
    },
    
    getDrawX: function() {
        return this.x - 41;
    },
    
    getDrawY: function() {
        return this.y - 42;
    },
    
    
    draw: function() {
        if (! this.dead) {
            this.ctx.drawImage(this.image, this.getDrawX(), this.getDrawY());
            // arc(x, y, radius, startAngle, endAngle, anticlockwise)
            /*
            this.ctx.beginPath();            
            this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
            this.ctx.stroke();
            */
        } else {
            // scale drawImage(image, x, y, width, height)                    
            this.ctx.drawImage(this.image, this.getDrawX(), this.getDrawY(), this.width, this.height);        }
    }
});