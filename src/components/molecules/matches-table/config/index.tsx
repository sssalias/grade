import { Link } from 'react-router-dom'
import { MatchDto } from 'src/api/dto/match'
import { useMatchesStore } from 'src/store/useMatchesStore'
import { parseDate } from 'src/utils/parse/date'

import classes from './style.module.scss'
import { parseTime } from 'src/utils/parse/time'
import MatchesService from 'src/api/services/MatchesService'
import Icon from 'src/components/atoms/icon'

export const useMatchesTable = () => {


    const {data} = useMatchesStore()
    const columns = [
        {
            title: 'ID',
            dataIndex: 'match_id',
            key: 'id',
            render: (_:any, record:MatchDto) => (
                <Link className={classes.link__container} to={`/matches/${record.match_id}`}>
                    <h4>{record.match_id}</h4>
                    <span>{parseDate(record.start_time)} / {data.filter(el => el.match_id === record.match_id)[0].league_name}</span>
                </Link>
            )
        },
        {
            title: 'Длительность',
            dataIndex: 'duration',
            key: 'during',
            render: (_:any, record:MatchDto) => (
                <span>{parseTime(record.duration)}</span>
            )
        },
        {
            title: 'RADIANT',
            dataIndex: 'radiant',
            key: 'radiant',
            render: (_:any, record:MatchDto) => (
                <div className={classes.icons__container}>
                    {record.players.filter(el => el.isRadiant).map(el => <Icon path={MatchesService.getHeroIcon(el.hero_id)} size={{height: 27, width: 50}}/>)}
                </div>
            )
        },
        {
            title: 'DIRE',
            dataIndex: 'dire',
            key: 'dire',
            render: (_:any, record:MatchDto) => (
                <div className={classes.icons__container}>
                    {record.players.filter(el => !el.isRadiant).map(el => <Icon path={MatchesService.getHeroIcon(el.hero_id)} size={{height: 27, width: 50}}/>)}
                </div>
            )
        }
    ]

    const {dataDetails} = useMatchesStore()

    

    return {
        columns,
        data: dataDetails
    }
}