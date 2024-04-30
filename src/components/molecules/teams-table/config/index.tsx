import Icon from 'src/components/atoms/icon'
import classes from './style.module.scss'
import { parseDate } from 'src/utils/parse/date'
import ProgressBar from 'src/components/atoms/progress-bar'
import { getMaxValue } from 'src/utils/sort'
import {useTeamsStore} from 'src/store/useTeamsStore'
import {TeamDto} from 'src/api/dto/team/TeamDto.ts'

export const useTeamsTable = () => {
    const columns = [
        {title: 'Ранг', key: 'rank', dataIndex: 'rank', render: (_:any, record:TeamDto) => (<h4>{data.indexOf(record) + 1}st</h4>)},
        {title: 'Название команды', width: '100%', key: 'name', dataIndex: 'name', 
        render: (inf:any, record:TeamDto) => (
            <div className={classes.team__container}>
                <Icon
                    path={record.logo_url}
                    size={{height: 40, width: 40}}
                />
                <div className={classes.team__title__container}>
                    <h3>{inf}</h3>
                    <h4>{parseDate(record.last_match_time)}</h4>
                </div>
            </div>
        )},
        {title: 'Рейтинг', key: 'rating', dataIndex: 'rating', render: (value:number, _:TeamDto) => (
            <ProgressBar maxValue={getMaxValue(data, 'rating')} currentValue={value}/>
        )},
        {title: 'Победы', key: 'wins', dataIndex: 'wins', render: (value:number, _:TeamDto) => (
           <ProgressBar maxValue={getMaxValue(data, 'wins')} currentValue={value}/>
        )},
        {title: 'Поражения', key: 'losses', dataIndex: 'losses', render: (value:number, _:TeamDto) => (
            <ProgressBar maxValue={getMaxValue(data, 'losses')} currentValue={value}/>
        )},
    ]

    const {data} = useTeamsStore()

    return {
        columns,
        data
    }
}
