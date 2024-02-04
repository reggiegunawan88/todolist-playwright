export class StringHelpers {
  static convertTo3Digits = (num: number) => {
    return convertNumTo3Digits(num)
  }
}

/**
 * Convert number to 3 digits of string
 * @returns 3 digits of string -> example: '065'
 */
function convertNumTo3Digits(num: number): string {
  return String(num).padStart(3, '0')
}
