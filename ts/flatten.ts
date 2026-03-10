type ArrayValue = any | Array<ArrayValue>;

export default function flatten(value: Array<ArrayValue>): Array<any> {
	const data = [];

	for (let i = 0; i < value.length; i++) {
		if (Array.isArray(value[i])) {
			data.push(...flatten(value[i]));
		} else {
			data.push(value[i]);
		}
	}
	return data;
}
