//1.导入{}中定义的变量
import {flag, sum} from "./aaa.js";

if (flag) {
  console.log('小明是天才');
}

//2.直接导入export定义的变量
import {num1, height} from "./aaa.js";

console.log(num1);
console.log(height);

//3.导入export的function/class
import {mul, Person} from "./aaa.js";

console.log(mul(30, 50));
const p = new Person();
p.run();

//4.export default只有一个
import addr from "./aaa.js";
// console.log(addr);
addr('你好啊');

//5.统一全部导入
import * as aaa from "./aaa.js";

console.log(aaa.flag);
console.log(aaa.height);
