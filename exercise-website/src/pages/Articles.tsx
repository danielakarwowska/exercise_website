import React from "react"
import {Grid} from 'semantic-ui-react'
import ArticlesFloating from '../components/article_floating'
type Props = {
  articles: any
}

const PageArticles = ({ articles }: Props) => {
  return (
    <div className="articles">
      <Grid>
          <Grid.Column width={10}>
      <ul>
      {articles.map((article) => <li key={article.id}>
        <ArticlesFloating title={article.title} description={article.description}/>
      </li>
      )}
      </ul>
      </Grid.Column>
      <Grid.Column width={6}>
        <aside>
          <p>Lista artykulow</p>
        </aside>
      </Grid.Column>
      </Grid>
    </div>
  )
}
export default PageArticles