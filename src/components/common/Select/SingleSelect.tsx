import { css, SerializedStyles } from '@emotion/react'
import { ReactNode, useState } from 'react'

import Colors from 'styles/Colors'

import { SelectOption } from 'types/select.types'

const styles = {
    wrapper: css`
        display: flex;
        align-items: center;
        position: relative;
        width: 100%;
    `,
    label: css`
        margin-right: 1rem;
    `,
    value: css`
        padding: 0.4rem 0.8rem;
        border-radius: 5px;
        border: 1px solid ${Colors.lightGray};
        width: 100%;
        cursor: pointer;

        &:focus,
        &:active &:focus-visible {
            outline: 1px solid ${Colors.gray};
        }
    `,
    listBox: css`
        max-height: 10rem;
        overflow-y: auto;
        list-style: none;
        margin: 0;
        width: 100%;
        padding: 0 0 0.4rem 0;
        border-radius: 5px;
        border: 1px solid ${Colors.lightGray};
        position: absolute;
        left: 0;
        top: 100%;
        background: ${Colors.white};
    `,
    listBoxDisabled: css``, // TODO
    listItem: css`
        padding: 0.2rem 0.8rem;
        cursor: pointer;

        &:hover {
            background: ${Colors.lightGray};
        }
    `,
    listItemSelectd: css`
        background: ${Colors.lightGray};

        &:hover {
            background: ${Colors.gray};
        }
    `
}
const SingleSelect = ({ id, value, onChange, disabled, customStyles, label, placeholder, options }: OwnProps) => {
    const [expanded, setExpanded] = useState(false)
    const menuId = `${id}-combolist`

    const handleOnClick = () => {
        setExpanded(!expanded)
    }

    const handleOnChange = (option: SelectOption) => {
        onChange(option)
        setExpanded(false)
    }
    return (
        <div css={[styles.wrapper, customStyles]}>
            {label && (
                <label css={styles.label} htmlFor={id}>
                    {label}
                </label>
            )}
            <div
                css={styles.value}
                id={id}
                role='combobox'
                aria-expanded={expanded}
                tabIndex={0}
                aria-activedescendant={expanded ? menuId : undefined}
                onClick={disabled ? undefined : handleOnClick}
            >
                {value?.label || placeholder}
            </div>
            {expanded && options?.length && (
                <ul css={[styles.listBox, disabled && styles.listBoxDisabled]} id={menuId} role='listbox'>
                    {options.map((option) => {
                        const isSelected = value?.id === option.id
                        return (
                            <li
                                css={[styles.listItem, isSelected && styles.listItemSelectd]}
                                key={option.id}
                                role='option'
                                aria-selected={isSelected}
                                onClick={() => handleOnChange(option)}
                            >
                                {option.label}
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

type OwnProps = {
    id: string
    value: SelectOption | null
    onChange: (options: SelectOption) => void
    disabled?: boolean
    customStyles?: SerializedStyles
    label?: ReactNode
    options?: SelectOption[]
    placeholder?: string
}

export default SingleSelect
