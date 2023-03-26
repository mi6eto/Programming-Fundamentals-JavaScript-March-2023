function numberSum(start, end) {
    let sum = 0;
    let result = '';
    for (let num = start; num <= end; num++) {
        sum += num;
        if (num == end) {
            result += num;
        } else {
            result += num + ' ';
        }

    }
    console.log(result);
    console.log('Sum: ' + sum);
}
numberSum(50, 60);