import { css } from '@emotion/react'
import { Fragment, useCallback, useEffect, useRef, useState } from 'react'

import ComponentWrapper from 'components/builder/ComponentWrapper/ComponentWrapper'
import Button, { ButtonEnums } from 'components/common/Button/Button'
import Checkbox from 'components/common/Checkbox/Checkbox'
import InputText from 'components/common/Input/InputText'
import TextArea from 'components/common/Input/TextArea'
import SingleSelect from 'components/common/Select/SingleSelect'

import appConstants from 'config/constants'

import fieldService from 'services/fieldService'

import Colors from 'styles/Colors'

import { FormRow, FormState } from 'types/form.types'
import { SelectOption } from 'types/select.types'

import { removeLocalStorage, setLocalStorage } from 'utils/persistence'

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

const { text, checkbox, select, textarea } = appConstants.formRowTypes
const { fieldType, fieldLabel, defaultValue, choicesListbox, sortSelect } = appConstants.formControlids
const Form = ({ data, storageKey, sortOptions }: OwnProps): JSX.Element => {
    const [formData, setFormData] = useState(data)
    const formDataRef = useRef(formData) // for storage synchronization

    const formRows: FormRow[] = [
        { rowLabel: 'Label', type: text, id: fieldLabel, placeholder: 'Field Label' },
        { rowLabel: 'Type', type: checkbox, id: fieldType, label: 'A value is required' },
        { rowLabel: 'Default Value', type: text, id: defaultValue, placeholder: 'Default value' },
        {
            rowLabel: 'Choices',
            type: textarea,
            id: choicesListbox
            //options: formData[choicesListbox] //TODO: transform to {id: string, label: string}
        },
        {
            rowLabel: 'Choices',
            type: select,
            id: sortSelect,
            options: sortOptions
        }
    ]

    //sync inner state with parent props
    useEffect(() => {
        setFormData(data)
    }, [data])

    // syncs form data with ref
    useEffect(() => {
        formDataRef.current = formData
    }, [formData])

    // will handle saving local storage form data
    useEffect(() => {
        return () => {
            const refData = formDataRef.current
            if (refData) {
                setLocalStorage(storageKey, JSON.stringify(refData))
            }
        }
    }, [])

    const renderRow = (row: FormRow) => {
        let control = null
        const inputOnChange = (value: string | boolean) => {
            setFormData({ ...formData, [row.id]: value })
        }
        if (row.type === text) {
            control = (
                <InputText
                    customStyles={styles.control}
                    id={row.id}
                    placeholder={row.placeholder}
                    noWrap
                    value={formData[row.id] as string}
                    onChange={inputOnChange}
                />
            )
        }
        if (row.type === checkbox) {
            control = (
                <div css={[styles.control, styles.multipleControl]}>
                    {/* hard coded for */}
                    <span>Multi-select</span>
                    <Checkbox
                        customStyles={styles.marginLeft}
                        id={row.id}
                        label={row.label}
                        checked={formData[fieldType]}
                        onChange={inputOnChange}
                    />
                </div>
            )
        }
        if (row.type === textarea) {
            //const options = row.options
            const newLine = '\r\n'
            const handleOnChange = (value: string) => {
                setFormData({ ...formData, [choicesListbox]: value.split(/\r?\n/) })
            }
            control = (
                <TextArea
                    customStyles={styles.control}
                    id={row.id}
                    onChange={handleOnChange}
                    value={formData[choicesListbox]
                        .sort((a, b) =>
                            formData[sortSelect]?.id === sortOptions[0].id ? a.localeCompare(b) : b.localeCompare(a)
                        )
                        .join(newLine)}
                    noWrap
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

    const handleSave = () => {
        removeLocalStorage(storageKey)
        const choices = formData[choicesListbox]
        const saveData = {
            ...formData,
            [choicesListbox]: choices.includes(formData[defaultValue]) ? choices : [...choices, formData[defaultValue]]
        }
        fieldService.saveField(saveData) // TO DO loading indicator
    }

    const handleCancel = useCallback(() => {
        setFormData(data)
    }, [data])

    return (
        <ComponentWrapper title='Field Builder'>
            <form css={styles.form}>
                {formRows.map((row) => renderRow(row))}
                <div css={styles.buttonWrapper}>
                    <Button type={ButtonEnums.type.primary} onClick={handleSave}>
                        Save Changes
                    </Button>
                    <span css={styles.buttonSeparator}>or</span>
                    <Button
                        customStyles={styles.cancelButton}
                        variant={ButtonEnums.variant.text}
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>
                </div>
            </form>
        </ComponentWrapper>
    )
}

interface OwnProps {
    data: FormState
    storageKey: string
    sortOptions: SelectOption[]
}

export default Form
