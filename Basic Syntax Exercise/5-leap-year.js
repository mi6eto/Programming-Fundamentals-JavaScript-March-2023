function leapYear(year) {
    isLeap = true;
    if (year % 4 != 0) {
        isLeap = false;
    }
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            isLeap = false;
            if (year % 400 == 0) {
                isLeap = true;
            }
        }

    }
    if (isLeap) {
        console.log('yes');
    } else {
        console.log('no');
    }
}
leapYear(2000)