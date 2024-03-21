// promises are asynchronous
// promises may be fulfiled and there is a chance of getting rejected

//  new Promise((resolve, reject) => {
//     // After 10 days i will buy you car = 10*24*60*60*1000
//    var salaryCredited = true;
//    var salary = 100000;
//    var BMW = 40000;
//    var SUV = 30000
//      new setTimeout(() => {
//         if(salaryCredited===true && salary>BMW) {
//             resolve('My father buy bmw for me');
//          }
//           if(salaryCredited===true && salary>SUV){
//               reject('buy me for SUV');
//          }
//          else{
//             reject('sorry son , I will try next month');
//          }
//      } , 10000)
// })

async function papaMakesPromise() {
   const papaPromise = await  new Promise((resolve, reject) => {
    // After 10 days i will buy you car = 10*24*60*60*1000
   var salaryCredited = true;
   var salary = 100000;
   var BMW = 40000;
   var SUV = 30000;
      setTimeout(() => {
        if(salaryCredited===true && salary>BMW) {
            resolve('My father buy bmw for me');
         }
          if(salaryCredited===true && salary>SUV){
              reject('buy me for SUV');
         }
         else{
            reject('sorry son , I will try next month');
         }
     } , 2000)
})

console.log(papaPromise);

}
  
papaMakesPromise().catch((err) => {
    console.log('After rejecting BMW this is new promise' , err);
})