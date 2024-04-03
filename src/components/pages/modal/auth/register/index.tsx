import ModalTemplate from 'src/components/templates/modal-template'
import SimpleField from 'src/components/atoms/fields/simple-field'

import classes from './style.module.scss'
import Button from 'src/components/atoms/button'
import Checkbox from 'src/components/atoms/fields/checkbox'

const RegisterPage = () => {
  return (
    <ModalTemplate title='Регистрация'>
      <form className={classes.form}>
        <fieldset>
          <SimpleField label='E-mail' type='email'/>
          <SimpleField label='Логин' type='text'/>
          <SimpleField label='Пароль' type='password'/>
          <SimpleField label='Повторите пароль' type='password'/>
        </fieldset>
        <Checkbox label='Согласен с политикой конфидициальности'/>
        <Button disabled variant='filled_violet'>Регистрация</Button>
      </form>
    </ModalTemplate>
  )
}

export default RegisterPage