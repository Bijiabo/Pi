/**
 * Created by root on 14-1-25.
 */
var gpio = require("../pi-gpio"),
    fs = require("fs");
var LED_port = 7;
var LEDopen = function(){
        gpio.open(LED_port, "output", function(err) {     // Open pin 16 for output
            gpio.write(LED_port, 1, function() {          // Set pin 16 high (1)
                gpio.close(LED_port,LEDopen());                     // Close pin 16
            });
        });
    }
LEDopen();
