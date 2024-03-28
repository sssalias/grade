import { instance } from '../config'
import { IBaseService } from './IBaseService'

class MatchesService implements IBaseService {
    public path = '/proMatches'
    public subPath = '/matches'

    public async getData(startValue:number, endValue:number) {
        const mathces = await instance.get(this.path)
        const data = await Promise.all(mathces.data.slice(startValue, endValue).map((item:any) => instance.get(`${this.subPath}/${item.match_id}`)))
        return data
    }
}


export default new MatchesService()
