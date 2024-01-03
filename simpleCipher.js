//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor(key = 'dddddddddddddddd') {
    this._key = key;
    this._lowerBound = 'a'.charCodeAt(0)
    this._letterCount = 26;
    // todo: implement
  }

  encode(message) {
    return message.split(' ').reduce((acc, char, index)=> {
      const letterCharCode = char.charCodeAt(0) - this._lowerBound;
      const keyIndex = index % this.key.length;
      const shiftBy = this.key.charCodeAt(keyIndex) - this._lowerBound;
      const newCharCode = letterCharCode + shiftBy + this._lowerBound;

      return acc + String.fromCharCode(newCharCode)

    }, '')
    // todo: implement
  }

  decode(message) {
    const letterACharCode = 'a'._charCodeAt(0);
    let value = "";

    for(let index = 0; index < message.length; ++index){
      const letterCharCode = message.charCodeAt(index);
      const shiftBy = 3;

      let nwCharCode = letterCharCode - shiftBy;
      if(newCharCode < letterACharCode){
        newCharCode += 26;
      }
      value += String.fromCharCode(newCharCode);
    }
    return value;

    // todo: implement
  }

  get key() {
    return this._key;
    // todo: implement
  }
}
const key = 'ddd';
const input = 'iamapandabear';
const expected = 'ldpdsdqgdehdu'

const cipher = new Cipher(key)

if(expected !== cipher.encode(input)){
  console.error(`expected ${expected} but code ${cipher.encode(input)}`);
} else{
  console.log('it worked!');
}
