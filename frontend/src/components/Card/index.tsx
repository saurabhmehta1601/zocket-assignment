import React from 'react'

interface IProps {
    children: React.ReactNode
}
const Card = ({ children }: IProps) => {
    return (
        <div>{children}</div>
    )
}

export default Card