import Wrapper from '../Wrapper/Wrapper.vue'
import Breadcrumb from '../Breadcrumb/Breadcrumb.vue'

import {
  remote
} from 'electron'
import {
  readFileSync,
  statSync
} from 'fs'
import {
  Parser
} from './parser'
import Globals from '../../globals'

import {
  Notify
} from './notify'

function readAndParseFile (path, $router) {
  const stats = statSync(path)
  if (stats && stats.size >= 1000000) {
    const notify = new Notify()
    notify.setContent('حجم فایل ورودی خیلی زیاده!')
    notify.open()
    return
  }
  const data = readFileSync(path, 'utf8')
  const parser = new Parser(data)
  if (!parser.IsValid()) {
    console.error('invalid file')
    const notify = new Notify()
    notify.setContent('فایل وروردی معتبر نیست.')
    notify.open()
    return false
  }
  Globals.DFA = parser.Parse()
  $router.push({
    path: '/form'
  })
}

export default {
  name: 'Home',
  components: {
    Wrapper,
    Breadcrumb
  },
  methods: {
    uploadButtonClicked: function (e) {
      const files = remote.dialog.showOpenDialog({
        properties: ['openFile'],
        title: 'Select Your File',
        filters: [{
          extensions: ['txt'],
          name: 'dfa'
        }]
      }) || []
      if (files.length !== 1 && files[0].type === 'text/plain') {
        const notify = new Notify()
        notify.setContent('فایل وروردی معتبر نیست.')
        notify.open()
        return false
      }
      readAndParseFile(files[0], this.$router)
    },
    ondrop: function (e) {
      e.preventDefault()
      const files = e.dataTransfer.files
      if (files.length === 1) {
        readAndParseFile(files[0].path, this.$router)
      }
      return false
    },
    ondrag: e => {
      e.preventDefault()
      return false
    }
  }
}
