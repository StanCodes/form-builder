import { ReactNode } from 'react'

const Component = ({ title, children }: Props): JSX.Element => {
    return (
        <div>
            <h3>{title}</h3>
            <div>{children}</div>
        </div>
    )
}

interface Props {
    title: string
    children: ReactNode
}

export default Component
