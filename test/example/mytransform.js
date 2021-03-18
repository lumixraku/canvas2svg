window.C2S_EXAMPLES['mytransform'] = function (ctx) {

    // Create circular clipping region
    ctx.setTransform(1,.1,.1,1,0,0);
    ctx.fillRect(0, 0, 100, 100);

    console.log('transform', ctx.getTransform());
};