function numbers(num1, num2) {
    let currentNum = num1
    while (currentNum >= num2) {
        console.log(currentNum);
        currentNum--
    }

}
numbers(4, 1)