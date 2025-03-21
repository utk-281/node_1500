let url =
  "https://res.cloudinary.com/dmqwvd39n/image/upload/v1742467894/taskify/ppbo2g5wxzgwlsbpkpqb.png";

let arr = url.split("/");
console.log(arr);

let id = arr[arr.length - 2];
let lastPart = arr.slice(arr.length - 2);
console.log(lastPart);
// [ 'taskify', 'ppbo2g5wxzgwlsbpkpqb.png' ]

let str = lastPart.join("/");
console.log(str);

let public_id = str.split(".")[0];
console.log(public_id);
