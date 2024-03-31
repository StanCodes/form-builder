type valueof<T extends object & { length?: never }> = T[keyof T]
