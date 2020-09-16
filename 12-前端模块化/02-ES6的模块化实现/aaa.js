//小明
var name = '小明'
var age = 22
var flag = true
function sum(num1, num2) {
  return num1 + num2
}

if (flag) {
  console.log(sum(10, 20));
}

//1.导出方式一
export {
  flag, sum
}

//2.导出方式二
export var num1 = 1000
export var height = 1.75

//3.导出函数/类
export function mul(num1, num2) {
  return num1 * num2
}
export class Person {
  run() {
    console.log('在奔跑');
  }
}

//4.export default 只能有一个，导入时可更名
// const address = '广州市';
// export default address;

export default function (argument) {
  console.log(argument);

}