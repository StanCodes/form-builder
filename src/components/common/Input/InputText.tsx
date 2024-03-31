import { css, SerializedStyles } from '@emotion/react'
import { ReactNode } from 'react'

import Colors from 'styles/Colors'

const styles = {
    wrapper: css`
        display: flex;
        align-items: center;
    `,
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
    `
}

const InputWrapper = ({ children, noWrap }: { children: ReactNode; noWrap?: boolean }): ReactNode => {
    return noWrap ? children : <div css={styles.wrapper}>{children}</div>
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
    noWrap
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
            <input
                id={id}
                name={name}
                type='text'
                value={value}
                onChange={disabled ? undefined : handleOnChange}
                placeholder={placeholder}
                disabled={disabled}
                css={[styles.input, customStyles]}
            />
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
}

export default InputText
