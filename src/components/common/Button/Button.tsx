import { css, SerializedStyles } from '@emotion/react'
import { ReactNode } from 'react'

import Colors from 'styles/Colors'

export const ButtonEnums = {
    type: {
        primary: 'primary',
        secondary: 'secondary'
    },
    variant: {
        default: 'default',
        outlined: 'outlined',
        text: 'text'
    }
} as const

const styles = {
    button: css`
        display: flex;
        align-items: center;
        padding: 0.5rem 0.8rem;
        border-radius: 5px;
        cursor: pointer;
        border: 1px solid;
    `,
    [ButtonEnums.type.primary]: css`
        background-color: ${Colors.green};
        color: ${Colors.white};
        border-color: ${Colors.green};

        &:hover {
            background: ${Colors.greenLight};
            color: ${Colors.black};
        }
    `,
    [ButtonEnums.type.secondary]: css``, // TODO
    [ButtonEnums.variant.default]: css`
        //background: inherit;
        //border: inherit;
    `,
    [ButtonEnums.variant.outlined]: css`
        background: none;
        border: 1px solid;
    `,
    [ButtonEnums.variant.text]: css`
        background: none;
        border: none;

        &:hover {
            text-decoration: underline;
        }
    `
}

const Button = ({
    id,
    children,
    onClick,
    disabled,
    customStyles,
    type,
    variant = ButtonEnums.variant.default,
    title
}: OwnProps) => {
    return (
        <button
            type='button'
            id={id}
            css={[styles.button, type && styles[type], styles[variant], customStyles]}
            onClick={onClick}
            disabled={disabled}
            aria-disabled={disabled}
            title={title}
        >
            {children}
        </button>
    )
}

interface OwnProps {
    id?: string
    children?: ReactNode
    onClick?: () => void
    disabled?: boolean
    customStyles?: SerializedStyles
    type?: valueof<typeof ButtonEnums.type>
    variant?: valueof<typeof ButtonEnums.variant>
    title?: string
}

export default Button
