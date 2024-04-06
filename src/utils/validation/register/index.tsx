import { RegisterDto } from 'src/api/dto/auth/register'


export class RegisterResponse {
    public message: string
    public success: boolean
    public errorsFields: string[]

    constructor(message:string, succes:boolean, errorsFields:string[]) {
        this.message = message
        this.success = succes
        this.errorsFields = errorsFields
    }

} 

export const registerValidate = (data:RegisterDto) => {
    const errorsFields:string[] = []
    Object.keys(data).forEach(key => {
        if (new String(data[key as keyof RegisterDto]).length === 0 || !data[key as keyof RegisterDto]) {
            errorsFields.push(key)
        }        
    })
    if (errorsFields.length !== 0) return new RegisterResponse('Не все поля заполнены!', false, errorsFields)
    if (data.password !== data.repeatPassword) return new RegisterResponse('Пароли не совпадают!', false, ['password', 'repeatPassword'])
    return new RegisterResponse('Успешно!', true, errorsFields)
}
