import { uniq, toArray } from 'lodash'

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

export function isValid (dfa) {
  for (const v of dfa.Transitions.values()) {
    if (uniq(toArray(v.keys())).length !== dfa.Alphabets.length) {
      return false
    }
  }
  return true
}
