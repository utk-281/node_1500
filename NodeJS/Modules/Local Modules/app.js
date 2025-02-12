// let name1 = "abc";

// let arr = ["java", "html"];

// function hello() {
//   console.log("hello");
// }

// packing ==> exporting (2 options)
// unpacking ==> importing (2 options)

//! 1st way of packing / exporting

// let name1 = "abc";

// let arr = ["java", "html"];

// function hello() {
//   console.log("hello");
// }

// module.exports = {
//   name1,
//   arr,
//   hello,
// };

// let obj = {
//   key1: "value",
//   key2: true,
//   key3: 123456,
//   key4: function () {},
// };

// let { key1, key2, key3 } = obj;
// console.log(key1);
// console.log(key2);

// { email } {email:""}

//! 2nd way of packing / exporting

exports.myName = "abc";

exports.obj = {
  key1: "value",
};

exports.func1 = () => {
  console.log("hello");
  return "bye";
};

exports.myFun = function () {
  console.log("custom");
  return false;
};
