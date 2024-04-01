import appConstants from 'config/constants'

import { SelectOption } from 'types/select.types'

const { text, checkbox, select, listbox, textarea } = appConstants.formRowTypes
const { fieldType, fieldLabel, defaultValue, choicesListbox, sortSelect } = appConstants.formControlids

type ControlId = valueof<typeof appConstants.formControlids>

interface InputRow {
    rowLabel: string
    type: typeof text
    id: ControlId
    placeholder?: string
}

interface CheckboxRow {
    rowLabel?: string
    type: typeof checkbox
    id: ControlId
    label?: string
}

interface ListboxRow {
    rowLabel?: string
    type: typeof listbox
    id: ControlId
    options: string[]
    //onChange?: (value: string) => void
}

interface SelectRow {
    rowLabel?: string
    type: typeof select
    id: ControlId
}

interface TextAreaRow {
    rowLabel?: string
    type: typeof textarea
    id: ControlId
}

export type FormState = {
    [fieldType]: boolean
    [fieldLabel]: string
    [defaultValue]: string
    [choicesListbox]: string[]
    [sortSelect]: SelectOption | null
}

export type FormRow = InputRow | CheckboxRow | ListboxRow | SelectRow | TextAreaRow
