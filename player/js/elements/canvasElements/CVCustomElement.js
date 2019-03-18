function CVCustomElement(data, globalData, comp){
    this.failed = false;
    this.assetData = globalData.getAssetData(data.refId);
    this.img = globalData.imageLoader.getImage(this.assetData);
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
    this.customAnimation = new customAnimations[this.data.nm](Object.assign({
        width: width,
        height: height,
        canvas: canvas
    }, this.data.customOptions || {}));
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





