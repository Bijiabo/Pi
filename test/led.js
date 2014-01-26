/**
 * Created by root on 14-1-25.
 */
var gpio = require('rpi-gpio');
gpio.setup(7, gpio.DIR_OUT, write);

function write() {
    gpio.write(7, 1, function(err) {
//        if (err) throw err;
        console.log(err);
        console.log('Written to pin');
    });
}
