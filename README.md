# isCaseInsensitivePalindrome

Given a string, check if it can become a palindrome through a case change of some (possibly, none) letters.

A string that doesn't changed when reversed (it reads the same backward and forward).

Examples:

`"eye"` is a palindrome
`"noon"` is a palindrome
`"decaf faced"` is a palindrome
`"taco cat"` is not a palindrome (backwards it spells `"tac ocat"`)
`"racecars"` is not a palindrome (backwards it spells `"sracecar"`)

## Example

For `inputString = "AaBaa"`, the output should be
`solution(inputString) = true`.

`"aabaa"` is a palindrome as well as `"AABAA"`, `"aaBaa"`, etc.

For `inputString = "abac"`, the output should be
`solution(inputString) = false`.

All the strings which can be obtained via changing case of some group of letters, i.e. `"abac"`, `"Abac"`, `"aBAc"` and 13 more, are not palindromes.

## Input/Output

-   [execution-time-limit] 4 seconds (js)

-   [input] string inputString

Non-empty string consisting of English letters.

Guaranteed constraints:
`4 ≤ inputString.length ≤ 10`.

-   [output] boolean
