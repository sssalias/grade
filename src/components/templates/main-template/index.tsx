import {ReactNode} from 'react'
import Header from 'src/components/organisms/header'
import classes from './style.module.scss'
import Footer from 'src/components/organisms/footer'
import classNames from 'classnames'
import Spinner from 'src/components/atoms/spinner'
import Aside from 'src/components/organisms/aside'
import Anchor from 'src/components/atoms/anchor'

export type PropsType = {
    children?: ReactNode
    title?: string,
    loading? :boolean
}

const MainTemplate = ({children, title, loading=false}:PropsType) => {

    return (
        <div className={classes.container}>
            <Header/>
            <Aside/>
            <main className={classes.wrapper}>
                <h1 className={classNames(classes.title, 'bright__text')}>{title}</h1>
                {loading ? <Spinner/> : children}
            </main>
            <Anchor/>
            <Footer/>
        </div>
    )
}

export default MainTemplate