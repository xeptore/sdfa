import Globals from '../../globals'

import { select } from 'd3-selection'
import dagreD3 from 'dagre-d3'

export default {
  name: 'Visualizer',
  mounted () {
    const g = new dagreD3.graphlib.Graph().setGraph({})
    for (let i = 0; i < Globals.DFA.States; i++) {
      g.setNode(i, { label: i, shape: 'circle' })
    }
    for (const [pk, pv] of Globals.DFA.Transitions.entries()) {
      for (const [ck, cv] of pv.entries()) {
        g.setEdge(pk, cv, { 'label': ck })
      }
    }

    g.edges().forEach(e => {
      const edge = g.edge(e)
      edge.style = ['stroke: black', 'fill: none'].join(';')
    })

    g.nodes().forEach(n => {
      const node = g.node(n)
      node.style = 'fill: whitesmoke'
      node.rx = node.ry = 10
    })

    const renderer = new dagreD3.render()
    const svg = select('svg')
    console.log('svg:', svg)
    const inner = svg.select('g')
    renderer(inner, g)

    // console.log(renderer(inner, g))
  }
}
