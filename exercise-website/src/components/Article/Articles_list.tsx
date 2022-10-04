import React from "react"
import { Button } from "semantic-ui-react"
import ArticlePreview from "../Article/article_preview"
import { SelectedArticles, SetSelectedArticles } from "../../types"
type Props = {
    selectedArticles: SelectedArticles[]
    setSelectedArticles: SetSelectedArticles
    setReadyToRead: any
}

const ArticlesList = ({ setReadyToRead, selectedArticles, setSelectedArticles  }: Props) => {
    const countOfArticles = selectedArticles.length
    return (
        <div className="article_list">
            <h2>Selected Articles</h2>
            <p>You choose <strong>{countOfArticles}</strong></p>
            {countOfArticles > 0 && (
                <ul className="article_list__list">
                    {
                        selectedArticles.map((selectedArticle) => (
                            <li   key={selectedArticle.id}>
                                <ArticlePreview
                                    article={selectedArticle}
                                    setSelectedArticles={setSelectedArticles} />
                            </li>
                        ))}
                </ul>
            )
            }
            <Button content="Przeczytaj wybrane artykuły"
            disabled={selectedArticles.length === 0}
            onClick={() => setReadyToRead(true)}
            />
        </div>
    )
}
export default ArticlesList

