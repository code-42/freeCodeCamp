
function myReplace(str, before, after) {

    var match=function(before,after){
      after=after.split('');
      for(var i=0;i<before.length;i++)
        {
          if(before.charAt(i)==before[i].toUpperCase())
            {
              after[i]=after[i].toUpperCase();
            }
          else  if(before.charAt(i)==before[i].toLowerCase())
            {
              after[i]=after[i].toLowerCase();
            }
          return after.join('');
        }
    };
    str =str.replace(before,match(before,after)); 
    console.log(str);
    return str;
}


myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("Let us go to the store", "store", "mall");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
myReplace("This has a spellngi error", "spellngi", "spelling");
myReplace("His name is Tom", "Tom", "john");
myReplace("Let us get back to more Coding", "Coding", "algorithms");
