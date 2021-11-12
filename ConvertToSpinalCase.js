// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    words = []
    word = ''
    for (const charc of str) {
        if(charc === ' ' || charc === '_') {
            words.push(word)
            word = ''
        } else if( charc >= "A" && charc <= "Z" && word.length === 0) {
            word = charc.toLowerCase()
        } else if(charc >= "A" && charc <= "Z" && word.length > 0) {
            words.push(word)
            word = charc.toLowerCase()
        } else {
            word += charc
        }
    }

    if(word.length) {
        words.push(word)
    }

    
    const spinal = words.join('-')

    return spinal;
  }
  
  console.log(spinalCase('This Is Spinal Tap'));