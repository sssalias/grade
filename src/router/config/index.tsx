import {ReactNode} from 'react'
import {IndexPage, TeamsPage, MatchesPage, MatchDetailsPage, LoginPage, RegisterPage} from 'src/components/pages'

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
    {path: '/auth/login', element: <LoginPage/>},
    {path: '/auth/register', element: <RegisterPage/>}
]
