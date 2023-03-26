function triangle(number) {

    for (let num = 1; num <= number; num++) {

        let result = '';
        for (let row = 1; row <= num; row++) {
            result += `${num} `;
        }
        console.log(result);
    }
}
triangle(6);