import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputFolder = "./public/images";
const outputFolder = "./public/images";

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

fs.readdirSync(inputFolder).forEach(file => {

  if (file.match(/\.(jpg|jpeg|png)$/)) {

    const inputPath = path.join(inputFolder, file);
    const outputPath = path.join(
      outputFolder,
      file.replace(/\.(jpg|jpeg|png)$/,".webp")
    );

    sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => console.log("Convertido:", file));

  }

});