export default function debounce(func: Function, wait: number): Function {
	let timeoutId: ReturnType<typeof setTimeout> | null = null;
	let context: any | undefined = undefined;
	let lastArgs: any[] | undefined = undefined;

	function debounced(this: any, ...args: any[]) {
		context = this;
		lastArgs = args;

		clearTimeout(timeoutId ?? undefined);
		timeoutId = setTimeout(() => {
			timeoutId = null;
			func.apply(context, lastArgs);
		}, wait);
	}
	debounced.cancel = () => {
		clearTimeout(timeoutId ?? undefined);
		timeoutId = null;
	};
	debounced.flush = () => {
		setTimeout(() => {
			debounced.cancel();
			func.apply(context, lastArgs);
		}, 0);
	};

	return debounced;
}
