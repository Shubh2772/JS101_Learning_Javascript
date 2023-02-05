let num = 4;
let i = 1;
let count = 0;
while (i <= 13) {


  if (num % i === 0) {
    count++;
  } i++;
}


if (count == 2) {
  console.log("Yes");
}
else {
  console.log("No");
}   