export class StringHelpers {
  static convertTo3Digits = (num: number) => {
    return convertNumTo3Digits(num)
  }
}

function convertNumTo3Digits(num: number): string {
  return String(num).padStart(3, '0');
}