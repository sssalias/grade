import classes from './style.module.scss'
import {ReactNode, useState} from 'react'
import classNames from 'classnames'

export type PropsType = {
    onClick?: () => void
    children?: ReactNode
    disabled?: boolean
    variant?: 'filled_normal' | 'filled_violet' | 'outline' | 'ghost'
    icon?: ReactNode
    iconHover?: ReactNode
    iconPosition?: 'left' | 'right'
}


const Button = ({onClick, children, disabled, variant, icon, iconHover, iconPosition}:PropsType) => {

    const [isHover, setHover] = useState(false)

    const handleEnter = () => setHover(true)
    const handleLeave = () => setHover(false)

    return (
        <button
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onClick={onClick}
            disabled={disabled}
            className={classNames(
                classes.btn,
                variant ? classes[variant] : classes.filled_button,
            iconPosition ? classes[iconPosition] : classes.left,
        )}>
            {isHover ? iconHover : icon}
            <span>{children}</span>
        </button>
    )
}

export default Button