import classes from './style.module.scss'

export type PropsType = {
    onClick?: () => void
    children?: React.ReactNode
    disabled?: boolean
    variant?: 'filled_normal' | 'filled_violet' | 'outline' | 'ghost'
    // TODO: Create Icon entity
    icon?: React.ReactNode
}

const styles = {
    filled_normal: classes.filled_normal
}

const Button = ({onClick, children, disabled, variant, icon}:PropsType) => {
    return (
        <button onClick={onClick} disabled={disabled} className={variant ? classes[variant] : classes.filled_button}>
            {children}
        </button>
    )
}

export default Button