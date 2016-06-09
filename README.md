# evm <a href="https://github.com/sindresorhus/awesome-electron"><img width="116" height="20" src="https://img.shields.io/badge/awesome-electron-ff69b4.svg"></a> <a href="https://github.com/fritx/evm"><img width="78" height="20" src="https://img.shields.io/badge/github-MIT-blue.svg"></a>

> Electron Version Manager

- [x] unix support
- [x] windows support (experimental)
- [x] shares ~/.electron w/ electron-prebuilt, etc
- [x] evm install
- [x] evm use
- [x] evm ls

```shell
npm install -g evm
```

```shell
evm install 0.33.6
evm install 1.2.1
evm use 1.2.1
evm use 0.33.6
evm ls

# equivalent to
npm i -g electron-prebuilt@0.33.6
npm i -g electron-prebuilt@1.2.1
```

```shell
# set a mirror (china)
ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/

# or windows
set ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/

# platform/arch specific
evm install 0.33.6 win32 ia32
evm install 1.2.1 darwin x64
evm use 1.2.1 linux ""
evm use 1.2.1 "" x64

evm ls
>
    v0.33.6 - win32 - ia32
  * v1.2.1 - linux - x64
    v1.2.1 - darwin - x64
```

See also: [electron-download](https://github.com/electron-userland/electron-download), [electron-prebuilt](https://npmjs.org/electron-prebuilt), [nwjs](https://github.com/egoist/nwjs), [prt](https://github.com/fritx/prt)
