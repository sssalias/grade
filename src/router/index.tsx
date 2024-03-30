import {Route, Routes, useLocation} from 'react-router-dom'
import {modalRoutes, routes} from 'src/router/config'

const AppRouter = () => {

    const location = useLocation()

    const previousLocation = location.state && location.state?.previousLocation


    return (
        <>
            <Routes location={previousLocation || location}>
                {routes.map(route => (
                    <Route path={route.path} key={route.path} element={route.element} />
                ))}
            </Routes>
            {previousLocation && (
                <Routes>
                    {/*<Route path='/auth/login' element={<LoginPage />} />*/}
                    {modalRoutes.map(route => <Route path={route.path} key={route.path} element={route.element}/>)}
                </Routes>
            )}
        </>
    )
}

export default AppRouter