import React from 'react'
import { SelectedArticles } from '../types'

type Props = SelectedArticles
const ArticlePreview = ({title}: Props) => {
    return(
        <div className='article_preview'>
            <strong>{title}</strong>
        </div>
    )
}
export default ArticlePreview