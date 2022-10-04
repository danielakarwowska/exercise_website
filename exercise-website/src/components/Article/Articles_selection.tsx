import React from "react"
import ArticleFloating from './article_floating'
import { Articles, SelectedArticles, SetSelectedArticles } from "../../types"
type Props = {
    articles: Articles[]
    selectedArticles: SelectedArticles[]
    setSelectedArticles: SetSelectedArticles
}
const ArticlesSelection = ({ articles,selectedArticles, setSelectedArticles }: Props) => {
    const listOfArticles = articles.length
    return (
        <div className="articles_selection">
            {listOfArticles > 0 && (
                <ul className="articles_selection__list">
                    {
                        articles.map((article) =>
                            <li key={article.id}>
                                <ArticleFloating 
                                article={article}
                                selectedArticles={selectedArticles}
                                setSelectedArticles={setSelectedArticles}
                                />
                            </li>)
                    }
                </ul>
            )}
        </div>
    )
}
export default ArticlesSelection