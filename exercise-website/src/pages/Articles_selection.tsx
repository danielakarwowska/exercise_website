import React from "react"
import ArticleFloating from '../components/article_floating'
import { SetSelectedArticles } from "../types"
type Props = {
    articles: any
    setSelectedArticles: SetSelectedArticles
}
const ArticlesSelection = ({ articles, setSelectedArticles }: Props) => {
    const listOfArticles = articles.length
    return (
        <div className="articles_selection">
            {listOfArticles > 0 && (
                <ul className="articles_selection_list">
                    {
                        articles.map((article) =>
                            <li key={article.id}>
                                <ArticleFloating id={article.id}
                                    title={article.title}
                                    description={article.description}
                                    setSelectedArticles={setSelectedArticles} />
                            </li>)
                    }
                </ul>
            )}
        </div>
    )
}
export default ArticlesSelection