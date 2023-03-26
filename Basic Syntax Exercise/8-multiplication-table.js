function table(number) {

    for (num = 1; num <= 10; num++) {
        let result = number * num;
        console.log(`${number} ` + 'X' + ` ${ num } ` + '=' + ` ${ result }`);
    }
}
table(5)