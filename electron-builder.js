'use strict'

const { waterfall } = require('async')
const colors = require('colors')
const { safeLoad } = require('js-yaml')
const { readFileSync, writeFileSync } = require('fs')
const { join, resolve } = require('path')
const electronBuilder = require('electron-builder')
const Platform = electronBuilder.Platform

let configuration
try {
  configuration = safeLoad(readFileSync(join(__dirname, 'electron-builder.yml'), 'utf8'))
} catch (error) {
  console.error(colors.red('error parsing configuration file'))
}

function successfulBuild (platform, type, arch, path) {
  console.log(colors.green(`\n\tsuccessfully built ${platform}-${type}-${arch} at: ${path}\n`))
}

function onError (error, platform, type, arch) {
  if (!error) {
    return
  }
  console.error(colors.red(`Unable to build`))
  console.error(colors.red(`\tPlatform: ${platform}`))
  console.error(colors.red(`\tType: ${type}`))
  console.error(colors.red(`\tArch: ${arch}`))
  const errorLogFile = `error.${platform}-${type}-${arch}.log`
  writeFileSync(errorLogFile, error)
  console.error(colors.red(`A complete log can be found in:\n\t${resolve(errorLogFile)}`))
}

if (process.platform === 'linux') {
  waterfall([
    cb => {
      electronBuilder.build({
        targets: Platform.LINUX.createTarget('deb', electronBuilder.Arch.x64),
        config: {
          icon: configuration.linux.icon
        }
      })
        .then(result => {
          successfulBuild('linux', 'deb', 'x64', result[0])
          cb(null)
        })
        .catch(err => {
          cb(err, 'linux', 'deb', 'x64')
        })
    },
    cb => {
      electronBuilder.build({
        targets: Platform.LINUX.createTarget('deb', electronBuilder.Arch.ia32),
        config: {
          icon: configuration.linux.icon
        }
      })
        .then(result => {
          successfulBuild('linux', 'deb', 'ia32', result[0])
          cb(null)
        })
        .catch(err => {
          cb(err, 'linux', 'deb', 'ia32')
        })
    },
    cb => {
      electronBuilder.build({
        targets: Platform.LINUX.createTarget('rpm', electronBuilder.Arch.x64),
        config: {
          icon: configuration.linux.icon
        }
      })
        .then(result => {
          successfulBuild('linux', 'rpm', 'x64', result[0])
          cb(null)
        })
        .catch(err => {
          cb(err, 'linux', 'rpm', 'x64')
        })
    },
    cb => {
      electronBuilder.build({
        targets: Platform.LINUX.createTarget('rpm', electronBuilder.Arch.ia32),
        config: {
          icon: configuration.linux.icon
        }
      })
        .then(result => {
          successfulBuild('linux', 'rpm', 'ia32', result[0])
          cb(null)
        })
        .catch(err => {
          cb(err, 'linux', 'rpm', 'ia32')
        })
    },
    cb => {
      electronBuilder.build({
        targets: Platform.LINUX.createTarget('tar.gz', electronBuilder.Arch.x64),
        config: {
          icon: configuration.linux.icon
        }
      })
        .then(result => {
          successfulBuild('linux', 'tar.gz', 'x64', result[0])
          cb(null)
        })
        .catch(err => {
          cb(err, 'linux', 'tar.gz', 'x64')
        })
    },
    cb => {
      electronBuilder.build({
        targets: Platform.LINUX.createTarget('tar.gz', electronBuilder.Arch.ia32),
        config: {
          icon: configuration.linux.icon
        }
      })
        .then(result => {
          successfulBuild('linux', 'tar.gz', 'ia32', result[0])
          cb(null)
        })
        .catch(err => {
          cb(err, 'linux', 'tar.gz', 'ia32')
        })
    }
  ], (error, platform, type, arch) => {
    onError(error, platform, type, arch)
  })
}

if (process.platform === 'win32') {
  waterfall([
    cb => {
      electronBuilder.build({
        targets: Platform.WINDOWS.createTarget('nsis', electronBuilder.Arch.x64),
        config: {
          icon: configuration.win.icon,
          nsis: configuration.nsis
        }
      })
        .then(result => {
          successfulBuild('win', 'nsis', 'x64', result[0])
          cb(null)
        })
        .catch(err => {
          cb(err, 'win', 'nsis', 'x64')
        })
    },
    cb => {
      electronBuilder.build({
        targets: Platform.WINDOWS.createTarget('nsis', electronBuilder.Arch.ia32),
        config: {
          icon: configuration.win.icon,
          nsis: configuration.nsis
        }
      })
        .then(result => {
          successfulBuild('win', 'nsis', 'ia32', result[0])
          cb(null)
        })
        .catch(err => {
          cb(err, 'win', 'nsis', 'ia32')
        })
    }
  ], (error, platform, type, arch) => {
    onError(error, platform, type, arch)
  })
}
