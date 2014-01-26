/**
 * Created by root on 14-1-26.
 */
var fastgpio = require( "fastgpio" );
var port = 7;
fastgpio.prepareGPIO(port);
fastgpio.set(port);
