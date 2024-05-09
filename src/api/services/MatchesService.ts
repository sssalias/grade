import { instance } from '../config'
import { MatchDto } from '../dto/match'
import { IBaseService } from './IBaseService'

import heroes from 'src/assets/constants/heroes.json'

class MatchesService implements IBaseService {
    public path = '/proMatches'
    public subPath = '/matches'

    public async getData() {
        return await instance.get(this.path)
    }

    public async getMatchesDetails(matches:MatchDto[]) {
        return await Promise.all(matches.map(async (match) => (await instance.get(`${this.subPath}/${match.match_id}`)).data))
    }
    public getHeroIcon(heroId: number) {
        return 'https://cdn.cloudflare.steamstatic.com' + Object.values(heroes).filter(el => el.id === heroId)[0].img
    }
    public async getSomeMatchDetails(match_id:string | undefined) {
        if (!match_id) {
            return null
        }
        return await instance.get(`${this.subPath}/${match_id}`)
    }
}


export default new MatchesService()
