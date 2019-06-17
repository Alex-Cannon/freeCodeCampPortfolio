const assert = require('chai').assert;
const getChallenges = require('./helpers.js').getChallenges;

let challenges = getChallenges('/challenges/javascript');
assert.typeOf(challenges, 'Array');