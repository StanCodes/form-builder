/**
 * Sets a value in the local storage with the given key.
 *
 * @param key - The key to set in the local storage.
 * @param value - The value to set in the local storage.
 */
export const setLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value)
}

/**
 * Retrieves the value associated with the specified key from the local storage.
 *
 * @param key - the key for which to retrieve the associated value
 */
export const getLocalStorage = (key: string) => {
    return localStorage.getItem(key)
}

/**
 * Removes an item from the local storage by the specified key.
 *
 * @param key - The key of the item to be removed.
 */
export const removeLocalStorage = (key: string) => {
    localStorage.removeItem(key)
}
