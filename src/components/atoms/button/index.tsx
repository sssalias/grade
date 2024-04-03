import classes from './style.module.scss'
import {ButtonHTMLAttributes, DetailedHTMLProps, LegacyRef, ReactNode, RefAttributes, useState} from 'react'
import classNames from 'classnames'

export type PropsType = {
    onClick?: () => void
    children?: ReactNode
    disabled?: boolean
    variant?: 'filled_normal' | 'filled_violet' | 'outline' | 'ghost' | 'icon'
    icon?: ReactNode
    iconHover?: ReactNode
    iconPosition?: 'left' | 'right'
    className?: string
    ref?: React.RefAttributes<HTMLButtonElement> & LegacyRef<HTMLButtonElement> | undefined

}


const Button = ({onClick, children, disabled, variant, icon, iconHover, iconPosition, className, ref}:PropsType) => {

    const [isHover, setHover] = useState(false)

    const handleEnter = () => setHover(true)
    const handleLeave = () => setHover(false)

    return (
        <button
            ref={ref}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onClick={onClick}
            disabled={disabled}
            className={classNames(
                className,
                classes.btn,
                variant ? classes[variant] : classes.filled_button,
            iconPosition ? classes[iconPosition] : classes.left,
        )}>
            {isHover ? iconHover ? iconHover :icon : icon}
            {children ? <span>{children}</span> : null}
        </button>
    )
}

export default Button