import { Dispatch, ReactNode } from "react"

export type Props = {
    children: ReactNode
}
export type Articles = {
    id: string,
    title: string,
    description: string
}
export type SelectedArticles = {
    id: string,
    title: string,
    description: string  
}
export type SetSelectedArticles = Dispatch<React.SetStateAction<SelectedArticles[]>>