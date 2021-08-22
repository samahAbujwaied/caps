'use strict';
require('dotenv').config();
const faker = require('faker');
const events = require('../events');

setInterval(() => {
    setTimeout(() => {
        let customerOrder = {
            storeName: process.env.NAME || 'Samah',
            customerName: faker.name.findName(),        
            orderID: faker.datatype.uuid(),        
            address: faker.address.streetAddress()    
        }
        events.emit('pickup', customerOrder)
    }, 5000);
}, 5000);

events.on('vendor-delivered', payload => {
    console.log(`Thank you for delivering ${payload.orderID}`);
    events.emit('delivered', payload)
})

module.exports = events;   
