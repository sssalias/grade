import Icon from 'src/components/atoms/icon'
import advantageFirst from 'src/assets/img/icons/advantages/advantage_first.svg'
import AdvantagesItem from 'src/components/molecules/advantages/advantages-item'

import classes from './style.module.scss'

const advantages = [
  {icon: <Icon size={{height: 128, width: 128}} path={advantageFirst}/>, title: 'Открытый источик', body: 'Вся информация и данные для сайта берутся из OpenSource данных.'},
  {icon: <Icon size={{height: 128, width: 128}} path={advantageFirst}/>, title: 'Открытый источик', body: 'Вся информация и данные для сайта берутся из OpenSource данных.'},
  {icon: <Icon size={{height: 128, width: 128}} path={advantageFirst}/>, title: 'Открытый источик', body: 'Вся информация и данные для сайта берутся из OpenSource данных.'}
]

const AdvantagesList = () => {
    return (
      <div className={classes.wrapper}>
        {advantages.map(({icon, title, body}) => <AdvantagesItem icon={icon} title={title} body={body}/>)}
      </div>
    )
}

export default AdvantagesList