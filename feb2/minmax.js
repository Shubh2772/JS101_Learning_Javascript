let arr=[9 ,5 ,9 ,4 ,4 ,1 ,8 ,-5,9 ,3 ,10 ,7];
let N= arr.length;
// this is how we can assign infinity 
let   min= Infinity;
  let max= -Infinity;
 for(var i = 0; i < N; i++){
   if(arr[i]<min){
     min=arr[i];
   }  
   else if(arr[i]>max){
     max=arr[i]
   }
} 
console.log(min,max);
