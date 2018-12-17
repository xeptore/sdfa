import Globals from '../../globals'

export class Validator {
  Validate (input, DFA) {
    const isAccepted = DFA.Accepts(input)
    console.log('isAccepted:', isAccepted)
    Globals.ValidationResult = isAccepted
  }
}
