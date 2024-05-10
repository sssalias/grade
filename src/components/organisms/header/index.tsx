import classes from './style.module.scss'
import Logo from 'src/components/atoms/logo'
import Button from 'src/components/atoms/button'

import burgerWhite from 'src/assets/img/icons/burger/burger_white.svg'
import burgerLime from 'src/assets/img/icons/burger/burger_lime.svg'
import Icon from 'src/components/atoms/icon'
import {useAsideStore} from 'src/store/useAsideStore'
import { useEffect, useState } from 'react'
import { getWindowSize } from 'src/utils/getWindowSize'

const Header = () => {

    const {onOpen} = useAsideStore()

    const [windowSize, setWindowSize] = useState(getWindowSize())

    useEffect(() => {  
      window.addEventListener('resize', () => setWindowSize(getWindowSize()))
  
      return () => {
        window.removeEventListener('resize', () => setWindowSize(getWindowSize()))
      }
    }, [])

    return (
        <header className={classes.container}>
            <div className={classes.wrapper}>
                <Button onClick={onOpen} variant='icon' icon={<Icon path={burgerWhite}/>} iconHover={<Icon path={burgerLime}/>}></Button>
                {windowSize.innerWidth > 480 ? <Logo size='sm'/> : null}
            </div>
        </header>
    )
}

export default Header