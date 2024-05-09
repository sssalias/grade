// import { useMatchesStore } from 'src/store/useMatchesStore'

import { useMatchDetailsStore } from 'src/store/useMatchDetailsStore'
import classes from './style.module.scss'
import { PlayerDto } from 'src/api/dto/match'
import Icon from 'src/components/atoms/icon'
import MatchesService from 'src/api/services/MatchesService'
import classNames from 'classnames'

export const useDetailsTable = (isRadiant:boolean) => {

    const {data} = useMatchDetailsStore()

    const columns = [
        {
            title: 'ИГРОК', 
            dataIndex: 'player',
            key: 'player',
            render: (_:any, record: PlayerDto) => (
                <div className={classes.player__container}>
                    <Icon path={MatchesService.getHeroIcon(record.hero_id)} size={{height: 27, width: 48}}/>
                    <div>
                        <h4>{record.personaname}</h4>
                        
                    </div>
                </div>
            )
        },
        {
            title: 'LVL',
            dataIndex: 'level',
            key: 'level',
            render: (_:any, record: PlayerDto) => (
                <div className={classes.level}>
                    <span>{record.level}</span>
                </div>
            )
        },
        {
            title: 'K',
            dataIndex: 'kills',
            key: 'kills',
            render: (_:any, record: PlayerDto) => (
                <div className={classes.kills}>
                    <span>{record.kills}</span>
                </div>
            )
        },
        {
            title: 'D',
            dataIndex: 'deaths',
            key: 'deaths',
            render: (_:any, record: PlayerDto) => (
                <div className={classes.deaths}>
                    <span>{record.deaths}</span>
                </div>
            ) 
        },
        {
            title: 'A',
            dataIndex: 'assists',
            key: 'assists',
            render: (_:any, record: PlayerDto) => (
                <div className={classes.assists}>
                    <span>{record.assists}</span>
                </div>
            ) 
        },
        {
            // LH/DN
            title: 'LH/DN',
            dataIndex: 'lhdh',
            key: 'lhdh',
            render: (_:any, record: PlayerDto) => (
                <div className={classes.lhdh}>
                    <span>{record.last_hits}/{record.denies}</span>
                </div>
            ) 
        },
        {
            title: 'NET',
            dataIndex: 'net',
            key: 'net',
            render: (_:any, record: PlayerDto) => (
                <div className={classes.net}>
                    <span>{record.gold}</span>
                </div>
            ) 
        },
        {
            title: 'GMP/XPM',
            dataIndex: 'gmpxpm',
            key: 'gmpxpm',
            render: (_:any, record: PlayerDto) => (
                <div className={classes.gmpxpm}>
                    <span>{record.gold_per_min}/{record.xp_per_min}</span>
                </div>
            )   
        },
        {
            title: 'HD',
            dataIndex: 'hd',
            key: 'nd',
            render: (_:any, record: PlayerDto) => (
                <div className={classes.hd}>
                    <span>{record.hero_damage}</span>
                </div>
            ) 
        },
        {
            title: 'TD',
            dataIndex: 'td',
            key: 'td',
            render: (_:any, record: PlayerDto) => (
                <div className={classes.td}>
                    <span>{record.tower_damage}</span>
                </div>
            ) 
        },
        {
            title: 'HH',
            dataIndex: 'hh',
            key: 'hh',
            render: (_:any, record: PlayerDto) => (
                <div className={classes.hh}>
                    <span>{record.hero_healing}</span>
                </div>
            ) 
        },
        {
            title: 'ПРЕДМЕТЫ / БАФЫ',
            dataIndex: 'items',
            key: 'items',
            width: '30%',
            render: (_:any, record: PlayerDto) => (
                <div className={classes.items}>
                    
                </div>
            )
        }
    ]
    


    const caption = (
        <div className={classes.caption__container}>
            <h4>{isRadiant ? 'Radiant' : 'Dire'}</h4>
            <span>статистика команды</span>
            {/* TODO: create me */}
            {data?.players.filter(el => el.isRadiant === isRadiant)[0].win === 1 ? <div className={classes.winner}>Победители</div> : <div className={classes.loser}>Проигравшые</div>}
            
        </div>
    )
     
    return {
        columns,
        caption,
        data
    }
}