import React, { useCallback } from 'react'
import { Button } from 'semantic-ui-react'
import { SelectedArticles, SetSelectedArticles } from '../../types'

type Props = {
    article: SelectedArticles
    setSelectedArticles: SetSelectedArticles
}
const ArticlePreview = ({article, setSelectedArticles}: Props) => {
    
    const deleteClick = useCallback(() => {
    setSelectedArticles(prev => {
        const _selectedArticles = [...prev]
        const index = prev.findIndex(article => article.id === article.id)
        _selectedArticles.splice(index, 1)
        return _selectedArticles
    })
    }, [])

    return(
        <div className='article_preview'>
            <strong>{article.title}</strong>
            <Button content="Usun" onClick={deleteClick}></Button>
        </div>
    )
}
export default ArticlePreview