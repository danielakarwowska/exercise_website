import React, { useEffect, useState } from 'react'
import Layout from './components/Layout'
import PageArticles from './pages/Articles'
import PagePreview from './pages/Page_preview'

import { Articles, SelectedArticles } from './types'

const App = (): JSX.Element => {
    const [articles, setArticles] = useState<Articles[]>([])

    const [selectedArticles, setSelectedArticles] = useState<SelectedArticles[]>([])
    
    const [readyToRead, setReadyToRead] = useState (false) 

    useEffect(() => {
        setArticles([
            {
                id: 'id1',
                title: 'title',
                description: 'description'

            },
            {
                id: 'id2',
                title: 'title1',
                description: 'description1'

            },
            {
                id: 'id3',
                title: 'title2',
                description: 'description2'

            },
            {
                id: 'id4',
                title: 'title',
                description: 'description'

            },
            {
                id: 'id5',
                title: 'title1',
                description: 'description1'

            },
            {
                id: 'id6',
                title: 'title2',
                description: 'description2'

            }
        ])
    }, [])
    return (
        <Layout>
            {
                !readyToRead
                ?   (
                    <PageArticles 
                    articles={articles} 
                    selectedArticles={selectedArticles} 
                    setSelectedArticles={setSelectedArticles}
                    setReadyToRead={setReadyToRead}
                      />
                )
                : <PagePreview/>
            }

        </Layout>
    )
}

export default App