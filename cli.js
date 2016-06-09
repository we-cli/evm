#!/usr/bin/env node
var args = process.argv.slice(2)
var evm = require('./')

switch (args[0]) {
  case 'install':
  case 'use':
    evm[args[0]]({
      version: args[1], platform: args[2], arch: args[3]
    }, function (err) {
      if (err) console.error('  ' + String(err))
    })
    break

  case 'list':
  case 'ls':
    evm.curr(function (err, curr) {
      evm.list(function (err, items) {
        if (err) console.error('  ' + String(err))
        var output = items.reduce(function (acc, item) {
          return acc + (curr === item[0] ? '  * ' : '    ')
            + item.join(' - ') + '\n'
        }, '')
        console.log(output)
      })
    })
    break

  case 'curr':
    evm.curr(function (err, curr) {
      if (err) console.error('  ' + String(err))
      console.log(curr)
    })
    break

  default:
    console.info('  repo: https://github.com/fritx/evm')
    console.info('  eg. evm install 1.2.1')
    console.info('  eg. evm use 0.33.5')
    console.info('  eg. evm ls')
}
