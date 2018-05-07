/* function count (num1, num2, mark) {
    var num1 = prompt("Enter num1:", "");
    var num2 = prompt("Enter num2:", "");
    var mark = prompt("Enter operator [+ - * /]:", "");
    var result = num1 + " " + mark + " " + num2 + " = ";

    switch(mark) {
        case "+": result = (+num1) + (+num2); break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/":
            if(num2 != 0) {
            result = num1 / num2;
        } else {
            alert("Division by zero returns NaN");
        }
            break;
    }
    return alert(result);
}

count();
*/

var foo = 10 + '20';
console.log(foo);


