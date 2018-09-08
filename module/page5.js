class Parson{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    show(){
        return `my name is ${this.name},my age is ${this.age}`
    }
}
let out = function (){
    console.log('这是函数out');
}
let sum = function(a,b){
    console.log(a+b)
}
let j = '这是j';
let k = '这是k';
export default Parson;//这里不用{Parson},则import中的变量就是代表Parson,不需要使用对象调用,例如mod.Parson
export {out,sum,j,k}
