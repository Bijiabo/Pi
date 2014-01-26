/**
 * Created by root on 14-1-25.
 */
var gpio = require("../pi-gpio"),
    fs = require("fs");
var port = 7;
var LEDopen = function(){
        gpio.open(port, "output", function(err) {     // Open pin 16 for output
            console.log('open----------------------------'+new Date());
            gpio.write(port, 1, function() {          // Set pin 16 high (1)
                console.log('write');
                gpio.close(port);                     // Close pin 16
                console.log('close');
            });
        });
    }
var toggleLED = setInterval(function(){LEDopen()},500);

var LEDopen2 = function(){
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
//LEDopen2();
