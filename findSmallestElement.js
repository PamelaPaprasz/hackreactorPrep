function findSmallestElement(arr) {
	return arr.reduce(
		(accumulator, currentValue) => {
			return Math.min(currentValue, accumulator);
      	}
    );
}
console.log(findSmallestElement([4, 1, 9, 10]));