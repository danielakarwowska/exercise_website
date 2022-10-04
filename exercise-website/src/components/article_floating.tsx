import React, { useCallback } from 'react'
import { Button } from 'semantic-ui-react'
import { Articles, SelectedArticles, SetSelectedArticles } from '../types'

type Props = {
    article: Articles
    selectedArticles: SelectedArticles[]
    setSelectedArticles: SetSelectedArticles

}

const ArticleFLoating = ({ article, selectedArticles, setSelectedArticles }: Props) => {
    const {title, description, id} = article

    const disabled = !!selectedArticles.find(article => article.id === id)

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
            <Button disabled={disabled} content="Dodaj do listy" onClick={() => handleChange()}></Button>
        </div>
    )
}
export default ArticleFLoating