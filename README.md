# A simple vannila slide show api that is compatible with IE, because people still use it, sigh...
## Great for replacing ancient flash slide shows.
Created by Caleb Irwin

## How to use:

1. Clone repo
2. Copy transformed.min.js into project directory
3. Include script (by either using script tag or copying code into main file)
4. Create a canvas that has the same dimentions as your images, such as here
```
<canvas id="demo" width="700" height="264"></canvas>
```
5. Initilize it as follows:
```
new slideShow(id, arrayOfImageUrls, speed; optional, defalts to 4000ms)
```
Example
```
new slideShow("demo", [
        "https://www.guildstationers.com/images/-OP-Slider_Top/01-OP-Slider_Top.png",
        "https://www.guildstationers.com/images/-OP-Slider_Top/02-OP-Slider_Top.png",
        "https://www.guildstationers.com/images/-OP-Slider_Top/03-OP-Slider_Top.png",
]);
```
## Methods
-  _instance_.playPause()
-  _instance_.skipForward()
-  _instance_.skipBackward()
# Please feel free to contribute.