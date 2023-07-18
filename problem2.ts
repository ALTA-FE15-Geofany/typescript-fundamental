function dcryptAtbash(text: string): string {
    const alphabet: string = 'abcdefghijklmnopqrstuvwxyz'
    const balikAlphabet: string = 'zyxwvutsrqponmlkjihgfedcba'
    let result: string = ''
  
    for (let i: number = 0 ;i < text.length; i++) {
      const char: string = text[i].toLowerCase()
      let index = alphabet.indexOf(char)
  
      if (index !== -1) {
        const cipherChar = balikAlphabet[index]
        result += char === text[i] ? cipherChar : cipherChar.toUpperCase()
      } else {
        result += text[i]
      }
    }
  
    return result
  }
  
  console.log(dcryptAtbash("Olivn rkhfn wloli hrg znvg")) 
  console.log(dcryptAtbash("Svool dliow! R'n ovzimrmt gbkvhxirkg!")) 
  console.log(dcryptAtbash("Gsv jfrxp yildm ulc qfnkh levi gsv ozab wlt"))
  