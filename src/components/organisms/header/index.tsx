import classes from './style.module.scss'
import Logo from 'src/components/atoms/logo'
import Button from 'src/components/atoms/button'

import burgerWhite from 'src/assets/img/icons/burger/burger_white.svg'
import burgerLime from 'src/assets/img/icons/burger/burger_lime.svg'
import Icon from 'src/components/atoms/icon'
import {useAsideStore} from 'src/store/useAsideStore'

const Header = () => {

    const {onOpen} = useAsideStore()

    return (
        <header className={classes.container}>
            <div className={classes.wrapper}>
                <Button onClick={onOpen} variant='icon' icon={<Icon path={burgerWhite}/>} iconHover={<Icon path={burgerLime}/>}></Button>
                <Logo size='sm'/>
            </div>
        </header>
    )
}

export default Header