

function checkPalindrome(string) {


    const len = string.length;

    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
document.getElementById("string").innerHTML = checkPalindrome(value);

// const string = prompt('Enter a string: ');

document.getElementById("res").i
const value = checkPalindrome(string);
document.write(value);
console.log(value);
