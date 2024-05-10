import classes from './style.module.scss'
import Button from 'src/components/atoms/button'
import Icon from 'src/components/atoms/icon'

import closeWhite from 'src/assets/img/icons/close/close_white.svg'
import closeLime from 'src/assets/img/icons/close/close_lime.svg'
import Logo from 'src/components/atoms/logo'
import classNames from 'classnames'
import {useAsideStore} from 'src/store/useAsideStore'



import userWhite from 'src/assets/img/icons/user/user_white.svg'
import userLime from 'src/assets/img/icons/user/user_lime.svg'
import SearchField from 'src/components/atoms/fields/search-field'

import arrowWhite from 'src/assets/img/icons/arrow/arrow_white.svg'
import {useLocation, useNavigate} from 'react-router-dom'

const Aside = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const {isOpen, onClose} = useAsideStore()
    return (
        <aside className={classNames(classes.container, isOpen ? classes.container__open : '')}>
            <div className={classes.wrapper}>
                <div className={classes.header}>
                    <Button onClick={onClose} variant='icon' iconHover={<Icon path={closeLime}/>} icon={<Icon path={closeWhite}/>}/>
                    <Logo size='sm'/>
                </div>

                <div className={classes.body}>
                    <SearchField placeholder='Найти профиль'/>
                    <Button onClick={() => navigate('/matches')} className={classes.navigation_button} icon={<Icon path={arrowWhite}/>} iconPosition='right' variant='ghost'>Список мачтей</Button>
                    <Button onClick={() => navigate('/teams')} className={classes.navigation_button} icon={<Icon path={arrowWhite}/>} iconPosition='right' variant='ghost'>Список команд</Button>
                    <Button className={classes.navigation_button} icon={<Icon path={arrowWhite}/>} iconPosition='right' variant='ghost' disabled={true}>Сравнение матчей</Button>
                </div>

                <div className={classes.footer}>
                    <Button onClick={() => navigate('/auth/login', {state: {previousLocation: location}})} iconHover={<Icon path={userLime}/>} icon={<Icon path={userWhite}/>} className={classes.aside__button} variant='outline'>Вход</Button>
                </div>
            </div>
        </aside>
    )
}

export default Aside