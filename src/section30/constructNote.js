function constructNote(message, letters) {
    if(message.length > letters.length) return false;
    let frequencyObj = {};
    for(const letter of letters) {
        !!frequencyObj[letter] ? frequencyObj[letter]++ : frequencyObj[letter] = 1;
    }
    for(const char of message) {
        if(!frequencyObj[char]) return false;
        else frequencyObj[char]--;
    }
    return true;
}
console.log(constructNote('aa', 'abc'));
console.log(constructNote('abc', 'dcba'));
console.log(constructNote('aabbcc', 'bcabcaddff'));
console.log(constructNote('aaaaa', 'aaaa'));