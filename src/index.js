const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arrOfWords = expr.split(`**********`);
    const arrOfArrLetters = arrOfWords.map((value) => {
         const arrOfNumbers = value.split('');
         const arrOfIncodedLetters = [];
         while (arrOfNumbers.length > 0){
            let incodedletter = arrOfNumbers.splice(0, 10);
            let letter = '';
            while (incodedletter.length > 0){
                let incodedSymbol = incodedletter.splice(0, 2);
                if (incodedSymbol.join('') === '10'){
                    letter += '.';
                } else if (incodedSymbol.join('') === '11'){
                    letter += '-';
                }
            }
            arrOfIncodedLetters.push(MORSE_TABLE[letter]);
         }
         return  arrOfIncodedLetters.join('');
    })
    
    return arrOfArrLetters.join(' ');
}

module.exports = {
    decode
}