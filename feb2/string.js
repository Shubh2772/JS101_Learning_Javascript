let a= "Shubham Saini";
console.log(a.length); // to check the length of a string..

let b= ""
for(let i=0; i<a.length;i++){
  if(i==0){
    b=b+"I";    // to replace S from I in string..
  }
  else {
    b=b+a[i];
  }
}console.log(b);