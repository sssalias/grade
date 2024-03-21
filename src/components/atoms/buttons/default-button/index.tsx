import classes from './style.module.scss'

export type PropsType = {
    onClick?: () => void,
    children?: React.ReactNode | string
    disabled?: boolean
}

const DefaultButton = ({onClick, children, disabled}:PropsType) => {
    return (
        <button disabled={disabled} className={classes.button} onClick={onClick}>
            {children}
        </button>
    )
}

export default DefaultButton