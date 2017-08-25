function mutation(arr) {
    var test = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();
    for (var i=0; i < test.length-1; i++){
        if ( target.indexOf(test[i])<0){
           console.log("no"); 
        }
    }
  console.log("yes");
}

mutation(["hello", "hey"]);