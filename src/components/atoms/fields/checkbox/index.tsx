import { useState } from 'react'
import classes from './style.module.scss'
import classNames from 'classnames'


type PropsType = {
    label?: string
    onChange?: (value:boolean) => any
}

const Checkbox = ({label, onChange}:PropsType) => {

    const [isChecked, setChecked] = useState(false)


    return (
        <label className={classes.container}>
            <span>{label}</span>
            <input onChange={() => {
                setChecked(!isChecked)
                onChange ? onChange(!isChecked) : null
            }} className={classNames(classes.checkbox, isChecked ? classes.checkbox_checked : null)} type="checkbox"/>
        </label>
    )
}

export default Checkbox
