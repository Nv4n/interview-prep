type ArrayValue = any | Array<ArrayValue>;

export function flatten(value: Array<ArrayValue>): Array<any> {
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

/** Generator */
// /**
//  * @param {Array<*|Array>} value
//  * @return {Array}
//  */
// export function* flattenGen(value: Array<any>): Array<any> {
// 	for (const item of value) {
// 		if (Array.isArray(item)) {
// 			yield* flatten(item);
// 		} else {
// 			yield item;
// 		}
// 	}
// }
