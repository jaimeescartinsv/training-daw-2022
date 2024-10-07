function evenNumbers() {
    let evens = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            evens.push(i);
        }
    }
    console.log(evens.join(', '));
}

evenNumbers();