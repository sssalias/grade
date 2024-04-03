import { useState } from 'react'
import classes from './style.module.scss'
import classNames from 'classnames'


type PropsType = {
    label?: string
}

const Checkbox = ({label}:PropsType) => {

    const [isChecked, setChecked] = useState(false)

    return (
        <label className={classes.container}>
            <span>{label}</span>
            <input onChange={() => setChecked(!isChecked)} className={classNames(classes.checkbox, isChecked ? classes.checkbox_checked : null)} type="checkbox"/>
        </label>
    )
}

export default Checkbox
