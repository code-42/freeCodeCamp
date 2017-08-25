function truncateString(str, num) {
  // Clear out that junk in your trunk
//   console.log("A-tisket a-tasket A green and yellow basket".length);
  
  if (num >= str.length) {
      return str;
  } else if (num >= 3){
      return str.slice(0,num-3).concat("...");
  } else if (num < 3) {
      return str.slice(0, num).concat("...");
  }
  
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 46));
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));