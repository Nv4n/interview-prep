export type ClassValue =
	| ClassArray
	| ClassDictionary
	| string
	| number
	| null
	| boolean
	| undefined;
export type ClassDictionary = Record<string, any>;
export type ClassArray = Array<ClassValue>;

function getVal(arg: ClassValue): string {
	let cssMix = "";
	let curr = "";
	if (typeof arg === "string" || typeof arg === "number") {
		cssMix += arg;
	} else if (typeof arg === "object") {
		if (Array.isArray(arg)) {
			for (let i = 0; i < arg.length; i++) {
				if (arg[i]) {
					if ((curr = getVal(arg[i]))) {
						cssMix && (cssMix += " ");
						cssMix += getVal(arg[i]);
					}
				}
			}
		} else {
			for (const key in arg) {
				if (arg[key]) {
					cssMix && (cssMix += " ");
					cssMix += getVal(key);
				}
			}
		}
	}
	return cssMix;
}

export default function classNames(...args: Array<ClassValue>): string {
	let cssMix = "";
	let curr = "";
	for (let i = 0; i < args.length; i++) {
		if (args[i]) {
			if ((curr = getVal(args[i]))) {
				cssMix && (cssMix += " ");
				cssMix += curr;
			}
		}
	}

	return cssMix;
}
