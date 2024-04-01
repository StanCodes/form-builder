import { css, SerializedStyles } from '@emotion/react'
import { ReactNode } from 'react'

import Button, { ButtonEnums } from 'components/common/Button/Button'

import Colors from 'styles/Colors'

const styles = {
    wrapper: css`
        display: flex;
        align-items: center;
    `,
    label: css`
        margin-right: 1rem;
    `,
    listBox: css`
        max-height: 10rem;
        overflow-y: auto;
        list-style: none;
        margin: 0;
        width: 100%;
        padding: 0.4rem 0;
        border-radius: 5px;
        border: 1px solid ${Colors.lightGray};
    `,
    listBoxDisabled: css``, // TODO
    listItem: css`
        padding: 0.2rem 0.8rem;
        cursor: pointer;
        display: flex;
        align-items: center;

        &:hover {
            background: ${Colors.lightGray};
        }
    `,
    listItemReadOnly: css`
        cursor: default;
    `,
    listItemRemoveButton: css`
        margin-left: auto;
    `,
    listItemSelectd: css`
        background: ${Colors.lightGray};

        &:hover {
            background: ${Colors.gray};
        }
    `
}

// TODO: add support for single value
const Select = ({ id, options, value, onChange, onRemoveItem, disabled, customStyles, label, readonly }: OwnProps) => {
    const handleOnChange = (option: string): void => {
        const values = (value as unknown as string[]) ?? []
        onChange?.(
            values?.includes(option)
                ? values.filter((selectedOption) => selectedOption !== option)
                : [...values, option]
        )
    }

    const handleRemoveItem = (option: string): void => {
        onRemoveItem?.(option)
    }

    return (
        <div css={[styles.wrapper, customStyles]}>
            {label && (
                <label css={styles.label} htmlFor={id}>
                    {label}
                </label>
            )}
            {options?.length && (
                <ul css={[styles.listBox, disabled && styles.listBoxDisabled]} id={id} tabIndex={0} role='listbox'>
                    {options.map((option) => {
                        const isSelected = value?.includes(option)
                        return (
                            <li
                                css={[
                                    styles.listItem,
                                    isSelected && styles.listItemSelectd,
                                    readonly && styles.listItemReadOnly
                                ]}
                                key={option}
                                role='option'
                                aria-selected={isSelected}
                                onClick={readonly ? undefined : () => handleOnChange(option)}
                            >
                                <span>{option}</span>
                                {onRemoveItem && (
                                    <Button
                                        customStyles={styles.listItemRemoveButton}
                                        variant={ButtonEnums.variant.text}
                                        title='Remove item'
                                        onClick={() => handleRemoveItem(option)}
                                    >
                                        X
                                    </Button>
                                )}
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
    value?: string[]
    onChange?: (options: string[]) => void
    onRemoveItem?: (option: string) => void
    disabled?: boolean
    customStyles?: SerializedStyles
    label?: ReactNode
    options?: string[]
    readonly?: boolean
}

export default Select
