window.C2S_EXAMPLES['drawLine'] = function (ctx) {
    ctx.save();
    ctx.shadowColor = "black";
    ctx.shadowBlur = 6;
    ctx.shadowOffsetX = 6;
    ctx.shadowOffsetY = 6;
    ctx.shadowColor = "orange";
    ctx.strokeRect(25, 25, 200, 200);
    ctx.shadowColor = "green";
    ctx.strokeRect(50, 50, 200, 200);
    ctx.shadowColor = "blue";
    ctx.strokeRect(75, 75, 200, 200);
    ctx.shadowColor = "red";
    ctx.strokeRect(100, 100, 200, 200);  
    ctx.restore();
};

