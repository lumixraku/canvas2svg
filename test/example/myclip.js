window.C2S_EXAMPLES['myclip'] = function (ctx) {
    
    // Create circular clipping region
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.fillRect(50, 50, 100, 100);   
    ctx.save();
    ctx.setTransform(1, 0, 0, 1.3, 0, 0);
    // ctx.arc(100, 75, 50, 0, Math.PI * 2);
    // ctx.clip();
    
    // Draw stuff that gets clipped
    ctx.fillStyle = 'blue';
    ctx.fillRect(100, 100, canvas.width, canvas.height);
    ctx.fillStyle = 'orange';
    ctx.fillRect(0, 0, 100, 100);
    ctx.restore();

    ctx.fillStyle = 'cyan';
    ctx.fillRect(300, 0, 100, 100);    
};