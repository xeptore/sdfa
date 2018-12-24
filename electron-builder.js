'use strict'

const colors = require('colors')
const { safeLoad } = require('js-yaml')
const { readFileSync, writeFileSync } = require('fs')
const { join } = require('path')
const electronBuilder = require('electron-builder')
const Platform = electronBuilder.Platform

let configuration
try {
  configuration = safeLoad(readFileSync(join(__dirname, 'electron-builder.yml'), 'utf8'))
} catch (error) {
  console.error(colors.red('error parsing configuration file'))
}

if (process.platform === 'linux') {
  electronBuilder.build({
    targets: Platform.LINUX.createTarget('deb', electronBuilder.Arch.x64),
    config: {
      icon: configuration.linux.icon
    }
  }).then(result => {
    console.log(colors.green(`sucessfully built at: ${result[1]}`))
  }).catch(error => {
    console.error(colors.red('unable to build linux deb x64'))
    const errFile = 'error.linux-deb-x64.log'
    writeFileSync(errFile, error)
    console.error(colors.red(`error log in ${errFile}`))
  })

  electronBuilder.build({
    targets: Platform.LINUX.createTarget('deb', electronBuilder.Arch.ia32),
    config: {
      icon: configuration.linux.icon
    }
  }).then(result => {
    console.log(colors.green(`sucessfully built at: ${result[1]}`))
  }).catch(error => {
    console.error(colors.red('unable to build linux deb ia32'))
    const errFile = 'error.linux-deb-ia32.log'
    writeFileSync(errFile, error)
    console.error(colors.red(`error log in ${errFile}`))
  })

  electronBuilder.build({
    targets: Platform.LINUX.createTarget('rpm', electronBuilder.Arch.x64),
    config: {
      icon: configuration.linux.icon
    }
  }).then(result => {
    console.log(colors.green(`sucessfully built at: ${result[1]}`))
  }).catch(error => {
    console.error(colors.red('unable to build linux rpm x64'))
    const errFile = 'error.linux-rpm-x64.log'
    writeFileSync(errFile, error)
    console.error(colors.red(`error log in ${errFile}`))
  })

  electronBuilder.build({
    targets: Platform.LINUX.createTarget('rpm', electronBuilder.Arch.ia32),
    config: {
      icon: configuration.linux.icon
    }
  }).then(result => {
    console.log(colors.green(`sucessfully built at: ${result[1]}`))
  }).catch(error => {
    console.error(colors.red('unable to build linux rpm ia32'))
    const errFile = 'error.linux-rpm-ia32.log'
    writeFileSync(errFile, error)
    console.error(colors.red(`error log in ${errFile}`))
  })

  electronBuilder.build({
    targets: Platform.LINUX.createTarget('tar.gz', electronBuilder.Arch.x64),
    config: {
      icon: configuration.linux.icon
    }
  }).then(result => {
    console.log(colors.green(`sucessfully built at: ${result[1]}`))
  }).catch(error => {
    console.error(colors.red('unable to build linux tar.gz x64'))
    const errFile = 'error.linux-tar.gz-x64.log'
    writeFileSync(errFile, error)
    console.error(colors.red(`error log in ${errFile}`))
  })

  electronBuilder.build({
    targets: Platform.LINUX.createTarget('tar.gz', electronBuilder.Arch.ia32),
    config: {
      icon: configuration.linux.icon
    }
  }).then(result => {
    console.log(colors.green(`sucessfully built at: ${result[1]}`))
  }).catch(error => {
    console.error(colors.red('unable to build linux tar.gz ia32'))
    const errFile = 'error.linux-tar.gz-ia32.log'
    writeFileSync(errFile, error)
    console.error(colors.red(`error log in ${errFile}`))
  })
} else if (process.platform === 'win32') {
  electronBuilder.build({
    targets: Platform.WINDOWS.createTarget('nsis', electronBuilder.Arch.x64),
    config: {
      icon: configuration.win.icon,
      nsis: configuration.nsis
    }
  }).then(result => {
    console.log(colors.green(`sucessfully built at: ${result[1]}`))
  }).catch(error => {
    console.error(colors.red('unable to build windows x64'))
    const errFile = 'error.win32-x64.log'
    writeFileSync(errFile, error)
    console.error(colors.red(`error log in ${errFile}`))
  })

  electronBuilder.build({
    targets: Platform.WINDOWS.createTarget('nsis', electronBuilder.Arch.ia32),
    config: {
      icon: configuration.win.icon,
      nsis: configuration.nsis
    }
  }).then(result => {
    console.log(colors.green(`sucessfully built at: ${result[1]}`))
  }).catch(error => {
    console.error(colors.red('unable to build windows ia32'))
    const errFile = 'error.win32-ia32.log'
    writeFileSync(errFile, error)
    console.error(colors.red(`error log in ${errFile}`))
  })
}
