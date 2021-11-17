function translatePigLatin(str) {
const VOEWS = ['a','e','i','o','u']
let result = ''
const firstChar = str[0]
if(VOEWS.includes(firstChar)){
    result =  `${str}way`
}
    return result
}
  
console.log(translatePigLatin("algorithm"));