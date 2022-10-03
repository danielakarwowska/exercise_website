import React from "react"
import ArticlePreview from "../components/article_preview"
import { SelectedArticles } from "../types"
type Props = {
    selectedArticles: SelectedArticles[]
}

const ArticlesList = ({ selectedArticles }: Props) => {
    const countOfArticles = selectedArticles.length
    return (
        <div className="article_list">
            <h2>SelectedArticles</h2>
            <p>You choose <strong>{countOfArticles}</strong></p>
            {countOfArticles > 0 && (
                <ul>
                    {
                        selectedArticles.map((article) => (
                            <li key={article.id}>
                                <ArticlePreview title={article.title}
                                    id={article.id} description={""} />
                            </li>
                        ))}
                </ul>
            )
            }
        </div>
    )
}
export default ArticlesList