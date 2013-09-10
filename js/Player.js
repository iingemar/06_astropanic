/*
* Player
*/
var Player = Class.extend({
    init: function(ctx) {
        this.ctx = ctx;
        this.image = new Image();
        this.image.src = "images/player.jpg";
        var that = this;
        this.image.onload = function() {
            that.width = this.width;
        };
        this.x = 25;
        this.y = 485;
        this.r = 50;
        this.dead = false;
    },
    
    getDrawX: function() {
        return this.x - 50;
    },
    
    getDrawY: function() {
        return this.y - 70;
    },    
    
    update: function() {
        
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
        }
    }
});