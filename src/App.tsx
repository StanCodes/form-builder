import { useEffect, useState } from 'react'

import appConstants from 'config/constants'

import Form from 'modules/builder/Form/Form'

import fieldService from 'services/fieldService'

import { FormState } from 'types/form.types'
import { SelectOption } from 'types/select.types'

import { getLocalStorage } from 'utils/persistence'

const { fieldType, fieldLabel, defaultValue, choicesListbox, sortSelect } = appConstants.formControlids
const sortTypes = {
    alphaAscending: 'alphaAscending',
    alphaDescending: 'alphaDescending'
}
const sortOptions: SelectOption[] = [
    { id: sortTypes.alphaAscending, label: 'Choices in Alphabetical Asc' },
    { id: sortTypes.alphaDescending, label: 'Choices in Alphabetical Desc' }
]
const initialState: FormState = {
    [fieldLabel]: '',
    [fieldType]: false,
    [defaultValue]: '',
    [choicesListbox]: [],
    [sortSelect]: sortOptions[0]
}
const storageKey = appConstants.storageKeys.fieldTypeForm
const App = (): JSX.Element => {
    const [formData, setFormData] = useState(initialState)

    useEffect(() => {
        const dataFromStorage = JSON.parse(getLocalStorage(storageKey) ?? 'null')

        if (dataFromStorage) {
            setFormData(dataFromStorage)
        } else {
            // fetch data from api or set initial data if nothing is returned
            const apiRes = fieldService.getField('test-id')
            const stateData = {
                [fieldLabel]: apiRes?.label ?? initialState[fieldLabel],
                [fieldType]: apiRes?.required ?? initialState[fieldType],
                [defaultValue]: apiRes?.default ?? initialState[defaultValue],
                [choicesListbox]: apiRes?.choices ?? initialState[choicesListbox],
                [sortSelect]: (apiRes?.displayAlpha ? sortOptions[0] : sortOptions[1]) ?? initialState[sortSelect]
            }

            setFormData(stateData)
        }
    }, [])

    return (
        <div>
            <Form data={formData} storageKey={storageKey} sortOptions={sortOptions} />
        </div>
    )
}

export default App
