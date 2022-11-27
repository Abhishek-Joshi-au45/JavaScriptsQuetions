// Q-1 ) Longest Valid Parentheses
/*
Given a string containing just the characters '(' and ')', find the length of the longest valid
(well-formed) parentheses substring.
Example 1:
Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()"
*/

/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
    if (s.length === 0) return 0;
  const stack = [];
  let longest = 0;
  let left = 0;

  for (let i = 0; i < s.length; i++) {
	if (s.charAt(i) === "(") stack.push(i);
	else {
	  if (stack.length > 0 && s.charAt(stack[stack.length - 1]) === "(") {
		stack.pop();
	  } else stack.push(i);
	}
  }

  if ( stack.length === 0) return s.length
  for (let i = 0; i < stack.length; i++) {
	if (i + 1 === stack.length && i < s.length) {
	  if (stack[i] === s.length-1)
		longest = Math.max(longest, s.length - left - 1);
	  else longest = Math.max(longest, s.length - stack[i] - 1);
	}
	longest = Math.max(longest, stack[i] - left);
	left = stack[i] + 1;
  }

  return longest;
};
let str = ")()())"
res = longestValidParentheses(str)
console.log(res);