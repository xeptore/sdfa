import Wrapper from '../Wrapper/Wrapper.vue'
import Breadcrumb from '../Breadcrumb/Breadcrumb.vue'
import Navigator from '../Navigator/Navigator.vue'
import {
  remote
} from 'electron'
import {
  readFileSync
} from 'fs'
import {
  Parser
} from './parser'
import Globals from '../../globals'

import {
  modal
} from './notify'

function readAndParseFile (path, $router) {
  const data = readFileSync(path, 'utf8')
  const parser = new Parser(data)
  if (!parser.IsValid()) {
    console.error('invalid file')
    modal.open()
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
    Breadcrumb,
    Navigator
  },
  methods: {
    uploadButtonClicked: function (e) {
      const files = remote.dialog.showOpenDialog({
        properties: ['openFile'],
        filters: [{
          name: 'texts',
          extensions: 'txt'
        }]
      }) || []
      if (files.length !== 1) {
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
