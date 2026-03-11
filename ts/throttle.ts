type ThrottleFunction<T extends any[]> = (...args: T) => any;

export default function throttle<T extends any[]>(
	func: ThrottleFunction<T>,
	wait: number = 0,
): ThrottleFunction<T> {
	let timerId: ReturnType<typeof setTimeout> | null = null;
	let context: any | undefined = undefined;
	let shouldThrottle = false;
	function throttled(this: any, ...args: T) {
		context = this;
		if (shouldThrottle) {
			return;
		}

		shouldThrottle = true;
		timerId = setTimeout(() => {
			shouldThrottle = false;
		}, wait);

		func.apply(context, args);
	}

	throttled.cancel = () => {
		clearTimeout(timerId ?? undefined);
		timerId = null;
	};

	return throttled;
}
