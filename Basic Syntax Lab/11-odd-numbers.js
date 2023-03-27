function oddNums(number) {
    let num = 1;
    let total = 0;
    while (number >= 1) {
        if (num % 2 != 0) {
            console.log(num);
            total += num
            num++;
            number--;
        } else {
            (num++);
        }
    }
    console.log('Sum: ' + total);
}
oddNums(5)