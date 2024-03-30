import {ReactNode} from 'react'
import {IndexPage, TeamsPage, MatchesPage, MatchDetailsPage} from 'src/components/pages'
import LoginPage from 'src/components/pages/modal/auth/login'

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

export const modalRoutes: RouteType[] = [
    {path: '/auth/login', element: <LoginPage/>}
]