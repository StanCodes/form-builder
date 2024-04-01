/**
 * Validates the label field.
 *
 * @param value - The value of the label field.
 */
export const validateLabelField = (value: string) => {
    return !value ? 'Label field is required!' : ''
}

/**
 * Validates an array of choices.
 *
 * @param value - The array of choices to be validated.
 */
export const validateChoices = (value: string[]) => {
    if (value.length >= 50) {
        return 'Too many choices!'
    }
    if (new Set(value).size !== value.length) {
        return 'Choices must be unique!'
    }

    return ''
}
