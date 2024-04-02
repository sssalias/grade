import SimpleField from 'src/components/atoms/fields/simple-field'
import ModalTemplate from 'src/components/templates/modal-template'

import classes from './style.module.scss'
import Button from 'src/components/atoms/button'
import Icon from 'src/components/atoms/icon'

import arrowBlack from 'src/assets/img/icons/arrow/arrow_black.svg'


type LoginLink = {
    children: string
    linkText: string
    navigateTo: string
}

const LoginLink = ({children, linkText, navigateTo}:LoginLink) => {
    return (
        <div className={classes.login__link__container}>
            <span className={classes.login__link__text}>{children}</span>
            <Button iconPosition='right' icon={<Icon path={arrowBlack} />} className={classes.login__link__button} variant='ghost'>{linkText}</Button>
        </div>
    )
}

const LoginPage = () => {
    return (
        <ModalTemplate title='Авторизация'>
            <form className={classes.form}>
                <SimpleField label='Логин / E-mail' type='email'/>
                <SimpleField label='Пароль' type='password'/>
                <Button variant='filled_violet'>Войти</Button>
                <LoginLink linkText='Регистрация' navigateTo='asfa'>Нет учётной записи?</LoginLink>
                <LoginLink linkText='Восстановить пароль' navigateTo=''>Забыли пароль?</LoginLink>
            </form>
        </ModalTemplate>
    )
}

export default LoginPage