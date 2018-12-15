export class Parser {
  constructor () {
    this.Prase = transitions => {
      const DFA = new Map()
      for (const transition of transitions) {
        const p = transition.split(' ').filter(a => a.length !== 0).map(a => a.trim)
        const from = p[0]
        const through = p[1]
        const to = p[2]
        const tm = new Map()
        tm.set(through, to)
        if (DFA.has(from)) {
          for (const [k, v] of DFA.get(from)) {
            tm.set(k, v)
          }
        }
        DFA.set(from, tm)
      }
      return DFA
    }
  }
}

export class DFA {
  constructor (initial, transitions, acceptings) {
    this.Initial = initial
    this.Transitions = transitions
    this.Acceptings = acceptings
    this.Accepts = input => {
      let state = this.Initial
      for (const ch of input) {
        state = this.Transitions.get(state).get(ch)
      }
      return typeof state !== 'undefined' && this.Acceptings.map(es => String(es)).includes(state)
    }
  }
}
