import Icon from 'src/components/atoms/icon'
import AdvantagesItem from 'src/components/molecules/advantages/advantages-item'

import classes from './style.module.scss'

import advantageFirst from 'src/assets/img/icons/advantages/advantage_first.svg'
import advantageSecond from 'src/assets/img/icons/advantages/advantage_second.svg'
import advantageThird from 'src/assets/img/icons/advantages/advantage_third.svg'

const advantages = [
  {icon: <Icon size={{height: 128, width: 128}} path={advantageFirst}/>, title: 'Открытый источик', body: 'Вся информация и данные для сайта берутся из OpenSource данных.'},
  {icon: <Icon size={{height: 128, width: 128}} path={advantageSecond}/>, title: 'Подробные данные', body: 'Анализ файлов повторов предоставляет очень подробные данные о матче.'},
  {icon: <Icon size={{height: 128, width: 128}} path={advantageThird}/>, title: 'Бесплатно', body: 'Серверы финансируются спонсорами, а код поддерживают волонтеры, поэтому услуга предоставляется бесплатно.'}
]

const AdvantagesList = () => {
    return (
      <div className={classes.wrapper}>
        {advantages.map(({icon, title, body}) => <AdvantagesItem icon={icon} title={title} body={body}/>)}
      </div>
    )
}

export default AdvantagesList