import moment from 'moment/dist/moment'

import ru from 'moment/dist/locale/ru'

moment.locale('ru', ru)


export const parseDate = (unixTimestamp:number, cap=true) => {    
    const result = String(moment(new Date(unixTimestamp * 1000), "YYYYMMDD").fromNow())
    return cap ? result.charAt(0).toUpperCase() + result.slice(1) : result
}
