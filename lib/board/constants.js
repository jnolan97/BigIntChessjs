'use strict';

const Pieces = Object.freeze({
    P: 0,
    K: 1,
    B: 2,
    R: 3,
    Q: 4,
    K: 5,
});
const Rank = Object.freeze({
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
});
const File = Object.freeze({
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
});
module.exports = { Pieces, Rank, File };
