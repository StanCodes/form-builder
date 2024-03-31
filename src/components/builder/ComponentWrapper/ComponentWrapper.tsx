import { css } from '@emotion/react'
import { ReactNode } from 'react'

import Colors from 'styles/Colors'

const styles = {
    wrapper: css`
        display: flex;
        flex-direction: column;
        border: 2px solid ${Colors.builderBlueLight};
        border-radius: 5px;
        margin: 1rem;
        max-width: 50rem;
    `,
    wrapperTitle: css`
        padding: 1rem;
        border-bottom: 2px solid ${Colors.builderBlueLight};
        background: ${Colors.builderBlueLight};
        color: ${Colors.builderBlue};
    `,
    wrapperContent: css`
        padding: 1rem;
    `
}

const ComponentWrapper = ({ title, children }: Props): JSX.Element => {
    return (
        <div css={styles.wrapper}>
            <h3 css={styles.wrapperTitle}>{title}</h3>
            <div css={styles.wrapperContent}>{children}</div>
        </div>
    )
}

interface Props {
    title: string
    children: ReactNode
}

export default ComponentWrapper
