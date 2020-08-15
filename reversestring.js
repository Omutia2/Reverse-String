//Reverse a string 'hello'
//There is no reverse method for a string
//Method 1
function reverseString(str) {
   let strArr = str.split('');
    let reversedArr = strArr.reverse();
    let reversedString = reversedArr.join('');
    return reversedString;
}
reverseString('hello');

//Method 2
function reverseString(str) {
    return str.split('').reverse().join('');
}
reverseString('hello');

//Method 3 using loops
function reverseString(str) {
    let final = '';
    for (let i = str.length - 1; i >= 0; i--){
        final += str[i];
    }
    return final;
}
reverseString('hello');