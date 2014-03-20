var IntStream = Java.type("java.util.stream.IntStream");

function ifmod(m, r, f) {
    return function(i) { return i % m == 0? r : f(i) }
}

IntStream.rangeClosed(1, 100).
   mapToObj(
      ifmod(15, "FizzBuzz", ifmod(5, "Buzz", ifmod(3, "Fizz", String))))
      .forEach(print);
