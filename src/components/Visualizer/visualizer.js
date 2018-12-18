import Wrapper from '../Wrapper/Wrapper.vue'

import './viz.worker'

import StateMachine from 'javascript-state-machine'
import Visualize from 'javascript-state-machine/lib/visualize'

import Globals from '../../globals'

import {
  read,
  write
} from 'graphlib-dot'

import {
  select
} from 'd3-selection'
import 'd3-graphviz'

export default {
  name: 'Visualizer',
  components: {
    Wrapper
  },
  mounted () {
    const fsmConfig = {
      init: '0',
      transitions: []
    }
    for (const [pk, pv] of Globals.DFA.Transitions.entries()) {
      for (const [ck, cv] of pv.entries()) {
        fsmConfig.transitions.push({
          name: ck,
          from: pk,
          to: cv
        })
      }
    }

    const fsm = new StateMachine(fsmConfig)
    const dot = Visualize(fsm, {
      name: 'DFA',
      orientation: 'horizontal'
    })

    const graph = read(dot)

    graph.setNode('0', {
      shape: 'circle'
    })
    graph.nodes().forEach(n => {
      if (Globals.DFA.Acceptings.indexOf(n) !== -1) {
        graph.setNode(n, {
          style: 'filled',
          fillcolor: 'grey',
          shape: 'doublecircle'
        })
      }
    })

    select('#diagram').graphviz().renderDot(write(graph), () => {
      const svg = document.getElementsByTagName('svg')[0]
      svg.setAttribute('height', '90%')
      svg.setAttribute('width', '90%')
    })
  }
}
