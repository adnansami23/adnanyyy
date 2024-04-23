function isPalindrome(str) {
    // Convert the string to lowercase to make the comparison case-insensitive
    str = str.toLowerCase();
    // Define pointers for the start and end of the string
    let left = 0;
    let right = str.length - 1;
    
    // Iterate through the string from both ends until the pointers meet
    while (left < right) {
        // If characters at the pointers don't match, it's not a palindrome
        if (str[left] !== str[right]) {
            return false;
        }
        // Move the pointers towards the center
        left++;
        right--;
    }
    // If the loop completes without returning false, the string is a palindrome
    return true;
}

// Test cases
console.log(isPalindrome("level")); // true
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("12321")); // true
