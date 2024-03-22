import classes from './style.module.scss'
import classNames from 'classnames'

const Footer = () => {
    return (
        <footer className={classes.container}>
            <div className={classNames(classes.wrapper, 'bright__text')}>
                <span>2022© OpenDota</span>
                <nav className={classes.navigation}>
                    <a className={classes.navigation__item}>О нас</a>
                    <a className={classes.navigation__item}>Политика конфидициальности</a>
                    <a className={classes.navigation__item}>Документация API</a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer