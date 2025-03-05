const { Schema, model } = require("mongoose");

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    //todo ==> createdBy: {
    // type: ObjectId,
    // },
  },
  { timestamps: true }
);

module.exports = model("Blog", blogSchema);
// lowercase + plural ==> blogs
