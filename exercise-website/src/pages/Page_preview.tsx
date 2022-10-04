import React from "react"
import { Button, Grid } from "semantic-ui-react"

const PagePreview = () => {
    return (
        <div className="page_preview">
            <Grid>
                <Grid.Column width={12}>
                    Podgląd artykułu
                </Grid.Column>

                <Grid.Column width={4}>
                    Lista wybranych artykułów
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