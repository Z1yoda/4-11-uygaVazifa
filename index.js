// 1- stringni input sifatida qabul qiladigan va stringni teskari tartibda qaytaradigan funksiya
console.log("1-masala");

let string = "Hello, World";
function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString(string));

// 2-gapdagi eng uzun so'zni toping va qaytaring
console.log("2-masala");

let sentence = "This is a simple sentence";
let longestWord = "";
let newSentence = sentence.split(" ");

function findLongestWord(newSentence) {
  for (const value of newSentence) {
    if (value.length > longestWord.length) {
      longestWord = value;
    }
  }
  return longestWord;
}

console.log(findLongestWord(newSentence));

// 3-unli harflar sonini topuvchi funksiya yozing
console.log("3-masala");

// let sentence = "This is a simple sentence";
let vowels = ["a", "e", "i", "o", "u"];
let newSent = sentence.split("");
let counter = 0;

function findVowels(newSent) {
  for (const value of newSent) {
    if (vowels.indexOf(value) != -1) {
      counter++;
    }
  }
  return counter;
}

console.log(findVowels(newSent));

// 4-berilgan stringni palindrom yoki yo'qligini tekshiruvchi funskiya yozing
console.log("4-masala");

let word = "radar";

function checkPalindrom(word) {
  if (word.split("").reverse().join("") == word) {
    return "Bu so'z polindrom";
  } else {
    return "Bu so'z palindrom emas";
  }
}

console.log(checkPalindrom(word));
console.log();

// 5-arraydan dublikatlarni ochiradigan funksiya yozing
console.log("5-masala");

let array = ["a", "b", "a", "c", "b", "d"];

function removeDublicate(array) {
  return array.filter((value, index) => {
    return array.indexOf(value) == index;
  });
}

console.log(removeDublicate(array));

// 6-berilgan gapdagi har bir so'zni bosh harf bilan qaytaradigan funksiya yozing
console.log("6-masala");

let sentence1 = "hello world, this is a simple sentence";
let newArray = [""];

function captalizeWords(sentence1) {
  for (let value of sentence1.split(" ")) {
    for (let i = 0; i <= value.length; i++) {
      if (i == 0) {
        newArray.push(" ", value[i].toUpperCase());
      } else {
        newArray.push(value[i]);
      }
    }
  }
  return newArray.join("");
}

console.log(captalizeWords(sentence1));
