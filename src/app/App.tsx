import AppRouter from 'src/router'
import './App.base.css'
import './App.style.scss'
import './Table.style.scss'
import {Outlet} from 'react-router-dom'

const App = () => {
    return (
        <>
            <AppRouter/>
            <Outlet/>
        </>
    )
}

export default App