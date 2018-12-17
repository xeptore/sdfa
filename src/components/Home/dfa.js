export class DFA {
  constructor (initial, transitions, acceptings, alphabets, states) {
    this.Initial = initial
    this.Transitions = transitions
    this.Acceptings = acceptings
    this.Alphabets = alphabets
    this.States = states
  }

  Accepts (input) {
    let state = this.Initial
    for (const ch of input) {
      if (!this.Transitions.has(state) || !this.Transitions.get(state).has(ch)) {
        return false
      }
      state = this.Transitions.get(state).get(ch)
    }
    return typeof state !== 'undefined' && this.Acceptings.map(es => String(es)).includes(state)
  }
}
