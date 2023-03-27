function information(name, age, grade) {
    //let introduction = 'My name is ' + name + " and I'm " + age + ' years old.';

    let student = `Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`
    console.log(student);

}

information('Steve', 16, 2.1426);