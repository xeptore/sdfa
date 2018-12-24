'use strict'

const electronBuilder = require('electron-builder')
const Platform = electronBuilder.Platform

electronBuilder.build({
  targets: Platform.WINDOWS.createTarget('nsis', [electronBuilder.Arch.x64]),
  config: {
    icon: 'src/assets/images/icons/app/app.ico',
    nsis: {
      oneClick: false,
      installerIcon: 'src/assets/images/icons/installer/installer.ico',
      uninstallerIcon: 'src/assets/images/icons/uninstaller/uninstaller.ico',
      perMachine: false,
      allowToChangeInstallationDirectory: true
    }
  }
}).then(result => {
  console.log(result)
})
