var Jasmine = require('jasmine')
var jasmine = new Jasmine()
var b       = require('../bitop')

describe('bitwise op', function() {

    it('`and` works', function() {
        expect(b.and(4, 4)).toBe(4)
        expect(b.and(4, 3)).toBe(0)
    })

    it('`or` works', function() {
        expect(b.or(4, 4)).toBe(4)
        expect(b.or(4, 3)).toBe(7)
    })

    it('`xor` works', function() {
        expect(b.xor(4, 4)).toBe(0)
        expect(b.xor(4, 3)).toBe(7)
    })

    it('`not` works', function() {
        expect(b.not(4)).toBe(-5)
        expect(b.not(3)).toBe(-4)
    })

    it('`lshift` works', function() {
        expect(b.lshift(4, 4)).toBe(64)
        expect(b.lshift(4, 3)).toBe(32)
    })

    it('`rshift` works', function() {
        expect(b.rshift(4, 1)).toBe(2)
        expect(b.rshift(4, 2)).toBe(1)
    })

    it('`zrshift` works', function() {
        expect(b.zrshift(4, 1)).toBe(2)
        expect(b.zrshift(4, 2)).toBe(1)
    })

})

jasmine.execute()