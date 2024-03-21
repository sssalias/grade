import {Route, Routes} from 'react-router-dom'
import {routes} from 'src/router/config'

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route => (
                <Route path={route.path} key={route.path} element={route.element} />
            ))}
        </Routes>
    )
}

export default AppRouter