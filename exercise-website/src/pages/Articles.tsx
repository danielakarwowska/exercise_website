import React from "react"
import {Grid} from 'semantic-ui-react'
import ArticlesList from '../components/Article/Articles_list'
import ArticlesSelection from '../../src/components/Article/Articles_selection'
import { Articles, SelectedArticles, SetSelectedArticles } from "../types"
type Props = {
  articles: Articles[]
  setReadyToRead: [] | any
  selectedArticles: SelectedArticles[]
  setSelectedArticles: SetSelectedArticles
}

const PageArticles = ({ articles, selectedArticles, setSelectedArticles, setReadyToRead }: Props) => {
  return (
    <div className="articles">
      <Grid>
          <Grid.Column width={10}>
      <ArticlesSelection
      articles={articles}
      selectedArticles={selectedArticles}
      setSelectedArticles={setSelectedArticles}
      />
      </Grid.Column>
      <Grid.Column width={6}>
        <ArticlesList
              selectedArticles={selectedArticles}
              setReadyToRead={setReadyToRead}
              setSelectedArticles={setSelectedArticles}
              />
      </Grid.Column>
      </Grid>
    </div>
  )
}
export default PageArticles