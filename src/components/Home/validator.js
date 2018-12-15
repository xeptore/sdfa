let statesCount = 0
let alphabets = []

function first () {
  const f = '2 a b'
  const parts = f.split(' ').filter(p => p.length !== 0).map(p => p.trim())
  const num = parts[0]
  const alphas = parts.slice(1)
  if (!isNaN(num)) {
    if (alphas.length === parseInt(num)) {
      alphabets = alphas
      return true
    }
  }
  return false
}

function sec () {
  const l = '17'
  const n = l.trim()
  if (!isNaN(n)) {
    statesCount = n
    return true
  }
  return false
}

function third () {
  const l = '24'
  const n = l.trim()
  if (!isNaN(n)) {
    return true
  }
  return false
}

function rest () {
  const lines = ['0 b 1', '0 a 0', '1 a 1', '1 b 0']
  for (const line in lines) {
    const parts = line.split(' ').filter(p => p.length !== 0).map(p => p.trim())
    if (parts.length === 3) {
      const states = [parts[0], parts[2]]
      for (const s in states) {
        if (isNaN(s) || parseInt(s) < 0 || parseInt(s) >= statesCount) {
          return false
        }
      }
      if (alphabets.includes(parts[1])) {
        continue
      }
    }
    return false
  }
  return true
}

function nthPlus1 () {
  const l = '1 1'
  const parts = l.split(' ').filter(p => p.length !== 0).map(p => p.trim())
  const count = parts[0]
  const endStates = parts.slice(1)
  if (!isNaN(count)) {
    if (endStates.length === count) {
      for (const s in endStates) {
        if (isNaN(s) || parseInt(s) < 0 || parseInt(s) >= statesCount) {
          return false
        }
      }
      return true
    }
  }
  return false
}

function last () {
  const l = '$'
  const txt = l.trim()
  if (txt.length === 1 && txt === '$') {
    return true
  }
  return false
}
