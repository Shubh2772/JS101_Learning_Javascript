 // Print Prime Numbers from 1 to given limit..

let limit=15
for (let i=1; i<=limit;i++){
  let count=0;
  for(let j=1;j<=i;j++){
    if(i%j==0){
      count++;
    }
  }
  if(count==2){console.log(i)}
}