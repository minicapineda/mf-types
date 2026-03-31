export type Primitive =
	| string
	| number
	| boolean
	| bigint
	| symbol
	| null
	| undefined;

export type DeepPartial<T> = T extends (...args: never[]) => unknown
	? T
	: T extends Date
		? T
		: T extends readonly (infer U)[]
			? readonly DeepPartial<U>[]
			: T extends object
				? { [P in keyof T]?: DeepPartial<T[P]> }
				: T;

export type DeepReadonly<T> = T extends (...args: never[]) => unknown
	? T
	: T extends Date
		? T
		: T extends readonly (infer U)[]
			? readonly DeepReadonly<U>[]
			: T extends object
				? { readonly [P in keyof T]: DeepReadonly<T[P]> }
				: T;

export type Nullable<T> = T | null;

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RequiredBy<T, K extends keyof T> = Omit<T, K> &
	Required<Pick<T, K>>;

export type NonEmptyArray<T> = [T, ...T[]];

export type ValueOf<T> = T[keyof T];

export type Exact<T, Shape extends T> = T &
	Record<Exclude<keyof Shape, keyof T>, never>;

export type DeepRequired<T> = T extends (...args: never[]) => unknown
	? T
	: T extends Date
		? T
		: T extends readonly (infer U)[]
			? readonly DeepRequired<U>[]
			: T extends object
				? { [P in keyof T]-?: DeepRequired<T[P]> }
				: T;

export type DeepNonNullable<T> = T extends (...args: never[]) => unknown
	? T
	: T extends Date
		? T
		: T extends readonly (infer U)[]
			? readonly DeepNonNullable<U>[]
			: T extends object
				? { [P in keyof T]: DeepNonNullable<NonNullable<T[P]>> }
				: NonNullable<T>;
