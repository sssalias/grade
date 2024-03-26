import moment from 'moment'
import 'moment/locale/ru'

moment.locale('ru')

export const parseTime = (unixTimestamp:number) => {
    const result = String(moment(new Date(unixTimestamp * 1000), "YYYYMMDD").fromNow())
    return result.charAt(0).toUpperCase() + result.slice(1)
}