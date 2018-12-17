import { DFA } from './dfa'

function sanitizeData (data) {
  return data.split('\n').filter(l => l.length !== 0).map(l => l.trim().split(' ').filter(p => p.length !== 0).map(p => p.trim()).join(' '))
}

export class Parser {
  constructor (data) {
    this.Data = sanitizeData(data)
    this.Transitions = []
    this.DFA = new DFA('0', new Map(), [], [], [])
  }

  IsValid () {
    const data = this.Data
    if (this.first(data[0])) {
      if (this.sec(data[1])) {
        if (this.third(data[2])) {
          if (this.rest(data.slice(3, -2))) {
            if (this.nthPlus1(data[data.length - 2])) {
              if (this.last(data[data.length - 1])) {
                return true
              }
            }
          }
        }
      }
    }
    return false
  }

  Parse () {
    const m = new Map()
    for (const transition of this.Transitions) {
      const p = transition.split(' ').filter(a => a.length !== 0).map(a => a.trim())
      const from = p[0]
      const through = p[1]
      const to = p[2]
      const tm = new Map()
      tm.set(through, to)
      if (m.has(from)) {
        for (const [k, v] of m.get(from)) {
          tm.set(k, v)
        }
      }
      m.set(from, tm)
    }
    return new DFA('0', m, this.DFA.Acceptings, this.DFA.Alphabets, this.DFA.States)
  }

  first (line) {
    const parts = line.split(' ').filter(p => p.length !== 0).map(p => p.trim())
    const num = parts[0]
    const alphas = parts.slice(1)
    if (!isNaN(num)) {
      if (alphas.length === parseInt(num)) {
        this.DFA.Alphabets = alphas
        return true
      }
    }
    return false
  }

  sec (line) {
    const n = line.trim()
    if (!isNaN(n)) {
      this.DFA.States = n
      return true
    }
    return false
  }

  third (line) {
    const n = line.trim()
    if (!isNaN(n)) {
      return true
    }
    return false
  }

  rest (lines) {
    for (const line of lines) {
      const parts = line.split(' ').filter(p => p.length !== 0).map(p => p.trim())
      if (parts.length === 3) {
        const fromto = [parts[0], parts[2]]
        for (const s of fromto) {
          if (isNaN(s) || parseInt(s) < 0 || parseInt(s) >= this.DFA.States) {
            return false
          }
        }
        if (this.DFA.Alphabets.includes(parts[1])) {
          this.Transitions.push(line)
          continue
        }
      }
      return false
    }
    return true
  }

  nthPlus1 (line) {
    const parts = line.split(' ').filter(p => p.length !== 0).map(p => p.trim())
    const count = parts[0]
    const endings = parts.slice(1)
    if (!isNaN(count)) {
      if (endings.length === Number(count)) {
        for (const s of endings) {
          if (isNaN(s) || parseInt(s) < 0 || parseInt(s) >= this.DFA.States) {
            return false
          }
        }
        this.DFA.Acceptings = endings
        return true
      }
    }
    return false
  }

  last (line) {
    const txt = line.trim()
    if (txt.length === 1 && txt === '$') {
      return true
    }
    return false
  }
}
