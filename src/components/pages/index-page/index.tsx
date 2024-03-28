import SearchField from 'src/components/atoms/fields/search-field'
import Logo from 'src/components/atoms/logo'
import MainTemplate from 'src/components/templates/main-template'
import classes from './style.module.scss'
import Button from 'src/components/atoms/button'
import AdvantagesList from 'src/components/molecules/advantages/advantages-list'

const IndexPage = () => {
    return (
        <MainTemplate>
            <div className={classes.wrapper}>
                <div>
                    <Logo size='bg'/>
                </div>
                <div className={classes.info__wrapper}>
                    <SearchField/>
                    <nav className={classes.navigation}>
                        <Button className={classes.button} variant='filled_normal'>Список матчей</Button>
                        <Button className={classes.button} variant='filled_normal'>Список команд</Button>
                    </nav>
                    <AdvantagesList/>
                </div>
            </div>
        </MainTemplate>
    )
}

export default IndexPage