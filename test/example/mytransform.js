window.C2S_EXAMPLES['mytransform'] = function (ctx) {
    ctx.save();
    // Create circular clipping region
    let t = ctx.getTransform();
    ctx.setTransform(1,2,2,1,10,100);
    ctx.fillRect(0, 0, 100, 100);
    console.log('transform', ctx.getTransform());
    ctx.restore();
};