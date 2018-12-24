'use strict'

const colors = require('colors')
const { safeLoad } = require('js-yaml')
const { readFileSync } = require('fs')
const { join } = require('path')
const electronBuilder = require('electron-builder')
const Platform = electronBuilder.Platform

let configuration
try {
  configuration = safeLoad(readFileSync(join(__dirname, 'electron-builder.yml'), 'utf8'))
} catch (error) {
  console.error(colors.red('error parsing configuration file'))
}

electronBuilder.build({
  targets: Platform.WINDOWS.createTarget('nsis', [electronBuilder.Arch.x64]),
  config: {
    icon: configuration.win.icon,
    nsis: configuration.nsis
  }
}).then(result => {
  console.log(colors.green(`sucessfully built at: ${result[1]}`))
}).catch(error => {
  console.error(colors.red('unable to build windows x64'))
  console.error(colors.gray(error))
})

electronBuilder.build({
  targets: Platform.WINDOWS.createTarget('nsis', [electronBuilder.Arch.ia32]),
  config: {
    icon: configuration.win.icon,
    nsis: configuration.nsis
  }
}).then(result => {
  console.log(colors.green(`sucessfully built at: ${result[1]}`))
}).catch(error => {
  console.error(colors.red('unable to build windows ias32'))
  console.error(colors.gray(error))
})
