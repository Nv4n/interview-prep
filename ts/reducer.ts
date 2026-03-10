interface Array<T> {
	myReduce<U>(
		callbackFn: (
			previousValue: U,
			currentValue: T,
			currentIndex: number,
			array: T[],
		) => U,
		initialValue?: U,
	): U;
}

Array.prototype.myReduce = function (callbackFn, initialValue) {
	if (this.length === 0) {
		if (initialValue !== undefined && initialValue !== null) {
			return initialValue;
		} else {
			throw new Error("no initial value provided and array is empty");
		}
	}
	let i = 1;
	let currentValue = this[0];
	if (initialValue !== undefined && initialValue !== null) {
		currentValue = initialValue;
		i = 0;
	}

	for (; i < this.length; i++) {
		if (this[i] === undefined) {
			continue;
		}
		currentValue = callbackFn(currentValue, this[i], i, this);
	}
	return currentValue;
};
