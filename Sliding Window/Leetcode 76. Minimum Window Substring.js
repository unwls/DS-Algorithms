var minWindow = function (s, t) {
  /*
  Get the count of each character in t.
  Why? The count of each character indicates which character
is found and not found when we expand and minimize the window.
  */

  const tCharsCount = {};

  for (const char of t) {
    tCharsCount[char] = 1 + (tCharsCount[char] || 0);
  }

  // Keep track of the number of characters we need to find in s.
  let numCharsToFind = t.length;

  // Keep track of the minimum length of the resulting substring.
  let minLen = Infinity;

  // Keep track of the start index of the resulting substring.
  let minStartIdx = 0;

  // Increasing "start" will minimize our window
  let start = 0;

  // Increasing "end" will help search for characters in s that exist in t
  let end = 0;

  // Search through s until we reach the end of s
  while (end < s.length) {
    /*
      
      If a letter in s at index "end" exists in t, 
      we decrease the number of characters we need to find
      
      */

    const sChar = s[end];

    if (tCharsCount[sChar] > 0) numCharsToFind--;

    /*
      
      We also decrease the count of the corresponding letter in our frequency counter. 
      
      Why? Remember, this is a window. When we expand and minimize the size of the window, 
      the number of characters left is an indicator of how many characters we need to find and have already found.
      
      */

    tCharsCount[sChar]--;

    end++; // continue exploring each character in s

    /*
      
      When we find all the characters, "start" through "end" will be our window of a substring that meets our requirements. 
      Now we need to make sure the window is the MINIMUM length substring that meets our requirements. 
      
      The following while loop will update "minLen" everytime we find a shorter length substring.
      We also minimize our window by increasing "start".
      
      */

    while (numCharsToFind === 0) {
      // Update our minimum length and starting index if the window is a smaller window than the previous.
      const windowLength = end - start;

      if (windowLength < minLen) {
        minLen = windowLength;
        minStartIdx = start;
      }

      /*
          
          Now we need to minimize the window starting at the "start" index of s.
          For each index in s, we increase the count of a letter if it's a letter in t, 
          and increase the number of characters we need to find overall.
          
          Why? Each time we minimize our window, the number of characters that we need to find increases too. 
          As our window travels through s, each iteration needs information on what character has been found and not found. 
          
          
          */

      const sChar = s[start];

      /*  increase the count of character (if it exists in t)
          because we lose a character each time we minimize the window */
      tCharsCount[sChar]++;

      /*  increase the overall number of characters to find
          in the next window search (if char is in t) */
      if (tCharsCount[sChar] > 0) numCharsToFind++;

      // minimize window
      start++;
    }
  }

  // If we found a substring return the substring at the starting index with a minimum length.
  return minLen === Infinity ? "" : s.substr(minStartIdx, minLen);
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
