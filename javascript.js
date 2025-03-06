//! === prerequisites of NodeJS ==>
//! 1) how asynchronous and synchronous code get executed
//! 2) arrays, objects, strings and it's methods
//! 3) promises
//! 4) how to handle promises
//! 5) internal architecture of javascript runtime

//! how asynchronous and synchronous code get executed
//? synchronous/ blocking code ==> code which get executed line by line and blocks other statements
// example ==>
console.log("Start");
console.log("middle");
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log("end");

//! to execute any js file using nodeJS type command
//? node filename.js ==> extension is not mandatory.

// db.emp.find({ hireDate: { $gt: new Date("1-1-1981") } });

db.createCollection("cName", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "password"],
      properties: {
        name: {
          bsonType: "string",
        },
        email: {
          bsonType: "string",
        },
        password: {
          bsonType: "string",
        },
      },
    },
  },
});

db.cName.insertOne({ name: "abc", email: "abc@gmail.com", password: "1243" });

/*
{
  name:"string",
  email:"string"
  password:"string"
}


{
  name:"string",
  skills:["string"] // skills:["html", "css"]
}
*/

db.createCollection("cName2", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "skills"],
      properties: {
        name: {
          bsonType: "string",
        },
        skills: {
          bsonType: "array",
          items: {
            bsonType: "string",
          },
        },
      },
    },
  },
});

db.cName2.insertOne({ name: "abc", skills: ["html"] });

emp = {
  name: "abc",
  skills: [{ fe: ["html", "css"] }],
};

db.createCollection("cEmp", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "skills"],
      properties: {
        name: {
          bsonType: "string",
        },
        skills: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["fe"],
            properties: {
              fe: {
                bsonType: "array",
                items: {
                  bsonType: "string",
                },
              },
            },
          },
        },
      },
    },
  },
});

db.usersInfo.updateOne(
  { userName: "utkarsh" },
  { $set: { addressInfo: ObjectId("67c004da728242d3f2cb0ce2") } }
);
