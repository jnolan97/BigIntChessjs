'use strict';
const {
    bitBoard00,
    deBruijnArr,
    debruejnXor,
    intDebrujnArr,
    intXorLookupArray,
    convertArrayBigInt,
} = require('../utils/bitboardUtils');

const max = 2n ** 64n - 1n;

function check64bit(number) {
    number > max
        ? console.log("Number doesn't fit in unsigned 64-bit integer!")
        : console.log(BigInt.asUintN(64, number));
}
const LSB_X = (x) => {
    let bigx = BigInt(x);
    return bigx & -bigx;
};

const popCount = (x) => {
    let count = 0;
    let bigIntx = BigInt(x);
    while (bigIntx !== bitBoard00) {
        count++;
        bigIntx &= bigIntx - 1n; // reset LS1B
    }
    return count;
};
const bitScanForward = (bb) => {
    if (bb === 0n) return;
    const debruijn64 = BigInt(0x03f79d71b4cb0a89n);

    return deBruijnArr[((bb & -bb) * debruijn64) >> 58n];
};

const bitScanForwardXor = (bb) => {
    if (bb === 0n) 0;
    const debruijn64 = BigInt(0x03f79d71b4cb0a89n);
    return debruejnXor[((bb ^ (bb - 1n)) * debruijn64) >> 58n];
};
const bitScanForwardMulti = (lookup, bb) => {
    if (bb === 0n) 0;
    const debruijn64 = BigInt(0x03f79d71b4cb0a89n);
    return lookup[((bb ^ (bb - 1n)) * debruijn64) >> 58n];
};
const bitboard1 =
    0b100000000000000000000000000000000001000000000000000000000001000n;
const bitboard2 =
    0b100000000000000000000000000011000000000000000000001000000001000n;
//const count = popCount(bitboard1);

//convertArrayBigInt(debruejnXor);
// const lsb1 = LSB_X(bitboard1);
// //console.log(lsb1);
// console.time('bitScan1');
// const debrujnLookup = bitScanForward(lsb1);
// console.timeEnd('bitScan1');
// console.log(debrujnLookup);

// const lsb2 = LSB_X(bitboard1);
// console.time('bitScan2');
// const lsbXor = bitScanForwardXor(lsb2);
// console.timeEnd('bitScan2');

const testDebruijn = () => {
    const lsb = LSB_X(bitboard1);
    console.time('bs2');
    const debrujnLookup = bitScanForwardMulti(intDebrujnArr, lsb);
    console.timeEnd('bs2');
    console.log(debrujnLookup);
    console.time('bs3');
    const debrujnXorLookup = bitScanForwardMulti(intXorLookupArray, lsb);
    console.timeEnd('bs3');
    console.log(debrujnXorLookup);
    const lsb2 = LSB_X(bitboard2);
    console.time('bs4');
    const dbXor2 = bitScanForwardMulti(intXorLookupArray, lsb2);
    console.timeEnd('bs4');
    console.log(dbXor2);
};
module.exports = {
    testDebruijn,
    bitScanForwardMulti,
    bitScanForwardXor,
    popCount,
};
