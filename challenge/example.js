const path = require("path");
const os = require("os");
const fs = require("fs");
//계획
//1. 사용자가 원하는 폴더의 이름을 받아온다.

const folder = process.argv[2];
const workingDir = path.join(__dirname, "../", folder);
//const workingDir = path.join(os.homedir(), "Pictures", folder);

if (!folder || !fs.existsSync(workingDir)) {
  console.error("Plz enter folder name");
}

//2. 그 폴더안에 video, captured, duplicated 폴더들을 만든다
const videoDir = path.join(workingDir, "video");
const captureDir = path.join(workingDir, "capture");
const duplicatedDir = path.join(workingDir, "duplicated");
!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(captureDir) && fs.mkdirSync(captureDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

//3.. 폴더안에 있는 모든 파일을 돌면서 확장자에 맞춰서 파일들을 구분한다
fs.promises.readdir(workingDir).then(processFiles).catch(console.error);

const processFiles = (files) => {
  files.forEach((file) => {
    console.log(file);
  });
};
