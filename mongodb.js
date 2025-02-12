db.user.updateOne(
  { name1: "raju1" },
  { $set: { address: "Noida", phoneNo: 1234567890, email: "value" } }
);

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));
