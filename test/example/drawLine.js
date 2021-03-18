window.C2S_EXAMPLES['drawLine'] = function (ctx) {
    ctx.save();
    // Create circular clipping region
    const t = ctx.getTransform();
    y1 = 120;
    y2 = 360;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    let x = 360;
    x += 1;
    ctx.lineWidth = 2;
    let x1 = x2 = x;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    ctx.setTransform(t.a, t.b, t.c, t.d, t.e, t.f);
    ctx.lineWidth = 1;    
    ctx.restore();
};