//const expect = require('jest');
const jest = require('jest');
const {
    bitScanForwardMulti,
    bitScanForwardXor,
    popCount,
} = require('../lib/board/bitboardOps.js');
const {
    bitBoard00,
    deBruijnArr,
    debruejnXor,
    intDebrujnArr,
    intXorLookupArray,
    convertArrayBigInt,
} = require('../lib/utils/bitboardUtils.js');

describe('Bitboard', () => {
    test('BitScan returns 0 with empty board', () => {
        let count = popCount(bitBoard00);
        expect(count).toBe(0);
    });
});
