import { css, SerializedStyles } from '@emotion/react'
import { ReactNode } from 'react'

import Colors from 'styles/Colors'

const styles = {
    wrapper: css`
        align-items: center;
        display: inline-flex;
    `,
    label: css`
        display: inline-flex;
        position: relative;
        align-items: center;
        align-self: flex-start;
        cursor: pointer;
        margin: 0;
    `,
    input: css`
        appearance: none;
        background: ${Colors.white};
        border: 1px solid ${Colors.gray};
        border-radius: 5px;
        cursor: pointer;
        height: 1.5rem;
        margin: 0 0.5rem 0 0;
        padding: 0;
        position: relative;
        width: 1.5rem;

        &:hover {
            &:before {
                opacity: 1;
            }
        }

        &:checked {
            border-color: ${Colors.greenLight};
            &:after {
                opacity: 1;
            }
        }

        &:before {
            background-color: ${Colors.lightGray};
            border-radius: 0.125rem;
            content: '';
            height: 1.25rem;
            left: 50%;
            opacity: 0;
            pointer-events: none;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 1.25rem;
        }

        &:after {
            border: 0.1875rem solid ${Colors.green};
            border-right: 0;
            border-top: 0;
            content: ' ';
            height: 0.3125rem;
            left: 50%;
            opacity: 0;
            position: absolute;
            top: 10px;
            transform: translate(-50%, -50%) rotate(-45deg);
            width: 0.75rem;
        }
    `,
    inputDisabled: css`` // TODO
}

const Checkbox = ({ id, name, checked, onChange, disabled, customStyles, label }: OwnProps) => {
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onChange?.(event.target.value)
    }
    return (
        <div css={[styles.wrapper, customStyles]}>
            <label css={styles.label}>
                <input
                    css={[styles.input, disabled && styles.inputDisabled]}
                    id={id}
                    type='checkbox'
                    name={name}
                    checked={checked}
                    onChange={disabled ? undefined : handleOnChange}
                    disabled={disabled}
                />
                {label && <span>{label}</span>}
            </label>
        </div>
    )
}

interface OwnProps {
    id: string
    name?: string
    checked?: boolean
    onChange?: (value: string) => void
    disabled?: boolean
    customStyles?: SerializedStyles
    label?: ReactNode
}

export default Checkbox
