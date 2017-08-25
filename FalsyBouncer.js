/*
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

var arr = [7, "ate", "", false, 9];

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
    
  return arr != false; // || arr !=  null || arr !=  0 || arr !=  "" || arr !=  undefined || arr != isNaN;
}

// arr.filter(bouncer([7, "ate", "", false, 9]));
// arr.filter(bouncer);



function bouncer(arr) {
  // Don't show a false ID to this bouncer.
 return arr !== false;
}
console.log(arr.filter(bouncer));

// var filtered = [7, "ate", "", false, 9].filter(bouncer);