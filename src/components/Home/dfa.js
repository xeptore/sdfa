import { uniq, toArray } from 'lodash'

export class DFA {
  constructor (initial, transitions, acceptings, alphabets, states) {
    this.Initial = initial
    this.Transitions = transitions
    this.Acceptings = acceptings
    this.Alphabets = alphabets
    this.States = states
  }
}

export function isValid (dfa) {
  for (const [k, v] of dfa.Transitions.entries()) {
    if (uniq(toArray(v.keys())).length !== dfa.Alphabets.length) {
      return false
    }
  }
  return true
}
