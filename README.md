# evm

> Electron Version Manager

- [x] unix support
- [x] windows support (experimental)
- [x] evm install
- [x] evm use
- [ ] evm ls

```plain
npm install -g evm
```

```plain
evm install 0.33.6
evm install 1.2.1
evm use 1.2.1
evm use 0.33.6
```

```plain
# set a mirror (china)
ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/

# or windows
set ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/

# platform/arch specific
evm install 0.33.6 win32 ia32
evm install 1.2.1 darwin x64
evm use 1.2.1 linux ""
evm use 1.2.1 "" x64
```

See also: [electron-download](https://github.com/electron-userland/electron-download), [electron-prebuilt](https://npmjs.org/electron-prebuilt), [nwjs](https://github.com/egoist/nwjs), [prt](https://github.com/fritx/prt)
