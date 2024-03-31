import { css, Global } from '@emotion/react'

const GlobalStyles = () => (
    <Global
        styles={css`
            *,
            *::before,
            *::after {
                box-sizing: border-box;
            }

            * {
                margin: 0;
            }

            body {
                padding: 0;
                margin: 0;
                line-height: 1.5;
                -webkit-font-smoothing: antialiased;
            }

            img,
            picture,
            video,
            canvas,
            svg {
                display: block;
                max-width: 100%;
            }

            input,
            button,
            textarea,
            select {
                font: inherit;
            }

            p,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                overflow-wrap: break-word;
            }
        `}
    />
)

export default GlobalStyles
