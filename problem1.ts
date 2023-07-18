
function acronym(phrase: string): string {
    const phraseSplit = phrase.split(' ')
    console.log(phraseSplit)
    let result = ''
    for (let i = 0; i < phraseSplit.length; i++) {
        result += phraseSplit[i][0].toUpperCase()
    }
    return result
}

console.log(acronym("Portable Network Graphic"))

