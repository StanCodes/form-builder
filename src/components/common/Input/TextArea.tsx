import { css, SerializedStyles } from '@emotion/react'
import { ReactNode } from 'react'

import Colors from 'styles/Colors'

import InputWrapper from './InputWrapper'

const styles = {
    label: css`
        margin-right: 1rem;
    `,
    textarea: css`
        padding: 0.4rem 0.8rem;
        border-radius: 5px;
        border: 1px solid ${Colors.lightGray};
        height: 8rem;
        resize: none;
        width: 100%;

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

const TextArea = ({
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
    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
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
                <textarea
                    id={id}
                    name={name}
                    value={value}
                    onChange={disabled ? undefined : handleOnChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    css={styles.textarea}
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

export default TextArea
