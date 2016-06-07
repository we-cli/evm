#!/usr/bin/env node
var args = process.argv.slice(2)
var evm = require('./')

switch (args[0]) {
  case 'install':
  case 'use':
    evm[args[0]]({ version: args[1] }, function (err) {
      // if (err) throw err
      if (err) console.error(err)
    })
    break;
  default:
    console.info('repo: https://github.com/fritx/evm')
    console.info('eg. evm install 1.2.1')
    console.info('eg. evm use 0.33.5')
}
