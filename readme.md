# Bitop

Funtional JavaScript library for bitwise operations. Bitwise operations treats operands as a set of 32 bits. For example: 5 is represented as 0101, 12 is represented as 1100.

# and

`Number -> Number -> Number`

Returns a one in each bit position for which the corresponding bits of both operands are ones.

```js
bitop.and(4, 3)    //=> 0
// 0100 and 0011 = 0000
```

# or

`Number -> Number -> Number`

Returns a one in each bit position for which the corresponding bits of either or both operands are ones.

```js
bitop.or(4, 3)    //=> 7
// 0100 or 0011 = 0111
```

# xor

`Number -> Number -> Number`

Returns a one in each bit position for which the corresponding bits of either but not both operands are ones.

```js
bitop.xor(4, 3)    //=> 7
// 0100 xor 0011 = 0111
```

# not

`Number -> Number`

Inverts the bits of its operand.

```js
bitop.not(4)    //=> -5
// not 0100 = -0101
```

# lshift

`Number -> Number -> Number`

Shifts a in binary representation b (< 32) bits to the left, shifting in zeroes from the right.

```js
bitop.lshift(4, 3)    //=> 7
// 0100 lshift 0011 = 0111
```

# rshift

`Number -> Number -> Number`

Shifts a in binary representation b (< 32) bits to the right, discarding bits shifted off.

```js
bitop.rshift(4, 1)    //=> 2
// 0100 rshift 0001 = 0010
```

# zrshift

`Number -> Number -> Number`

Shifts a in binary representation b (< 32) bits to the right, discarding bits shifted off, and shifting in zeroes from the left.

```js
bitop.zrshift(4, 1)    //=> 2
// 0100 zrshift 0001 = 0010
```

How bitwise operations works https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators

MIT (c) 2016 Yosbel Marín