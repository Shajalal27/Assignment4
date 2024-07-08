function monthlySavings(arr) {
    let bankTax = 0;
    if (arr >= 3000) {
        bankTax = arr * 20 / 100;
    }

    const income = arr - bankTax;
    return income;
}

const result = monthlySavings([1000, 2000, 3000]);
console.log(result);

  