console.log('hello ,  ts');
function test(){
    return true
}
let str:string = '123';
// 数组第一种
let arr:number[] = [11,22,33];
// 数组第二种
let arr2:Array<number> = [11,22,33];
// 数组第三种
let arr3: any[] = ['123',123,true];
// 元组类型
let arr4:[number,string] = [11,'22'];

// 枚举类型
enum Flag {success = 1,error=2};
let s:Flag = Flag.success;

enum Color1 {yellow, green, pink};
var c1:Color1 = Color1.green;
console.log(c1); //1 如果标识符没有赋值，那么他的值就是下标

enum Color2 {blue,red=12,'orange'};
var c2:Color2 = Color2.orange;
// var c3:Color2 = Color2.red
console.log(c2) // 13，枚举成员的索引每次都在前一个的索引上+1

var num: number | undefined;
// num = 123;
console.log(num); //undefined

// void类型，typescript中的void类型表示没有任何类型，一般用于定义方法的时候方法没有返回值
function run():void{
    console.log(111);
}

// never类型，是其他类型（包括undefined和null）,代表从不会出现的值