'use strict';

let payload = {
    store: '1-206-flowers',
    orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
    customer: 'Jamal Braun',
    address: 'Schmittfort, LA'
}
jest.useFakeTimers()

describe('Driver', () => {
    describe('CAPS', () => {
        const caps = require('../models/caps');
        it('Pickup test', () => {
            caps.emit('pickup', payload)
            expect(caps.emit('pickup', payload)).toEqual(true)
        })
        it('Transit test ', () => {
            caps.emit('transit', payload)
            expect(caps.emit('transit', payload)).toEqual(true)
        })
        it('delivered test', () => {
            caps.emit('delivered', payload)
            expect(caps.emit('delivered', payload)).toEqual(true)
        })
    })
    it('delivered', () => {
        const caps = require('../models/caps');
        caps.emit('delivered', payload)
        expect(caps.emit('delivered', payload)).toEqual(true)
    })
    it('transit', () => {
        const dri = '../models/driver';
        const driver = require(dri);
        driver.emit('transit', payload)
        expect(driver.emit('transit', payload)).toEqual(true)
    })

})

describe('TEST', () => {
    it('transit test', () => {
        const ven = '../models/vendor'
        const vendor = require(ven);
        vendor.emit('vendor-delivered', payload)
        expect(vendor.emit('vendor-delivered', payload)).toEqual(true)
    })

})
