const areAnagrams = (str1, str2) => {
    const arr1 = str1.split('').sort();
    const arr2 = str2.split('').sort();

    return arr1.join('') === arr2.join('');
  }

console.log(areAnagrams('тік', 'кіт')) //true
console.log(areAnagrams('банка', 'кабан')) //true
console.log(areAnagrams('велосипед', 'дерево')) //false