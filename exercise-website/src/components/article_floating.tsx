import React, { useCallback } from 'react'
import { Button } from 'semantic-ui-react'
import { SetSelectedArticles } from '../types'

type Props = {
    id: string
    title: string
    description: string
    setSelectedArticles: SetSelectedArticles

}

const ArticleFLoating = ({ id, title, description, setSelectedArticles }: Props) => {

    const handleChange = useCallback(() => {
        setSelectedArticles((prev) => [
            ...prev,
            {
                id: id,
                title: title,
                description: description
            }
        ])
    }, [setSelectedArticles, id, title])
    return (
        <div className='article_floating'>
            <h2>{title}</h2>
            <p>{description}</p>
            <Button content="Dodaj do listy" onClick={() => handleChange()}></Button>
        </div>
    )
}
export default ArticleFLoating