/**
 * Created by root on 14-1-25.
 */
var gpio = require("../pi-gpio"),
    fs = require("fs");
var LED_port = 7;
var openLED = function(){
    gpio.write(LED_port,1,function(){
        openLED();
    });
}
gpio.open(7,'output',function(err){
    openLED();
});
