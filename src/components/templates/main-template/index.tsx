import {ReactNode} from 'react'
import Header from 'src/components/organisms/header'
import classes from './style.module.scss'
import Footer from 'src/components/organisms/footer'
import classNames from 'classnames'

export type PropsType = {
    children?: ReactNode
    title?: string
}

const MainTemplate = ({children, title}:PropsType) => {
    return (
        <div className={classes.container}>
            <Header/>
            <main className={classes.wrapper}>
                <h1 className={classNames(classes.title, 'bright__text')}>{title}</h1>
                {children}
            </main>
            {/* TODO: create normal footer*/}
            <Footer/>
        </div>
    )
}

export default MainTemplate