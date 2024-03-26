import { useEffect, useState } from 'react'
import classes from './style.module.scss'


type PropsType = { 
  maxValue: number
  currentValue: number
}

const colors = {
  best: '--main-bright-violet',
  good: '--main-lime',
  normal: '--main-yellow',
  bad: '--main-orange'
}


const ProgressBar = ({maxValue, currentValue}:PropsType) => {

  const progress = currentValue / maxValue * 100

  const [color, setColor] = useState(colors.best)

  useEffect(() => {
    if (progress > 92) setColor(colors.best)
    else if (progress > 55 && progress < 92) setColor(colors.good)
    else if (progress > 20 && progress < 55) setColor(colors.normal)
    else if (progress >= 0 && progress <= 20) setColor(colors.bad)
  }, [])

  return (
    <div className={classes.container}>
      <span>{currentValue}</span>
      <div className={classes.wrapper}>
          <div style={{width: `${progress}%`, background: `var(${color})`}} className={classes.bar}></div>
      </div>
    </div>
  )
}

export default ProgressBar
