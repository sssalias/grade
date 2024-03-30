import { ReactNode } from 'react'
import classes from './style.module.scss'

type PropsType = {
    icon: ReactNode
    title: string
    body: string
}

const AdvantagesItem = ({icon, title, body}:PropsType) => {
  return (
    <div className={classes.container}>
        {icon}
        <h2 className={classes.title}>{title}</h2>
        <h4 className={classes.body}>{body}</h4>
    </div>
  )
}

export default AdvantagesItem