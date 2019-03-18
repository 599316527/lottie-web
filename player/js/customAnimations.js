var customAnimations = {
    sample: SampleAnimation
};


function SampleAnimation(data) {
    this.width = data.width;
    this.height = data.height;

    var canvas = data.canvas;
    var context = canvas.getContext('2d');
    this.context = context;
}

SampleAnimation.prototype.render = function (progress) {
    var width = this.width;
    var height = this.height;
    this.context.clearRect(0, 0, width, height);
    var colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple'];
    for (var i = 0; i < 9999; i++) {
        this.context.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        var size = Math.round(Math.random() * 4) + 2;
        this.context.fillRect(
            Math.round(Math.random() * width),
            Math.round(Math.random() * height),
            size, size
        );
    }
}
