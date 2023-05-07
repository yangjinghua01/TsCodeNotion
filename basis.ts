//声明一个变量a，同时指定它的类型为number 
let a:number;
//a 的类型设置为了number，在以后的使用过程中a的值只能是数字
a = 10;
// a ="hello"           //此行代码会报错，因为变量a的类型是number，不能赋值字符串
let b:string;
b="hello"
// b =123
//使用tsc进行编译

// 声明完变量直接进行赋值
let c = false;
c =true;
/**
 * Type 'number' is not assignable to type 'boolean'.ts(2322)
let c: boolean
 */
// c = 123

//JS中的函数是不考虑参数的类型和个数的
function sun(a: number,b: number){
    return a+b;
}
sun(1,2);