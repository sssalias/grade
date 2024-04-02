import classes from './style.module.scss'
import {useState} from 'react'
import classNames from 'classnames'

export type PropsType = {
    label?: string
    type?: string
    name?: string
    placeholder?: string
    disabled?: string
}


const SimpleField = ({label, type, name, placeholder}:PropsType) => {

    const [isFocus, setFocus] = useState(false)
                                                
    return (
        <label className={classNames(classes.label, isFocus ? classes.field_focus : null)}>
            <span>{label}</span>
            <input onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} className={classes.input} type={type} name={name} placeholder={placeholder} />
        </label>
    )
}

export default SimpleField