import appConstants from 'config/constants'

import { SelectOption } from 'types/select.types'

const { text, checkbox, select, listbox } = appConstants.formRowTypes
const { fieldType, fieldLabel, defaultValue, choicesListbox, sortSelect } = appConstants.formControlids

interface InputRow {
    rowLabel: string
    type: typeof text
    id: string
    placeholder?: string
}

interface CheckboxRow {
    rowLabel?: string
    type: typeof checkbox
    id: string
    label?: string
}

interface ListboxRow {
    rowLabel?: string
    type: typeof listbox
    id: string
    options: string[]
    onChange?: (value: string) => void
}

interface SelectRow {
    rowLabel?: string
    type: typeof select
    id: string
    options: SelectOption[]
}

export type FormState = {
    [fieldType]: boolean
    [fieldLabel]: string
    [defaultValue]: string
    [choicesListbox]: string[]
    [sortSelect]: SelectOption | null
}

export type FormRow = InputRow | CheckboxRow | ListboxRow | SelectRow
