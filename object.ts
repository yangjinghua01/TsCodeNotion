// object 表示一个js对象
let a2:object;
a2 = {};
a2 = function(){}
// 用来指定对象中可以包含哪些属性
// 语法：{属性名：属性值，属性名：属性值}
// 在属性名的后面加？表示属性是可选的
let b2 :{name:string,age?:number}
b2={name:"yjh"}

// [propName:string]:any 表示任意类型
let c2:{name:string,[propName:string]:any}
c2 ={name:"hhah",age:12,}

let d1:(a:number,h:number)=>number
d1=function(a1:number,a2:number):number{
return a1+a2;
}


//string[]表示字符串数组
let arr:string[]
arr=["a","d","d"]

// 类似java中的集合这是一个数字类型的集合
let list:Array<Number>;
list=[1,2,3,4]
/**
 * 元组，元组就是固定长度的数组
 * 语法：[类型，类型，类型]
 */
let h:[string,string,number]
h=["a","a",1]


/**
 * enum 枚举
 * 语法
 */

enum Gender{
    Male,
    Female
}


let i:{name:string,gender:Gender}
i={
    name:'kongkong',
    gender:Gender.Male
}

// &表示同时
let j:{name:string}&{age:number}
j ={name:"111",age:11}


// 类型别名
type mytype = 1|2|3|4|5
let k3 :mytype
let k2 :mytype



console.log(i.gender ==+Gender.Male)