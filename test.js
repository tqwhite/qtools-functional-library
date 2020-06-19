#!/usr/local/bin/node
'use strict';

const qt = require('qtools-functional-library');

//console.dir(qt.help());

console.dir({"process.argv [test.js.]":process.argv});


const verbose=process.argv.filter(item=>item.match(/verbose/i))[0]?true:false
const logErrors=process.argv.filter(item=>item.match(/logErrors/i))[0]?true:false


const result=qt.test({logErrors, verbose});
console.log(result?"PASSED ALL TESTS":"");


process.exit(result?0:1);