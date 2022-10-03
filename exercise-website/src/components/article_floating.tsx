import React from 'react'

type Props = {
    title: string
    description: string
}

const ArticleFLoating = ({title, description}: Props) => {
    return(
    <div>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
    )
}
export default ArticleFLoating