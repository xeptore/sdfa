import Wrapper from '../Wrapper/Wrapper.vue'

import StateMachine from 'javascript-state-machine'
import Visualize from 'javascript-state-machine/lib/visualize'

import Globals from '../../globals'

import Viz from 'viz.js'
const { Module, render } = require('viz.js/full.render')

export default {
  name: 'Visualizer',
  components: {
    Wrapper
  },
  mounted () {
    const fsmConfig = { init: 0, transitions: [] }
    for (const [pk, pv] of Globals.DFA.Transitions.entries()) {
      for (const [ck, cv] of pv.entries()) {
        fsmConfig.transitions.push({ name: ck, from: pk, to: cv })
      }
    }

    const fsm = new StateMachine(fsmConfig)
    const dot = Visualize(fsm, { name: 'DFA', orientation: 'horizontal' })

    const viz = new Viz({ Module, render })
    viz.renderSVGElement(dot).then(res => {
      const wrapper = document.getElementById('diagram')
      wrapper.appendChild(res)
      const svg = wrapper.getElementsByTagName('svg')[0]
      svg.setAttribute('height', '100%')
      svg.setAttribute('width', '100%')
    })
  }
}
