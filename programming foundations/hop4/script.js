 function plusTwo(num1, num2) {
    numArray = [];
    if(num1 > num2) {
        numArray.push(num2);
        numArray.push(num1);
    } else {
        numArray.push(num1);
        numArray.push(num2);
    }

   for(let i = 2; i <= 19; i++) {
       let j = i - 1;
       let t = i - 2;
       let plus2 = numArray[j] + numArray[t];
       numArray.push(plus2);
   }

   numArray.forEach(function(item){
       console.log(item);
   })

 }