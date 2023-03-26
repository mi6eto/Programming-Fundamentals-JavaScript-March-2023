function roundedNumber(num1, num2) {
    if (num2 > 15) {
        num2 = 15
    }
    let num = (num1).toFixed(num2)
    num = parseFloat(num);
    console.log(num);
}
roundedNumber(3.1415926535897932384626433832795, 16)