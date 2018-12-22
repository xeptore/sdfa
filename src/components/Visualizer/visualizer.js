import Wrapper from '../Wrapper/Wrapper.vue'

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

import onErrorTemplate from './onerror.html'

function drawDiagram () {
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
  let dot = Visualize(fsm, {
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

  dot = write(graph)

  select('#diagram').graphviz({
    useWorker: false
  }).renderDot(dot, () => {
    const svg = document.getElementsByTagName('svg')[0]
    svg.setAttribute('height', '90%')
    svg.setAttribute('width', '90%')

    // remove all event listeners from generated svg
    const rep = svg.cloneNode(true)
    svg.parentNode.replaceChild(rep, svg)
  }).onerror(function (error) {
    console.error(error)
    document.getElementById('diagram').innerHTML = onErrorTemplate
  })
}

export default {
  name: 'Visualizer',
  components: {
    Wrapper
  },
  mounted () {
    drawDiagram()
  },
  methods: {
    back (e) {
      this.$router.go(-1)
    }
  }
}
