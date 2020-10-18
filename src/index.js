const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let str = '';
    let decoderStr = [];
    let words = expr.match(/(.{1,10})/gim);
    for (let i = 0; i < words.length; i++) {
        if (words[i] === '**********') {
            decoderStr.push(' ');
        } else {
            let a = [];
            words[i] = words[i].match(/(.{1,2})/gim);
            words[i] = words[i].filter(word => word !== '00');
            words[i].forEach(item => {
                if (item === '10') {
                    a.push('.');
                } else if (item === '11') {
                    a.push('-');
                }
            });
            decoderStr.push(a.join(''));
        }

    }
    for (let k = 0; k < decoderStr.length; k++) {
        if (MORSE_TABLE[decoderStr[k]] === undefined) {
            str += ' ';
        } else {
            str += MORSE_TABLE[decoderStr[k]];
        }
    }
    return str;

}

module.exports = {
    decode
}