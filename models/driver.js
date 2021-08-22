'use strict';

const events = require('../events');

events.on('driverPickup', payload => {
    setTimeout(() => {
        console.log(`DRIVER: picked up ${payload.orderID}`);
        events.emit('delivered', payload)
    }, 1000)
});

events.on('delivered', payload => {
    setTimeout(() => {
        console.log(`DRIVER: delivered up ${payload.orderID}`);
        events.emit('driverDelivered', payload)
    }, 3000);
})

module.exports = events
