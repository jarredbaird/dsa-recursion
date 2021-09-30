/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  // Base Case
  if (nums.length === i) return 1;
  // Normal Case
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, mostLong = 0) {
  // Base Case
  if (i === words.length) return mostLong;
  // Normal Case
  mostLong = mostLong > words[i].length ? mostLong : words[i].length;
  return longest(words, i + 1, mostLong);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, odd = true, newStr = "") {
  // Base Case
  if (i === str.length) return newStr;
  // Normal Case
  return everyOther(str, i + 1, !odd, odd ? (newStr += str[i]) : newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, curIdx = 0, revIdx, hmm = true) {
  if (!revIdx) revIdx = str.length - 1;
  // Base Case
  if (!hmm) return false;
  if (curIdx >= revIdx) return true;
  // Normal Case
  return isPalindrome(
    str,
    curIdx + 1,
    revIdx - 1,
    str[curIdx] === str[revIdx] ? true : false
  );
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  // Base Case
  if (arr[i] === val) return i;
  if (i >= arr.length) return -1;
  // Normal Case
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1, newStr = "") {
  debugger;
  // Base Case
  if (i < 0) return newStr;
  // Normal Case
  return revString(str, i - 1, newStr + str[i]);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  // Base Case
  return "You Win";
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
