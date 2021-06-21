const fs = require("fs").promises;
const constants = require("fs").constants;

fs.access(`./${process.argv[2]}`, constants.F_OK)
  .then(() => {
    //.F_OK는 파일이 존재한다는 뜻
    console.log("존재");
  })
  .catch((error) => {
    console.log(error);
  });

//시작 시 인자를 받으려면 process.argv로 실행 인자를 받는다
