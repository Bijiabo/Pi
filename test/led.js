/**
 * Created by root on 14-1-25.
 */
var gpio = require("../pi-gpio"),
    fs = require("fs");
var LED_port = 7;
var LEDopen = function(){
        gpio.open(LED_port, "output", function(err) {     // Open pin 16 for output
            console.log('open----------------------------');
            gpio.write(LED_port, 1, function() {          // Set pin 16 high (1)
                console.log('write');
//                gpio.close(LED_port);                     // Close pin 16
                console.log('close');
            });
        });
    }
LEDopen();
//var toggleLED = setInterval(function(){LEDopen()},500);

var LED_port2 = 11;
var LEDopen2 = function(){
    gpio.open(LED_port2, "output", function(err) {     // Open pin 16 for output
        console.log('open----------------------------');
        gpio.write(LED_port2, 1, function() {          // Set pin 16 high (1)
            console.log('write');
//            gpio.close(LED_port2);                     // Close pin 16
//            console.log('close');
        });
    });
}
LEDopen2();
