import {ReactNode} from 'react'
import {IndexPage, TeamsPage, MatchesPage, MatchDetailsPage} from 'src/components/pages'

export type RouteType = {
    path: string
    element: ReactNode
}

export const routes: RouteType[] = [
    {path: '/', element:  <IndexPage/>},
    {path: '/teams', element: <TeamsPage/>},
    {path: '/matches', element: <MatchesPage/>},
    {path: '/matches/:id', element: <MatchDetailsPage/>}
]