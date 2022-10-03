import React, { useEffect, useState } from 'react'
import Layout from './components/Layout'
import PageArticles from './pages/Articles'

import { Articles, SelectedArticles } from './types'

const App = (): JSX.Element => {
    const [articles, setArticles] = useState<Articles[]>([])

    const [selectedArticles, setSelectedArticles] = useState<SelectedArticles[]>([])
    
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

            }
        ])
    }, [])
    return (
        <Layout>
            <PageArticles articles={articles} selectedArticles={selectedArticles} setSelectedArticles={setSelectedArticles}  />
        </Layout>
    )
}

export default App