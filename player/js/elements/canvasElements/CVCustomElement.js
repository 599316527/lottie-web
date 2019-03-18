function CVCustomElement(data, globalData, comp){
    this.failed = false;
    this.initElement(data,globalData,comp);
}
extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVCustomElement);

CVCustomElement.prototype.initElement = SVGShapeElement.prototype.initElement;
CVCustomElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame;

CVCustomElement.prototype.createContent = function(){
    var width = this.data.sw
    var height = this.data.sh
    var canvas = createTag('canvas');
    canvas.width = width;
    canvas.height = height;
    this.img = canvas;

    var data = {
        width: width,
        height: height,
        canvas: canvas
    };
    var customOptions = this.data.customOptions || {};
    for (var key in customOptions) {
        if (customOptions.hasOwnProperty(key)) {
            data[key] = customOptions[key];
        }
    }
    this.customAnimation = new customAnimations[this.data.nm](data);
};

CVCustomElement.prototype.prepareRenderableFrame = function (num) {
    this.checkLayerLimits(num);

    this.customAnimation.render(num / this.comp.animationItem.totalFrames);
}

CVCustomElement.prototype.renderInnerContent = function(parentMatrix){
    if (this.failed) {
        return;
    }
    this.canvasContext.drawImage(this.img, 0, 0);
};

CVCustomElement.prototype.destroy = function(){
    this.img = null;
};





