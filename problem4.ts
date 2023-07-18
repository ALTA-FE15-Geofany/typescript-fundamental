function isPangram(text: string): boolean {
    const alfabet: Set<string> = new Set('abcdefghijklmnopqrstuvwxyz')
    text = text.toLowerCase()
    for (const huruf of text) {
      if (huruf.match(/[a-z]/i)) {
        alfabet.delete(huruf)
        if (alfabet.size === 0) {
          return true
        }
      }
    }
    return false
  }
  
console.log(isPangram("The quick brown fox jumps over the lazy dog"))
console.log(isPangram("Public junk dwarves hug my beloved pillow"))
console.log(isPangram("Jim quickly realized that the beautiful gowns are expensive"))