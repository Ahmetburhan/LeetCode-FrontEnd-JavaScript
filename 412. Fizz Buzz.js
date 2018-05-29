function fizzBuzz(n) {

    let arr = [];
    // Loop 100 times, starting from the number 1
    for (var i = 1; i <= n; i++) {

        // If divisible by 3 and 5,
        if (i % 3 === 0 && i % 5 === 0) {

            arr.push("FizzBuzz");
        }

        // If divisible by 3,
        else if (i % 3 === 0) {

            arr.push("Fizz");

        }

        // If divisible by 5,
        else if (i % 5 === 0) {

            arr.push("Buzz");


        } else {
            arr.push(i.toString());
        }

    }
    return arr;

}



