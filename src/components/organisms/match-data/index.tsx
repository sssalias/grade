import { useMatchDetailsStore } from 'src/store/useMatchDetailsStore'
import classes from './style.module.scss'
import { parseTime } from 'src/utils/parse/time'
import { parseDate } from 'src/utils/parse/date'
import Icon from 'src/components/atoms/icon'

import radiant from 'src/assets/img/icons/teams/radiant.svg'
import dire from 'src/assets/img/icons/teams/dire.svg'

import scanBlack from 'src/assets/img/icons/scan/scan_black.svg'
import saveBlack from 'src/assets/img/icons/save/save_black.svg'

import warningYellow from 'src/assets/img/icons/warning/warning_yellow.svg'


import MatchesService from 'src/api/services/MatchesService'
import Button from 'src/components/atoms/button'



const MatchData = () => {

    const {data} = useMatchDetailsStore()

    if (!data) {
        return null
    }

    return (
        <div className={classes.container}>

            {/* Stats */}
            <section className={classes.stats}>
                
                <div className={classes.winner__container}>
                    <Icon path={data.radiant_win ? radiant : dire} size={{height: 24, width: 24}}/>
                     <span className={data.radiant_win ? classes.radiant : classes.dire}>Победа: {data.radiant_win ? 'Radiant' : 'Dire'}</span>
                </div>

                <div className={classes.score}>
                    <h1 className={data.radiant_win ? classes.winner__score : classes.loser__score}>{data.radiant_score}</h1>
                    <div className={classes.score__data}>
                        <h3>{MatchesService.getGameMode(data.game_mode)}</h3>
                        <h2>{parseTime(data.duration)}</h2>
                        <h4>Закончился {parseDate(data.start_time, false)}</h4>
                    </div>
                    <h1 className={!data.radiant_win ? classes.winner__score : classes.loser__score}>{data.dire_score}</h1>
                </div>

                <div className={classes.meta__data}>
                    <div>
                        <h4>ID матча</h4>
                        <span>{data.match_id}</span>
                    </div>
                    <div>
                        <h4>Регион</h4>
                        <span>{MatchesService.getRegion(data.region)}</span>
                    </div>
                    <div>
                        <h4>Навык</h4>
                        <span>Unknow</span>
                    </div>
                </div>

            </section>

            {/* actions */}
            <section className={classes.actions}>
                <div>
                    <Icon path={warningYellow} size={{height: 20, width: 20}}/>
                    <span className={classes.warning}>Запись этого матча не может быть проанализирована, так как недоступна вся информация о матче</span>
                </div>
                <div>
                    <Button icon={<Icon path={scanBlack} size={{height: 20, width: 18}}/>} variant='filled_normal'>Анализ</Button>
                    <Button icon={<Icon path={saveBlack} size={{height: 20, width: 20}}/>} variant='filled_normal'>Загрузить запись</Button>
                </div>
            </section>

        </div>
    )
}

export default MatchData