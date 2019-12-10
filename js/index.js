"use strict";
console.log('hello ,  ts');
function test() {
    return true;
}
var str = '123';
// 数组第一种
var arr = [11, 22, 33];
// 数组第二种
var arr2 = [11, 22, 33];
// 数组第三种
var arr3 = ['123', 123, true];
// 元组类型
var arr4 = [11, '22'];
// 枚举类型
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 2] = "error";
})(Flag || (Flag = {}));
;
var s = Flag.success;
var Color1;
(function (Color1) {
    Color1[Color1["yellow"] = 0] = "yellow";
    Color1[Color1["green"] = 1] = "green";
    Color1[Color1["pink"] = 2] = "pink";
})(Color1 || (Color1 = {}));
;
var c1 = Color1.green;
console.log(c1); //1 如果标识符没有赋值，那么他的值就是下标
var Color2;
(function (Color2) {
    Color2[Color2["blue"] = 0] = "blue";
    Color2[Color2["red"] = 12] = "red";
    Color2[Color2["orange"] = 13] = "orange";
})(Color2 || (Color2 = {}));
;
var c2 = Color2.orange;
// var c3:Color2 = Color2.red
console.log(c2); // 13，枚举成员的索引每次都在前一个的索引上+1
var num;
// num = 123;
console.log(num); //undefined
// void类型，typescript中的void类型表示没有任何类型，一般用于定义方法的时候方法没有返回值
function run() {
    console.log(111);
}
// never类型，是其他类型（包括undefined和null）,代表从不会出现的值
