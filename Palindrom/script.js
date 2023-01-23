const value = "omer";

const palindrome = (val) => {
  const reverse = val.split("").reverse().join("");
  return reverse === val;
};
console.log("palindrome", palindrome(value));
