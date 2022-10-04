import React from "react"
import ArticlesList from '../components/Article/Articles_list'
import { Button, Grid } from "semantic-ui-react"
import { SelectedArticles } from "../types"
import ArticlesSelection from "../components/Article/Articles_selection"

type Props = {
    setReadyToRead: [] | any
    selectedArticles: SelectedArticles[]
    setSelectedArticles: SelectedArticles
}

const PagePreview = ({ selectedArticles, setSelectedArticles, setReadyToRead }: Props) => {
    return (
        <div className="page_preview">
            <Grid>
                <Grid.Column width={10}>
                    Podgląd artykułu
                </Grid.Column>

                <Grid.Column width={6}>
                    <aside>
                        <p>Lista wybranych artykulow</p>
                    </aside>
                    <ArticlesList
                        selectedArticles={selectedArticles}
                        setReadyToRead={setReadyToRead}
                        setSelectedArticles={setSelectedArticles}
                    />
                    <ArticlesSelection articles={[]} selectedArticles={[]} setSelectedArticles={function (value: React.SetStateAction<SelectedArticles[]>): void {
                        throw new Error("Function not implemented.")
                    } }/>
                </Grid.Column>
            </Grid>
            <div>
                <Button content='Previous' icon='left arrow' labelPosition='left' />
                <Button content='Next' icon='right arrow' labelPosition='right' />
            </div>
        </div>
    )
}
export default PagePreview