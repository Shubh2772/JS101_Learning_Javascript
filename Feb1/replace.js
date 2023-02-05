//replace any element...
let names2= ["Rohit","Mukul"];
names2[0]= "Vikas";
console.log(names2);

// replace every negative value with 0..

let a= ["1","-1","-2","-3","6","0"];
for (let i= 0; i<=a.length; i++){
  if(a[i]<0){
    a[i]=0;
  }
}console.log(a);

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
