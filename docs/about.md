# About

Welcome to the about page.

This markdown supports html elements like the `p` tag coupled with inline styles

<p style="color: #ff9100;; border: 1px solid rgba(255, 135, 23, 0.25); border-radius:5px; padding: 1rem;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

Even satire code snippets with syntax highlighting are also supported. 😅

const lang = prompt("What is your favorite programming language?");

(lang === "JavaScript") | (lang === "javascript") | (lang === "js")
? alert("JavaScript to the world! 🚀🟡")
: alert(`We don't permit such languages here 💩`);

Of course, images are not left out.

# Code snippets: 
Binary Search in JavaScript

```javascript
/**
 * Perform binary search on a sorted array.
 * @param {Array} array - The sorted array to search.
 * @param {number} target - The target value to find.
 * @return {number} - The index of the target value if found, otherwise -1.
 */
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid; // Target found, return index
    } else if (array[mid] < target) {
      left = mid + 1; // Target is in the right half
    } else {
      right = mid - 1; // Target is in the left half
    }
  }

  return -1; // Target not found
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue = 7;

const result = binarySearch(sortedArray, targetValue);

if (result !== -1) {
  console.log(`Target ${targetValue} found at index ${result}.`);
} else {
  console.log(`Target ${targetValue} not found in the array.`);
}
```