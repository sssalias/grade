import SearchField from 'src/components/atoms/fields/search-field'
import Logo from 'src/components/atoms/logo'
import MainTemplate from 'src/components/templates/main-template'
import classes from 'src/components/pages/global/index-page/style.module.scss'
import Button from 'src/components/atoms/button'
import AdvantagesList from 'src/components/molecules/advantages/advantages-list'
import {useNavigate} from 'react-router-dom'

const IndexPage = () => {

    const navigate = useNavigate()

    return (
        <MainTemplate>
            <div className={classes.wrapper}>
                <div>
                    <Logo size='bg'/>
                </div>
                <div className={classes.info__wrapper}>
                    <SearchField placeholder='Поиск по сайту...'/>
                    <nav className={classes.navigation}>
                        <Button onClick={() => navigate('/matches')} className={classes.button} variant='filled_normal'>Список матчей</Button>
                        <Button onClick={() => navigate('/teams')} className={classes.button} variant='filled_normal'>Список команд</Button>
                    </nav>
                    <AdvantagesList/>
                </div>
            </div>
        </MainTemplate>
    )
}

export default IndexPage