// aabbaa- true
// aabaB -false
// aZaZA - true
function palindrom (word) {
    word = word.toLowerCase(); // убираем чувствительность и приводим к нижнему регистру
    console.log(word.split(''));
    return word === word.split("").reverse().join('')
}
// for (let i = 0; i < word.length; i++) {
//     if (word[i] !== word[word.length - i -1]) {
//         return false;
//     }
// }
// return true;


console.log(palindrom('aaZZaac'));