import { ReactNode } from 'react'

type PropsType = {
    icon: ReactNode
    title: string
    body: string
}

const AdvantagesItem = ({icon, title, body}:PropsType) => {
  return (
    <div>
        {icon}
        <h2>{title}</h2>
        <h4>{body}</h4>
    </div>
  )
}

export default AdvantagesItem