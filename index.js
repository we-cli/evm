// inspired by electron-download, electron-prebuilt
// inspired by nvm, nrm, nwjs
// inspired by prt

// todo: use promise
var download = require('electron-download')
var extract = require('extract-zip')
var exec = require('child_process').exec
var basename = require('path').basename
var extname = require('path').extname
var dirname = require('path').dirname
var join = require('path').join
var fs = require('fs')
var os = require('os')

exports.install = install
exports.use = use
exports.list = list
exports.curr = curr

function curr(cb) {
  exec('electron -v', function (err, stdout) {
    if (!err) {
      stdout = ' ' + stdout + ' '
      var mat = stdout.match(/\s+(v\d+(\.\d)+)\s+/)
      if (mat) return cb(null, mat[1])
    }
    cb(new Error('no electron in use'))
  })
}

function list (cb) {
  fs.readdir(join(os.homedir(), '.electron'), function (err, keys) {
    if (err) return cb(err)
    var items = keys.reduce(function (acc, key) {
      if (key.indexOf('.zip') < 0) {
        var mat = key.match(/^electron\-(.+?)\-(.+?)\-(.+?)$/)
        if (mat) acc.push(mat.slice(1, 4))
      }
      return acc
    }, [])
    cb(null, items)
  })
}

function install (opts, cb) {
  opts.platform = opts.platform || process.platform
  opts.arch = opts.arch || process.arch

  download(opts, function (err, zip) {
    if (err) return cb(err)
    var dir = join(dirname(zip), basename(zip, '.zip'))
    extract(zip, { dir: dir }, function (err) {
      // if (err && err.code !== 'EEXIST') return cb(err)
      if (err) return cb(err)
      cb()
    })
  })
}

function use (opts, cb) {
  opts.platform = opts.platform || process.platform
  opts.arch = opts.arch || process.arch

  var bin = {
    darwin: 'Electron.app/Contents/MacOS/Electron',
    freebsd: 'electron',
    linux: 'electron',
    win32: 'electron.exe'
  }[opts.platform]
  var dir = ['electron', 'v' + opts.version, opts.platform, opts.arch].join('-')
  var dist = join(os.homedir(), '.electron', dir, bin)

  fs.exists(dist, function (exists) {
    if (!exists) {
      console.warn('v' + opts.version + ' is not installed')
      return cb()
    }
    crosslink(dist, cb)
  })
}

function crosslink (file, cb) {
  if (process.platform === 'win32') {
    winlink(file, cb)
  } else {
    var target = '/usr/local/bin/electron'
    fs.unlink(target, function () {
      fs.symlink(file, target, cb)
    })
  }
}

// experimental: windows support
function winlink (file, cb) {
  var ext = extname(file)
  var base = basename(file, ext)
  var cmdfile = join(process.env.windir, base + '.cmd')
  var cmd = '"' + file + '" %*'
  fs.writeFile(cmdfile, cmd, cb)
}
