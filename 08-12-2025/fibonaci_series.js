function fibonacciGenerator(n) {
    var result = [];

    if (n === 1) {
        return [0];
    }

    if (n === 2) {
        return [0, 1];
    }

    result = [0, 1];

    for (var i = 2; i < n; i++) {
        var next = result[i - 1] + result[i - 2];
        result.push(next);
    }

    return result;
}

console.log(fibonacciGenerator(5));
