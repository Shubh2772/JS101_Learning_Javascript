// find the average of even numbers...

let b= [1,2,3,4,5];
sum= 0;
count=0;
for( let j=0; j<=7;j++){
  if(b[j]%2===0){
    sum=b[j]+sum;
    count++;
  }
}console.log(sum/count);
