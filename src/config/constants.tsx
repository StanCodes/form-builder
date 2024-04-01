const appConstants = {
    formRowTypes: {
        // defines control used in form
        text: 'text',
        checkbox: 'checkbox',
        listbox: 'listbox',
        select: 'select',
        textarea: 'textarea'
    },
    formControlids: {
        // defines data id in state and id prop
        fieldLabel: 'field-label',
        fieldType: 'field-type',
        defaultValue: 'default-value',
        choicesListbox: 'choices-listbox',
        sortSelect: 'sort-select'
    },
    storageKeys: {
        fieldTypeForm: 'fieldTypeForm'
    }
} as const

export default appConstants
