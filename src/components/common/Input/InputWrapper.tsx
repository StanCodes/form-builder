import { css } from '@emotion/react'
import { ReactNode } from 'react'

const styles = {
    wrapper: css`
        display: flex;
        align-items: center;
    `
}
const InputWrapper = ({ children, noWrap }: { children: ReactNode; noWrap?: boolean }): ReactNode => {
    return noWrap ? children : <div css={styles.wrapper}>{children}</div>
}

export default InputWrapper
