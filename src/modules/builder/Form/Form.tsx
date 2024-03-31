import { css } from '@emotion/react'
import { Fragment, useState } from 'react'

import ComponentWrapper from 'components/builder/ComponentWrapper/ComponentWrapper'
import Button, { ButtonEnums } from 'components/common/Button/Button'
import Checkbox from 'components/common/Checkbox/Checkbox'
import InputText from 'components/common/Input/InputText'
import Select from 'components/common/Select/Select'
import SingleSelect from 'components/common/Select/SingleSelect'

import appConstants from 'config/constants'

import Colors from 'styles/Colors'

import { FormRow, FormState } from 'types/form.types'
import { SelectOption } from 'types/select.types'

const styles = {
    form: css`
        display: flex;
        flex-wrap: wrap;
        max-width: 45rem;
    `,
    label: css`
        flex-basis: 30%;
        display: flex;
        margin-bottom: 1rem;
        margin-top: 0.5rem;
    `,
    control: css`
        flex-basis: 70%;
        margin-bottom: 1rem;
    `,
    multipleControl: css`
        display: flex;
        align-items: center;
    `,
    marginLeft: css`
        margin-left: 1rem;
    `,
    buttonWrapper: css`
        display: flex;
        align-items: center;
        margin: 1rem auto;
    `,
    buttonSeparator: css`
        margin-left: 0.5rem;
    `,
    cancelButton: css`
        color: ${Colors.danger};
    `
}

const { text, checkbox, listbox, select } = appConstants.formRowTypes
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
const Form = (): JSX.Element => {
    const [formData, setFormData] = useState(initialState)
    const formRows: FormRow[] = [
        { rowLabel: 'Label', type: text, id: fieldLabel, placeholder: 'Field Label' },
        { rowLabel: 'Type', type: checkbox, id: fieldType, label: 'A value is required' },
        { rowLabel: 'Default Value', type: text, id: defaultValue, placeholder: 'Default value' },
        {
            rowLabel: 'Choices',
            type: listbox,
            id: choicesListbox,
            options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'] //TODO: transform to {id: string, label: string}
        },
        {
            rowLabel: 'Choices',
            type: select,
            id: sortSelect,
            options: sortOptions
        }
    ]

    const renderRow = (row: FormRow) => {
        let control = null
        if (row.type === text) {
            control = <InputText customStyles={styles.control} id={row.id} placeholder={row.placeholder} noWrap />
        }
        if (row.type === checkbox) {
            control = (
                <div css={[styles.control, styles.multipleControl]}>
                    {/* hard coded for */}
                    <span>Multi-select</span>
                    <Checkbox customStyles={styles.marginLeft} id={row.id} label={row.label} />
                </div>
            )
        }
        if (row.type === listbox) {
            const options = row.options
            const handleOnChange = (value: string[]) => {
                setFormData({ ...formData, [choicesListbox]: value })
            }
            control = (
                <Select
                    customStyles={styles.control}
                    id={row.id}
                    options={options}
                    onChange={handleOnChange}
                    value={formData[choicesListbox]}
                />
            )
        }
        if (row.type === select) {
            const handleOnChange = (value: SelectOption) => {
                setFormData({ ...formData, [sortSelect]: value })
            }
            control = (
                <SingleSelect
                    customStyles={styles.control}
                    id={row.id}
                    options={row.options}
                    onChange={handleOnChange}
                    value={formData[sortSelect]}
                />
            )
        }

        return (
            <Fragment key={row.id}>
                <label css={styles.label} htmlFor={row.id}>
                    {row.rowLabel}
                </label>
                {control}
            </Fragment>
        )
    }

    console.log(formData)

    return (
        <ComponentWrapper title='Field Builder'>
            <form css={styles.form}>
                {formRows.map((row) => renderRow(row))}
                <div css={styles.buttonWrapper}>
                    <Button type={ButtonEnums.type.primary}>Save Changes</Button>
                    <span css={styles.buttonSeparator}>or</span>
                    <Button customStyles={styles.cancelButton} variant={ButtonEnums.variant.text}>
                        Cancel
                    </Button>
                </div>
            </form>
        </ComponentWrapper>
    )
}

export default Form
