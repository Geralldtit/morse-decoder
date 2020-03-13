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
  if(expr.length%10!=0) return "Error: Input string is not a multiple of 10!";

  var result = [];
  for(let i = 0; i < expr.length; i+=10){
    result.push(convertBinaryToText(expr.substr(i, 10)));
  }

  return result.join('');
}

function convertBinaryToText(encodedChar){
  if(encodedChar[0] == "*") return " ";
  let morse = [];
  for(let k = 0; k < encodedChar.length; k+=2){
    if( !(encodedChar[k] == encodedChar[k+1] && encodedChar[k] == "0") ){
      morse.push((encodedChar[k]+encodedChar[k+1]) == "10" ? "." : "-");
    }
  }
  return MORSE_TABLE[morse.join('')];
}

module.exports = {
    decode
}
