//step 1
var value = 42

//step 2
if (value > 53) {
    value += 42
} else {
    value -= 13
}
console.log(value);

//step 3
var string = "11";
value += string
console.log(value);

//step 4
var array = [];
for (var i = 0; i < value.length; i++) {
    array.push(value.charAt(i));
}
console.log(value);
console.log(array);

//step 5
array.shift();
array.pop();
console.log(value);
console.log(array);

//step 6
var varBack = "";
for (var i = 0; i <= array.length; i++) {
    varBack = varBack + array.pop(i);
}
console.log(varBack);

//step 7
value = parseInt(value);
console.log(value);
varBack = parseInt(varBack);
console.log(varBack);
console.log(typeof value == "number");

//step 8
value = value + varBack;
console.log(value);

//step 9
if (value < 60) {

    value = 14;

} else if (value == 2930) {

    value = 27;
} else {
    value = 2;

}

console.log(value);

//step 10
var i = 10;
while (i > 0) {
    value++;
    i--;
}

console.log(value);

//step 11

function abc(val) {

    val = val.toString();
    console.log(val);
    if (val.length > 1) {
        var val = val.substring(1);
        console.log(val);
        return val;
    }

}


//step 12

var newValue = abc(value);

//step 13
console.log(value);
console.log(newValue);
