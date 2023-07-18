function isArmstrongNumber(number: number): boolean {
    const numberString: string = number.toString()
    const numDigits: number = numberString.length
    let sum: number = 0
  
    for (let i: number = 0; i < numDigits; i++) {
      const digit: number = parseInt(numberString[i])
      sum += Math.pow(digit, numDigits)
    }
  
    return sum === number
  }
  
  console.log(isArmstrongNumber(153))
  console.log(isArmstrongNumber(9))
  console.log(isArmstrongNumber(10))
  