## Hack

Support custom canvas animation.

```js
function CustomAnimation ({width, height, canvas, ...}) { ... }
CustomAnimation.prototype.render = function (progress) { ... }
lottiejs.customAnimations.diyAnim = CustomAnimation
```

```
{
  "nm": "diyAnim", // Name of custom animation defined in `customAnimations`
  "ty": 101,       // for custom type
  "customOptions": {}  // Any options for constructor of custom animation
}
```


# Lottie for Web, [Android](https://github.com/airbnb/lottie-android), [iOS](https://github.com/airbnb/lottie-ios), [React Native](https://github.com/airbnb/lottie-react-native), and [Windows](https://aka.ms/lottie)

Lottie is a mobile library for Web,  and iOS that parses [Adobe After Effects](http://www.adobe.com/products/aftereffects.html) animations exported as json with [Bodymovin](https://github.com/airbnb/lottie-web) and renders them natively on mobile!

For the first time, designers can create **and ship** beautiful animations without an engineer painstakingly recreating it by hand. They say a picture is worth 1,000 words so here are 13,000:



# View documentation, FAQ, help, examples, and more at [airbnb.io/lottie](http://airbnb.io/lottie/)



![Example1](gifs/Example1.gif)


![Example2](gifs/Example2.gif)


![Example3](gifs/Example3.gif)


![Community](gifs/Community%202_3.gif)


![Example4](gifs/Example4.gif)


# Plugin installation

### Option 1 (Recommended):
**Download it from from aescripts + aeplugins:**
http://aescripts.com/bodymovin/

### Option 2:
**Or get it from the adobe store**
https://creative.adobe.com/addons/products/12557
CC 2014 and up.

## Other installation options:

### Option 3:
- download the ZIP from the repo.
- Extract content and get the .zxp file from '/build/extension'
- Use the [ZXP installer](http://aescripts.com/learn/zxp-installer/) from aescripts.com.

### Option 4:
- Close After Effects<br/>
- Extract the zipped file on `build/extension/bodymovin.zxp` to the adobe CEP folder:<br/>
WINDOWS:<br/>
`C:\Program Files (x86)\Common Files\Adobe\CEP\extensions or`<br/>
`C:\<username>\AppData\Roaming\Adobe\CEP\extensions`<br/>
MAC:<br/>
`/Library/Application\ Support/Adobe/CEP/extensions/bodymovin`<br/>
(you can open the terminal and type:<br/>
`$ cp -R YOURUNZIPEDFOLDERPATH/extension /Library/Application\ Support/Adobe/CEP/extensions/bodymovin`<br/>
then type:<br/>
`$ ls /Library/Application\ Support/Adobe/CEP/extensions/bodymovin`<br/>
to make sure it was copied correctly type)<br/>

- Edit the registry key:<br/>
WINDOWS:<br/>
open the registry key `HKEY_CURRENT_USER/Software/Adobe/CSXS.6` and add a key named `PlayerDebugMode`, of type String, and value `1`.<br/>
MAC:<br/>
open the file `~/Library/Preferences/com.adobe.CSXS.6.plist` and add a row with key `PlayerDebugMode`, of type String, and value `1`.<br/>

### Option 5:

Install the zxp manually following the instructions here:
https://helpx.adobe.com/x-productkb/global/installingextensionsandaddons.html
Skip directly to "Install third-party extensions"

### Option 6:

Install with [Homebrew](http://brew.sh)-[adobe](https://github.com/danielbayley/homebrew-adobe):
```bash
brew tap danielbayley/adobe
brew cask install lottie
```

### After installing
- **Windows:** Go to Edit > Preferences > General > and check on "Allow Scripts to Write Files and Access Network"
- **Mac:** Go to Adobe After Effects > Preferences > General > and check on "Allow Scripts to Write Files and Access Network"

# HTML player installation
```bash
# with npm
npm install lottie-web

# with bower
bower install bodymovin
```
Or you can use the script file from here:
https://cdnjs.com/libraries/bodymovin
Or get it directly from the AE plugin clicking on Get Player

# Demo
[See a basic implementation here.](https://codepen.io/airnan/project/editor/ZeNONO/) <br/>

# Examples
[See examples on codepen.](http://codepen.io/collection/nVYWZR/) <br/>

## How it works
[Here's](https://www.youtube.com/watch?v=5XMUJdjI0L8) a video tutorial explaining how to export a basic animation and load it in an html page <br />
### After Effects
- Open your AE project and select the bodymovin extension on Window > Extensions > bodymovin
- A Panel will open with a Compositions tab listing all of your Project Compositions.
- Select the composition you want to export.
- Select a Destination Folder.
- Click Render
- look for the exported json file (if you had images or AI layers on your animation, there will be an images folder with the exported files)

### HTML
- get the lottie.js file from the build/player/ folder for the latest build
- include the .js file on your html (remember to gzip it for production)
```html
<script src="js/lottie.js" type="text/javascript"></script>
```
You can call lottie.loadAnimation() to start an animation.
It takes an object as a unique param with:
- animationData: an Object with the exported animation data.
- path: the relative path to the animation object. (animationData and path are mutually exclusive)
- loop: true / false / number
- autoplay: true / false it will start playing as soon as it is ready
- name: animation name for future reference
- renderer: 'svg' / 'canvas' / 'html' to set the renderer
- container: the dom element on which to render the animation


It returns the animation instance you can control with play, pause, setSpeed, etc.

```js
lottie.loadAnimation({
  container: element, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json' // the path to the animation json
});
```

#### Composition Settings:
Check this wiki page for an explanation for each setting.
https://github.com/airbnb/lottie-web/wiki/Composition-Settings

## Usage
Animation instances have these main methods:
### play

***
### stop

***
### pause

***
### setLocationHref(href)
- `href`: usually pass as `location.href`. Its useful when you experience mask issue in safari where your url does not have `#` symbol.

***
### setSpeed(speed)
- `speed`: 1 is normal speed.

***
### goToAndStop(value, isFrame)
- `value`: numeric value.
- `isFrame`: defines if first argument is a time based value or a frame based (default false).

***
### goToAndPlay(value, isFrame)
- `value`: numeric value.
- `isFrame`: defines if first argument is a time based value or a frame based (default false).

***
### setDirection(direction)
- `direction`: 1 is forward, -1 is reverse.

***
### playSegments(segments, forceFlag)
- `segments`: array. Can contain 2 numeric values that will be used as first and last frame of the animation. Or can contain a sequence of arrays each with 2 numeric values.
- `forceFlag`: boolean. If set to false, it will wait until the current segment is complete. If true, it will update values immediately.
***
### setSubframe(useSubFrames)
- `useSubFrames`:  If false, it will respect the original AE fps. If true, it will update on every requestAnimationFrame with intermediate values. Default is true.
***
### destroy()
***
### getDuration(inFrames)
- `inFrames`:  If true, returns duration in frames, if false, in seconds.
***

### Additional methods:
- updateTextDocumentData -- updates a text layer's data
[More Info](https://github.com/airbnb/lottie-web/wiki/TextLayer.updateDocumentData)
***

### Lottie has 8 global methods that will affect all animations:
**lottie.play()** -- with 1 optional parameter **name** to target a specific animation <br/>
**lottie.stop()** -- with 1 optional parameter **name** to target a specific animation <br/>
**lottie.setSpeed()** -- first argument speed (1 is normal speed) -- with 1 optional parameter **name** to target a specific animation <br/>
**lottie.setDirection()** -- first argument direction (1 is normal direction.) -- with 1 optional parameter **name** to target a specific animation <br/>
**lottie.searchAnimations()** -- looks for elements with class "lottie" or "bodymovin" <br/>
**lottie.loadAnimation()** -- Explained above. returns an animation instance to control individually. <br/>
**lottie.destroy()** -- To destroy and release resources. The DOM element will be emptied.<br />
**lottie.registerAnimation()** -- you can register an element directly with registerAnimation. It must have the "data-animation-path" attribute pointing at the data.json url<br />
**lottie.setQuality()** -- default 'high', set 'high','medium','low', or a number > 1 to improve player performance. In some animations as low as 2 won't show any difference.<br />

## Events
- onComplete
- onLoopComplete
- onEnterFrame
- onSegmentStart

you can also use addEventListener with the following events:
- complete
- loopComplete
- enterFrame
- segmentStart
- config_ready (when initial config is done)
- data_ready (when all parts of the animation have been loaded)
- data_failed (when part of the animation can not be loaded)
- loaded_images (when all image loads have either succeeded or errored)
- DOMLoaded (when elements have been added to the DOM)
- destroy

#### Other loading options
- if you want to use an existing canvas to draw, you can pass an extra object: 'rendererSettings' with the following configuration:
```js
lottie.loadAnimation({
  container: element, // the dom element
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: animationData, // the animation data
  rendererSettings: {
    context: canvasContext, // the canvas context
    scaleMode: 'noScale',
    clearCanvas: false,
    progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
    hideOnTransparent: true, //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
    className: 'some-css-class-name'
  }
});
```
Doing this you will have to handle the canvas clearing after each frame
<br/>
Another way to load animations is adding specific attributes to a dom element.
You have to include a div and set it's class to "lottie".
If you do it before page load, it will automatically search for all tags with the class "lottie".
Or you can call `lottie.searchAnimations()` after page load and it will search all elements with the class "lottie".
<br/>
- Add the data.json to a folder relative to the html
- Create a div that will contain the animation.
- **Required**
  - A class called "lottie"
  - A "data-animation-path" attribute with relative path to the data.json
- **Optional**
  - A "data-anim-loop" attribute
  - A "data-name" attribute to specify a name to target play controls specifically

**Example**

```html
 <div style="width:1067px;height:600px"  class="lottie" data-animation-path="animation/" data-anim-loop="true" data-name="ninja"></div>
```



## Preview
You can preview or take an svg snapshot of the animation to use as poster. After you render your animation, you can take a snapshot of any frame in the animation and save it to your disk. I recommend to pass the svg through an svg optimizer like https://jakearchibald.github.io/svgomg/ and play around with their settings.<br/>

## Recommendations

### Files
If you have any images or AI layers that you haven't converted to shapes (I recommend that you convert them, so they get exported as vectors, right click each layer and do: "Create shapes from Vector Layers"), they will be saved to an images folder relative to the destination json folder.
Beware not to overwrite an existing folder on that same location.


### Performance
This is real time rendering. Although it is pretty optimized, it always helps if you keep your AE project to what is necessary<br/>
More optimizations are on their way, but try not to use huge shapes in AE only to mask a small part of it.<br/>
Too many nodes will also affect performance.

### Help
If you have any animations that don't work or want me to export them, don't hesitate to write. <br/>
I'm really interested in seeing what kind of problems the plugin has. <br/>
my email is **hernantorrisi@gmail.com**


## AE Feature Support
- The script supports precomps, shapes, solids, images, null objects, texts
- It supports masks and inverted masks. Maybe other modes will come but it has a huge performance hit.
- It supports time remapping
- The script supports shapes, rectangles, ellipses and stars.
- Expressions. Check the wiki page for [more info.](https://github.com/bodymovin/bodymovin/wiki/Expressions)
- Not supported: image sequences, videos and audio are not supported
- **No  negative layer stretching**! No idea why, but stretching a layer messes with all the data.

## Development
`npm install` or `bower install` first
`npm start`

## Notes
- If you want to modify the parser or the player, there are some gulp commands that can simplify the task
- look at the great animations exported on codepen [See examples on codepen.](http://codepen.io/collection/nVYWZR/)
- gzipping the animation jsons and the player have a huge reduction on the filesize. I recommend doing it if you use it for a project.

## Issues
- For missing mask in Safari browser, please anim.setLocationHref(locationHref) before animation is generated. It usually caused by usage of base tag in html. (see above for description of setLocationHref)
