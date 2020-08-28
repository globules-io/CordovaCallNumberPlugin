cordova-plugin-call-number
=======================

Call a number directly from your cordova application.

Install the plugin using:

``` 
npm install @globules-io/cordova-plugin-call-number
```

Uninstall using:

``` 
npm uninstall @globules-io/cordova-plugin-call-number
```

Use the plugin in your JS file:
``` javascript
window.plugins.phone.dial(onSuccess, onError, number, bypassAppChooser);
```

**number:** *String;* phone number to call (e.g. "1234567890")

**bypassAppChooser:** *boolean;* true if you always wish to bypass the app chooser if user has multiple applications installed that can handle calls

Make sure to create onSuccess and onError call back functions.

Example:
``` java
function onSuccess(result){
  console.log("Success:"+result);
}

function onError(result) {
  console.log("Error:"+result);
}
```
