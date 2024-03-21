import classes from './style.module.scss'

const Footer = () => {
    return (
        <footer>
            <div className={classes.container}>
                <div className={classes.wrapper}>

                    <span className={classes.copyright}>2022© OpenDota</span>

                    <nav className={classes.navbar}>
                        <span>О нас</span>
                        <span>Политика конфидициальности</span>
                        <span>Документация API</span>
                    </nav>

                </div>
            </div>
        </footer>
    )
}

export default Footer