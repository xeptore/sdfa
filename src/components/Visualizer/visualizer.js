import StateMachine from 'javascript-state-machine'
import Visualize from 'javascript-state-machine/lib/visualize'

import Globals from '../../globals'

import Viz from 'viz.js'
const { Module, render } = require('viz.js/full.render')

export default {
  name: 'Visualizer',
  created () {
    const fsmConfig = { init: '0', transitions: [] }
    for (const [pk, pv] of Globals.DFA.Transitions.entries()) {
      for (const [ck, cv] of pv.entries()) {
        fsmConfig.transitions.push({ name: ck, from: pk, to: cv })
      }
    }

    console.log('DFA:', Globals.DFA)
    console.log('fsm:', fsmConfig)

    const fsm = new StateMachine(fsmConfig)
    const dot = Visualize(fsm)
    const viz = new Viz({ Module, render })
    viz.renderSVGElement(dot).then(res => {
      console.log('res:', res)
      document.getElementById('diagram').innerHTML = res
    })
  }
}
