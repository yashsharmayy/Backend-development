const { ImageKit } = require("@imagekit/nodejs");
const { data } = require("react-router-dom");

const ImageKitClient = new ImageKit({
  privateKey: process.env.IMAGE_PRIVATE_KEY,
});

async function uploadFile(file) {
  const result = await ImageKitClient.files.upload({
    file,
    fileName: "music_" + Date.now(),
    folder: "spotyfy/backend/music",
  });

  return result;
}

module.exports = uploadFile;
