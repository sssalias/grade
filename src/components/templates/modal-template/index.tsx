import {ReactNode} from 'react'
import classes from './style.module.scss'
import Button from 'src/components/atoms/button'

import closeBlack from 'src/assets/img/icons/close/close_black.svg'
import closelime from 'src/assets/img/icons/close/close_lime.svg'

import Icon from 'src/components/atoms/icon'
import { useNavigate } from 'react-router-dom'

type PropsType = {
    title?: string
    children?: ReactNode
}

const ModalTemplate = ({title, children}:PropsType) => {

    const navigate = useNavigate()

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <Button 
                        variant='icon'
                        icon={<Icon path={closeBlack}/>}
                        iconHover={<Icon path={closelime}/>}
                        onClick={() => navigate(-1)} 
                    />
                </div>
                <div className={classes.body}>
                    <h1 className={classes.title}>{title}</h1>
                    <div className={classes.content}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalTemplate