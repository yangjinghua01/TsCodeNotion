// 也可以直接使用字面量进行类型声明
let a1 :10;
a1 =10;
//也可以使用|来连接多个类型（联合类型）
let b1:"a" | "b";
b1 = "a"
// b1 ="2"//报错 报错信息 Type '"2"' is not assignable to type '"a" | "b"'


// any 表示的是任意类型，一个变量设置类型为any 后相当于对改变了关闭了ts的类型检测
// 声明变量如果不指定类型，则ts解析器会自动判断变量的类型为any（隐式的any）
let d:any;
d = 10;
d = "10d"
d = true;


// unknown 表示未知类型
let e:unknown
e = 10;
e = "100";
e = true;

let s :string
// unknow 实际上就是一个类型安全的any
// unknown 类型的变量，不能直接赋值给其他变量
if(typeof e ==="string"){
    s = e
}
//类型断言
s = e as string

