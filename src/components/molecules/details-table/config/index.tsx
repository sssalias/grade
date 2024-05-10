// import { useMatchesStore } from 'src/store/useMatchesStore'

import { useMatchDetailsStore } from 'src/store/useMatchDetailsStore'
import classes from './style.module.scss'
import { PlayerDto } from 'src/api/dto/match'
import Icon from 'src/components/atoms/icon'
import MatchesService from 'src/api/services/MatchesService'


import backpackLime from 'src/assets/img/icons/backpack/backpack_lime.svg'
import emptyItem from 'src/assets/img/icons/items/empty_item.png'

import shardTop from 'src/assets/img/icons/shard/shard_top.png'
import shardBotDef from 'src/assets/img/icons/shard/shard_bot_def.png'
import shardBotAct from 'src/assets/img/icons/shard/shard_bot_act.png'
import { parseNumber } from 'src/utils/parse/number'

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
                        <span>Unknow</span>
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
                    <span>{parseNumber(record.total_gold)}</span>
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
            // width: '30%',
            render: (_:any, {item_0, item_1, item_2, item_3, item_4, item_5, backpack_0, backpack_1, backpack_2, purchase, permanent_buffs}: PlayerDto) => (
                <div className={classes.inventory}>
                    <section className={classes.items__container}>
                        <div className={classes.items}>
                            {[item_0, item_1, item_2, item_3, item_4, item_5].map(el => 
                                (
                                    <Icon alt={emptyItem} path={MatchesService.getItem(el)} size={{height: 22, width: 30}}/>
                                )
                            )}
                        </div>
                        <div className={classes.backpack}>
                            <Icon path={backpackLime} size={{height: 20, width: 16}}/>
                            <div className={classes.backpack__list}>
                                {[backpack_0, backpack_1, backpack_2].map(el => 
                                    ( 
                                        <Icon alt={emptyItem} path={MatchesService.getItem(el)} size={{height: 16, width: 22}}/>
                                    )
                                )}
                            </div>
                        </div>
                    </section>
                    
                    <section>
                        <div className={classes.stuff}>
                            <Icon path={emptyItem} size={{height: 22, width: 22}}/>
                        </div>
                    </section>


                    <section>
                        <div className={classes.shard}>
                            <div>
                                <Icon path={shardTop} size={{height: 20, width: 20}}/>
                            </div>
                            <div>
                                <Icon path={purchase?.aghanims_shard > 0 ? shardBotAct : shardBotDef} size={{height: 11, width: 20}}/>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className={classes.buff}>
                            <Icon alt={emptyItem} path={MatchesService.getBuff(permanent_buffs[0]?.permanent_buff)} size={{height: 20, width: 20}}/>
                        </div>
                    </section>

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