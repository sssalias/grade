import ModalTemplate from 'src/components/templates/modal-template'
import SimpleField from 'src/components/atoms/fields/simple-field'

import classes from './style.module.scss'
import Button from 'src/components/atoms/button'
import Checkbox from 'src/components/atoms/fields/checkbox'
import { useEffect, useState } from 'react'
import { RegisterDto } from 'src/api/dto/auth/register'
import { RegisterResponse, registerValidate } from 'src/utils/validation/register'

const RegisterPage = () => {

  const [data, setData] = useState<RegisterDto>({
    email: '',
    login: '',
    password: '',
    repeatPassword: '',
    isCommit: false
  })

  const [response, setResponse] = useState<RegisterResponse>()

  useEffect(() => {
    setResponse(registerValidate(data)) 
  }, [data])
  
  return (
    <ModalTemplate title='Регистрация'>
      <form onSubmit={e => e.preventDefault()} className={classes.form}>
        <fieldset>
          <SimpleField value={data.email} onChange={(value) => setData({...data, email: value})} label='E-mail' type='email'/>
          <SimpleField value={data.login} onChange={(value) => setData({...data, login: value})} label='Логин' type='text'/>
          <SimpleField value={data.password} onChange={(value) => setData({...data, password: value})} label='Пароль' type='password'/>
          <SimpleField value={data.repeatPassword} onChange={(value) => setData({...data, repeatPassword: value})} label='Повторите пароль' type='password'/>
        </fieldset>
        <Checkbox onChange={(value) => setData({...data, isCommit: value})} label='Согласен с политикой конфидициальности'/>
        <Button disabled={!response?.success} variant='filled_violet'>Регистрация</Button>
      </form>
    </ModalTemplate>
  )
}

export default RegisterPage