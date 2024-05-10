import { instance } from '../config'
import { MatchDto } from '../dto/match'
import { IBaseService } from './IBaseService'

import heroes from 'src/assets/constants/heroes.json'
import regions from 'src/assets/constants/region.json'
import gameModes from 'src/assets/constants/game_mode.json'
import items from 'src/assets/constants/items.json'
import buffs from 'src/assets/constants/permanent_buffs.json'
import abilities from 'src/assets/constants/abilities.json'

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
    public getRegion(regionId: number) {
        return JSON.parse(JSON.stringify(regions))[regionId]
    }
    public getGameMode(gameModeId: number) {        
        return JSON.parse(JSON.stringify(gameModes))[gameModeId].name.split('_').filter((el:string) => el !== 'game' && el !== 'mode')
    }
    public getItem(itemId: number) {
        return 'https://cdn.cloudflare.steamstatic.com' + Object.values(items).filter(el => el.id === itemId)[0]?.img
    }
    public getBuff(buffId: number) {
        // console.log(buffId);
        
        const buffName = JSON.parse(JSON.stringify(buffs))[buffId]
    
        return 'https://cdn.cloudflare.steamstatic.com' + abilities[buffName]?.img
    }
    public async getSomeMatchDetails(match_id:string | undefined) {
        if (!match_id) {
            return null
        }
        return await instance.get(`${this.subPath}/${match_id}`)
    }
}


export default new MatchesService()
