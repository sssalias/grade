import Button from 'src/components/atoms/button'
import Icon from 'src/components/atoms/icon'
import searchWhite from 'src/assets/img/icons/search/search_white.svg'

import classes from './style.module.scss'


const SearchField = () => {
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <input placeholder='Поиск по сайту...' type="text" className={classes.input}/>
                <Button className={classes.button} variant='icon' icon={
                    <Icon path={searchWhite}/>
                }></Button>
            </div>
        </div>
    )
}

export default SearchField