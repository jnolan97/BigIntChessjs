const Bitboard = require('./board/bitboard.js');
const { testDebruijn } = require('./board/bitboardOps.js');

module.exports = function main() {
    const bitboard = new Bitboard();
    bitboard.getDefaults();
    testDebruijn();
};
