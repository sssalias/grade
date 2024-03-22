import {ReactNode} from 'react'
import Header from 'src/components/organisms/header'
import classes from './style.module.scss'
import Footer from 'src/components/organisms/footer'

export type PropsType = {
    children: ReactNode
}

const MainTemplate = ({children}:PropsType) => {
    return (
        <div className={classes.container}>
            <Header/>
            <main className={classes.wrapper}>
                {children}
            </main>
            {/* TODO: create normal footer*/}
            <Footer/>
        </div>
    )
}

export default MainTemplate