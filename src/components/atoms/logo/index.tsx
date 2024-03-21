import logo from 'src/assets/img/Logo/logo.png'
import classes from './style.module.scss'

export type PropsType = {
    size: 'bg' | 'sm'
}


const sizes = {
    sm: {width: 190, height: 32},
    bg: {width: 620, height: 104}
}



const Logo = ({size}: PropsType) => {
    return (
        <div style={{width: sizes[size].width, height: sizes[size].height}} className={classes.wrapper}>
            <img className={classes.logo} src={logo} alt="Logo"/>
        </div>
    )
}

export default Logo