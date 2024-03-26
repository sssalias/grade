import {IBaseService} from 'src/api/services/IBaseService.ts'
import {instance} from 'src/api/config'

class TeamService implements IBaseService {
    public path = '/teams'

    public async getData (){
        const {data} = await instance.get(this.path)
        return data
    }
}


export default new TeamService()
