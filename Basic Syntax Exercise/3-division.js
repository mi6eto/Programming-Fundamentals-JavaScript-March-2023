function divisior(number) {

    if (number % 10 == 0) {
        currentNum = 10;
        console.log("The number is divisible by " + currentNum);
    } else if (number % 7 == 0) {
        currentNum = 7;
        console.log("The number is divisible by " + currentNum);
    } else if (number % 6 == 0) {
        currentNum = 6;
        console.log("The number is divisible by " + currentNum);
    } else if (number % 3 == 0) {
        currentNum = 3;
        console.log("The number is divisible by " + currentNum);
    } else if (number % 2 == 0) {
        currentNum = 2;
        console.log("The number is divisible by " + currentNum);
    } else {
        console.log('Not divisible');
    }
}
divisior(1643)