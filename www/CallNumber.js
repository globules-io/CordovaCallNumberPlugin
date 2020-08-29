var CallNumber = function(){};

CallNumber.prototype.dial = function(number, bypassAppChooser, success, failure){
    //defaults
    if(typeof(success) !== 'function'){
        success = function(){};
    }
    if(typeof(failure) !== 'function'){
        failure = function(){};
    }
    if(typeof(bypassAppChooser) !== 'boolean'){
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
    if(typeof(success) !== 'function'){
        success = function(){};
    }
    if(typeof(failure) !== 'function'){
        failure = function(){};
    }
    cordova.exec(success, failure, "CallNumber", "isCallSupported");
};

//Plug in to Cordova
if(!window.hasOwnProperty('plugins')){
    window.plugins = {};
}
window.plugins.phone = new CallNumber();