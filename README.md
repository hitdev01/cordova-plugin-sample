# cordova-plugin-sample
cordova plugin sample. echoes a string called from JavaScript.

## Installation
```
cordova plugin add https://github.com/hitdev01/cordova-plugin-sample.git
```
## Supported Platforms
* Android
* iOS

## Methods
* navigator.echo.call

## Example
### navigator.echo.call

```JavaScript
var input = 'test echo!';
function onSuccess(result) {
    // "test echo!" is displayed
    alert('echo message:' + result);
}

function onError() {
    alert('onError!');
}

navigator.echo.call(onSuccess, onError, input);
```


## Testing the this plugin itself

### JavaScript syntax check test
`npm test`

### Actual machine test
* create cordova project

```bash
cordova create cordova-plugin-sample-test
cordova platform add android
cordova platform add ios
```

* add test-framework plugin & this plugin & this plugin test

```bash
cordova plugin add http://git-wip-us.apache.org/repos/asf/cordova-plugin-test-framework.git
cordova plugin add https://github.com/hitdev01/cordova-plugin-sample.git
cordova plugin add https://github.com/hitdev01/cordova-plugin-sample.git#:/tests
```

* change config.xml content

```xml
<!--content src="index.html" /-->
<content src="cdvtests/index.html" />
```

* run test

android (use AndroidSDK)

`cordova run android`

iPhone (use Xcode)

`cordova run ios`
