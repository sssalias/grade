import {ReactNode} from 'react'
import classes from './style.module.scss'

type PropsType = {
    children?: ReactNode
}

const ModalTemplate = ({children}:PropsType) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                {children}
            </div>
        </div>
    )
}

export default ModalTemplate