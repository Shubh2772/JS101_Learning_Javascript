let a=[2,5,6,-8,-9,-6,3];
for(let i=0; i<=a.length;i++){
  if(a[i]>0){
    a[i]=1;
  }
  else if(a[i]<0){
    a[i]=0;
  }
}console.log(a);