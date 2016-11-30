;(function() {

    var curry = (typeof R === 'undefined') ? require('ramda').curry : R.curry
    var bitop = {}

    bitop.and = curry(function and(a, b) {
        return a & b
    })

    bitop.or = curry(function or(a, b) {
        return a | b
    })

    bitop.xor = curry(function xor(a, b) {
        return a ^ b
    })

    bitop.not = curry(function not(a) {
        return ~ a
    })

    bitop.lshift = curry(function lshift(a, bits) {
        return a << bits
    })

    bitop.rshift = curry(function rshift(a, bits) {
        return a >> bits
    })

    bitop.zrshift = curry(function zrshift(a, bits) {
        return a >>> bits
    })

    // export
    if (typeof exports !== 'undefined') {
        module.exports = bitop
    } else {
        this.bitop = bitop
    }

})()