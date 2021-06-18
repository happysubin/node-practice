let count = 0;

const increase = () => {
  count++;
};

const getCount = () => {
  return count;
};

module.exports.getCount = getCount; // 이렇게하면 외부에서 사용가능
//module.exports.increase = increase; //외부 사용가능
console.log(module.exports === exports); //이건 true 지만
exports = {}; //오브젝트를 할당한이후에 바뀌어버렸다.
console.log(module.exports === exports); //이건 false 라고 나온다
exports.increase = increase;
