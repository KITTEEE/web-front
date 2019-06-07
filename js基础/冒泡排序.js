var numbers = [5, 4, 3, 2, 1];
for (var i = 0; i < numbers.length - 1; i++) {
    var isSort = true;
    for (var j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
            isSort = false;
            var temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
        console.log(numbers)
    }
    if (isSort == true) {
        break;
    }
}
console.log(numbers);