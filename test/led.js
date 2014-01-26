/**
 * Created by root on 14-1-25.
 */
var gpio = require("../pi-gpio"),
    fs = require("fs");
var port = 7;
var LEDopen = function(){
        gpio.open(port, "output", function(err) {     // Open pin 16 for output
            console.log('open----------------------------');
            write(port);
        });
    }
var write = function(port){
    gpio.write(port,1,function(){
        console.log('write donw --'+new Date());
        setTimeout(function(){
            write(port);
        },500);
    })
}
//var toggleLED = setInterval(function(){LEDopen()},500);
LEDopen();
