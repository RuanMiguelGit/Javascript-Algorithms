function translatePigLatin(str) {
const VOEWS = ['a','e','i','o','u']
let result = ''
let hasNoVows = true 
const firstChar = str[0]
if(VOEWS.includes(firstChar)){
    result =  `${str}way`
}

for (const char in str) {
    if(VOEWS.includes(char)){
        hasNoVows = false
        break
    }
}

if (hasNoVows) {
    result = `${str}ay`
}

    return result
}
  
console.log(translatePigLatin("glove"));