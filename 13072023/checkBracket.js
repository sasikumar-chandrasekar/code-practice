// Check for Balanced Brackets:
//    - Given a string containing brackets (e.g., ""), write a function that determines whether the brackets are balanced or not.
//    - Input: "((()))"
//    - Output: true

function areBracketsBalanced(brackets) {
    const stack = [];
    const openBrackets = '({[';
    const closeBrackets = ')}]';
    const bracketPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let bracket of brackets) {
        if (openBrackets.includes(bracket)) {
            stack.push(bracket);
        } else if (closeBrackets.includes(bracket)) {
            const lastOpenBracket = stack.pop();
            const correspondingOpenBracket = bracketPairs[bracket];
            if (lastOpenBracket !== correspondingOpenBracket) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Example usage:
console.log(areBracketsBalanced('(){}[]')); // true
console.log(areBracketsBalanced('({[})')); // false
console.log(areBracketsBalanced('({[}){}')); // false
