function vacation(people, type, day) {
    let totalPrice = 0;
    let singlePrice = 0;

    if (type == 'Students' && day == 'Friday') {
        singlePrice = 8.45;
        totalPrice = singlePrice * people;
        if (people >= 30) {
            totalPrice -= totalPrice * 0.15
        }
        console.log('Total price: ' + totalPrice.toFixed(2));
    } else if (type == 'Students' && day == 'Saturday') {
        singlePrice = 9.80;
        totalPrice = singlePrice * people;
        if (people >= 30) {
            totalPrice -= totalPrice * 0.15
        }
        console.log('Total price: ' + totalPrice.toFixed(2));
    } else if (type == 'Students' && day == 'Sunday') {
        singlePrice = 10.46;
        totalPrice = singlePrice * people;
        if (people >= 30) {
            totalPrice -= totalPrice * 0.15
        }
        console.log('Total price: ' + totalPrice.toFixed(2));
    }
    if (type == 'Business' && day == 'Friday') {
        if (people >= 100) {
            people -= 10
        }
        singlePrice = 10.90;
        totalPrice = singlePrice * people;

        console.log('Total price: ' + totalPrice.toFixed(2));
    } else if (type == 'Business' && day == 'Saturday') {
        if (people >= 100) {
            people -= 10
        }
        singlePrice = 15.60;
        totalPrice = singlePrice * people;
        console.log('Total price: ' + totalPrice.toFixed(2));
    } else if (type == 'Business' && day == 'Sunday') {
        if (people >= 100) {
            people -= 10
        }
        singlePrice = 16;
        totalPrice = singlePrice * people;
        console.log('Total price: ' + totalPrice.toFixed(2));
    }
    if (type == 'Regular' && day == 'Friday') {
        singlePrice = 15;
        totalPrice = singlePrice * people;
        if (people >= 10 && people <= 20) {
            totalPrice -= totalPrice * 0.05
        }
        console.log('Total price: ' + totalPrice.toFixed(2));
    } else if (type == 'Regular' && day == 'Saturday') {
        singlePrice = 20;
        totalPrice = singlePrice * people;
        if (people >= 10 && people <= 20) {
            totalPrice -= totalPrice * 0.05
        }
        console.log('Total price: ' + totalPrice.toFixed(2));
    } else if (type == 'Regular' && day == 'Sunday') {
        singlePrice = 22.50;
        totalPrice = singlePrice * people;
        if (people >= 10 && people <= 20) {
            totalPrice -= totalPrice * 0.05
        }
        console.log('Total price: ' + totalPrice.toFixed(2));
    }
}
vacation(11, "Regular", "Saturday");