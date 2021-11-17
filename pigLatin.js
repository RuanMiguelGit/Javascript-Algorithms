function translatePigLatin(str) {
const VOEWS = ['a','e','i','o','u']
let result = ''
let hasNoVows = true 
const firstChar = str[0]
if(VOEWS.includes(firstChar)){
    return  `${str}way`
}

for (const char in str) {
    if(VOEWS.includes(char)){
        hasNoVows = false
        break
    }
    if (hasNoVows) {
        return `${str}ay`
    }
    
}



let consoNants = ''
let firstVowIndex = 0

for(let i= 0 ; i < str.length ; i++) {
    let firstChar = str[i]
    if(VOEWS.includes(firstChar) ) {
        firstVowIndex = i
        break;
    } else {
    consoNants += firstChar
    }
    return  str.substring(firstVowIndex) + consoNants + 'ay'
}
  
}
console.log(translatePigLatin("california"));