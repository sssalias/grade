import classes from './style.module.scss'

export type PropsType = {
    onClick?: () => void,
    children?: React.ReactNode | string
    disabled?: boolean
}

const OutlinedButton = ({onClick, children, disabled}:PropsType) => {
    return (
        <button disabled={disabled} className={classes.button} onClick={onClick}>
            {children}
        </button>
    )
}

export default OutlinedButton
