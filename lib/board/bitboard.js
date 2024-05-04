'use strict';
const { Rank, File, Pieces } = require('./constants');
module.exports = class Bitboard {
    constructor() {
        this.color = Object.freeze({ WHITE: 0, BLACK: 1 });
        this.pieces = Array(2)
            .fill(0)
            .map(() => Array(6).fill(0));
    }
    getDefaults = () => {
        console.log('Color ', this.color);
        console.log('PiecesArr ', this.pieces.length, ' ', this.pieces);
        console.log(Rank, File, Pieces);
    };
};
