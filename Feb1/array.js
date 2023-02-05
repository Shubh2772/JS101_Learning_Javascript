// syntax of arrayy..

let names= ["Shubham","Ishika","shreshth","rahul","vaishnav","345","789",true,false];
console.log(names);
// print individually..
console.log(names[4]);
// to find length of array...
console.log(names.length);
// just an example...
console.log(names[names.length-5]);

// add an element in array at last...
names.push("Anni");
console.log(names);

// remove the last element in array...
names.pop("Anni");
console.log(names);

// merge to arrays in one...

let names2=["pratishtha","akansha"]
let names3= [...names, ...names2];
console.log(names3);

