var CallNumber = function(){};

CallNumber.prototype.dial = function(success, failure, number, bypassAppChooser){
    //defaults
    if(typeof(success) === 'undefined'){
        success = function(){};
    }
    if(typeof(failure) === 'undefined'){
        failure = function(){};
    }
     if(typeof(bypassAppChooser) === 'undefined'){
        bypassAppChooser = false;
    }
    //basic verification
    if(/[0-9\- ]{6,}/.test(String(number))){
        cordova.exec(success, failure, "CallNumber", "callNumber", [number, bypassAppChooser]);
        return true;
    }else{
        return false;
    }
};

CallNumber.prototype.isSupported = function(success, failure){
    //defaults
    if(typeof(success) === 'undefined'){
        success = function(){};
    }
    if(typeof(failure) === 'undefined'){
        failure = function(){};
    }
    cordova.exec(success, failure, "CallNumber", "isCallSupported");
};

//Plug in to Cordova
cordova.addConstructor(function() {
    if (!window.Cordova) {
        window.Cordova = cordova;
    };
    if(!window.plugins) window.plugins = {};
    window.plugins.phone = new CallNumber();
});
