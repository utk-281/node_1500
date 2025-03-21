const v2 = require("../config/cloudinary");
const asyncHandler = require("express-async-handler");
const { unlinkSync } = require("fs");

const uploadOnCloudinary = asyncHandler(async (localFilePath) => {
  if (!localFilePath) return null;
  let response = await v2.uploader.upload(localFilePath, {
    folder: "taskify",
    resource_type: "auto",
  });

  unlinkSync(localFilePath);

  return response;
});

module.exports = uploadOnCloudinary;
