import { css, SerializedStyles } from '@emotion/react'
import { ReactNode } from 'react'

import InputWrapper from 'components/common/Input/InputWrapper'

import Colors from 'styles/Colors'

const styles = {
    label: css`
        margin-right: 1rem;
    `,
    input: css`
        padding: 0.4rem 0.8rem;
        border-radius: 5px;
        border: 1px solid ${Colors.lightGray};

        &:focus,
        &:active &:focus-visible {
            outline: 1px solid ${Colors.gray};
        }
    `,
    error: css`
        margin-bottom: 0;
        color: ${Colors.danger};
    `
}
const InputText = ({
    id,
    name,
    value,
    onChange,
    placeholder,
    disabled,
    customStyles,
    label,
    noWrap,
    error
}: OwnProps): JSX.Element => {
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onChange?.(event.target.value)
    }
    return (
        <InputWrapper noWrap={noWrap}>
            {label && (
                <label css={styles.label} htmlFor={id}>
                    {label}
                </label>
            )}
            <div css={customStyles}>
                <input
                    id={id}
                    name={name}
                    type='text'
                    value={value}
                    onChange={disabled ? undefined : handleOnChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    css={styles.input}
                />
                {!!error && <p css={styles.error}>{error}</p>}
            </div>
        </InputWrapper>
    )
}

interface OwnProps {
    id: string
    name?: string
    noWrap?: boolean
    value?: string
    onChange?: (value: string) => void
    placeholder?: string
    disabled?: boolean
    customStyles?: SerializedStyles
    label?: ReactNode
    error?: string
}

export default InputText
