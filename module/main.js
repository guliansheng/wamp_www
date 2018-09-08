// 1.如果是第三方模块不需要加 ./ , 如果是文件模块(自己写的)需要加 ./
// 2.在另一个文件中将内容解构出来即可使用
// 3.import具有声明功能,也就是说如果在下方再次使用let声明相关变量,会报错;


import {str,str2} from './page1';//这里的文件后缀可以省略;
import {con,d as dan} from './page2.js';//这里也可以使用as给变量起别名
import * as page3 from './page3.js';//可以使用*来获取所有到处的变量,page3是自己起的别名
import page4,{i} from './page4.js';//这是export和export default的区别
export let a=45;
console.log(str,str2);
console.log(con,dan);
console.log(page3,page3.e,page3.f);//这里的page3是一个Symbol
console.log(page4,page4.g,page4['h'],i)//这里的page4是一个Object