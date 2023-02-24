//Chapter # 14 to 16
// Question No 1
// var arr = [];

// Question No2
// var empty = new Array();

//Question No 3
// var str = ["mango", "apple", "grapes"];

//Question No 4
// var num = [1, 2, 4, 6, 7];

//Question No 5
// var bool = [true, false, true];

//Question No 6
// var mix = ["abc", 2, true];

//Question No 7
// var edu = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phill", "PHD"];
// document.write("<h1>" + "Qualification" + "</h1>")
// document.write(edu[0] + "<br>");
// document.write(edu[1] + "<br>");
// document.write(edu[2] + "<br>");
// document.write(edu[3] + "<br>");
// document.write(edu[4] + "<br>");
// document.write(edu[5] + "<br>");
// document.write(edu[6] + "<br>");
// document.write(edu[7] + "<br>");

//Question No 8
// var stu = ["adeel", "owais", "minhaj"];
// var nums = [340, 250, 300];
// var totalMarks = 500;
// document.write("Score of " + stu[0] + "is " + nums[0] + "." + "percentage: " + nums[0] / totalMarks * 100 + "%" + "<br>");
// document.write("Score of " + stu[1] + "is " + nums[1] + "." + "percentage: " + nums[1] / totalMarks * 100 + "%" + "<br>");
// document.write("Score of " + stu[2] + "is " + nums[2] + "." + "percentage: " + nums[2] / totalMarks * 100 + "%" + "<br>");

//Question No 9
// var color = ["blue", "green", "red"];
// document.write(color);
// document.write("<br>");
// part a
// var col = prompt("Which color you wants to add in the beginning");
// color.unshift(col);
// document.write(color);
// document.write("<br>");
// part b
// var col = prompt("Which color you wants to add in the End");
// color.push(col);
// document.write(color);
// document.write("<br>");
// part c
// var col1 = prompt("two colors add in the Beginning first color");
// var col2 = prompt("two colors add in the Beginning second color");
// color.unshift(col1, col2);
// document.write(color);
// document.write("<br>");
// part d
// color.shift();
// document.write(color);
// document.write("<br>");
//part e
// color.pop()
// document.write(color);
// document.write("<br>");
//part f
// var inp = +prompt("Which index you add a color");
// color.splice(inp,0,"yellow");
// document.write(color);
//part g
// var inp1 = +prompt("Which index you want t delete element");
// color.splice(inp1,1);
// document.write(color);

//Question No 10
// var arr3 = [320,430,230,180];
// document.write(arr3.sort())

//Question No 11    *****
// var cities = ["karachi","lahore","islamabad","quetta","peshawar"];
// var selectedCities = cities[1,3];
// document.write(selectedCities)

//Question No 12
// var arr4 = ["this","is","my","cat"];
// var text = arr4.join(" ")
// document.write(text)

//Question No 13
//FIFO
// var device=["keyboard","mouse","monitor","printer"];
// for (var i=0;i<device.length;i++){
//     document.write(device[i]+"<br>")
// }

//Question No 14
//LIFO
// var arr7 = ["keyboard","mouse","monitor"];
// for (var i=arr7.length-1;i>=0;i--){
//     document.write(device[i]+"<br>")
// }
//Question No 15 ********

//Chapter # 17 to 20
//Question No 1
// var arr = [[],[]];

//Question No 2
// var mulArr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// console.log(mulArr)

//Question No 3
// for (var i = 1;i<=10;i++){
//     document.write(i + "<br>")
// }

//Question No 4
// var table = +prompt("Enter a table number");
// var lent = +prompt("ENter a table length");
// for (var i = 1;i<=lent;i++){
//     var j = table*i
//     document.write(table + " X " + i + " = " + j + "<br>")
// }

//Question No 5
// var fruits = ["apple","banana","mango","orange","strawberry"];
// for (var i = 0;i<fruits.length;i++){
//     document.write(fruits[i] + "<br>");
// }
// document.write("<br>")
// for (var i = 0;i<fruits.length;i++){
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }

//Question No 6
//part a Counting
// for(var i=1;i<=15;i++){
//     document.write(i + ",")
// }
// part b reverse counting
// for (i=10;i>=1;i--){
//     document.write(i +",")
// }
// part c Even
// for (var i =0;i<=20;i+2){
//     document.write(i);
// }
//part d odd
// for (var i=1;i<=20;i+2){
//     document.write(i);
// }
//part e series    *******

//Question No 7
// var isMatch = false;
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var ask = prompt("Welcome to abc bakery ,What do you want to order?");
// for(var i = 0;i<items.length;i++){
//     if (ask==items[i]){
//         document.write(ask + " is available at index " + i + " in our bakery");
//         isMatch = true;
//     }
//     break
// }
// if(isMatch==false){
//     document.write("sorry item is not available" );
// }


//Question No 8
// var arr8 = [24, 53, 78, 91, 12];
// var temp = 0
// for (var i =0;i<arr8.length;i++){
//     if(temp<arr8[i]){
//         temp = arr8[i];
//     }
// }
// document.write(" The Largest number is "+ temp);

//Question No 9
// var arr9 = [24, 53, 78, 91, 12];
// var temp =arr9[0];
// for (var i =0;i<arr9.length;i++){
//     if (temp>arr9[i]){
//         temp = arr9[i];
//     }
// } 
// document.write("The smallest number is " + temp);

//Question No 10
// for (var i = 1;i<=20;i++){
//     var j = i * 5;
//     document.write(j + ",");
// }
