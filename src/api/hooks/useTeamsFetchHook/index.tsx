import {useQuery} from 'react-query'
import TeamService from 'src/api/services/TeamService.ts'
import {TeamDto} from 'src/api/dto/team/TeamDto.ts'
import {useTeamsStore} from 'src/store'

export const useTeamsFetchHook = () => {
    const {setTeams} = useTeamsStore()
    return useQuery(
        'teams',
        async () => {
            return await TeamService.getData()
        },
        {
            onSuccess: (data:TeamDto[]) => {
                console.log(data)
                setTeams(data)
            }
        }
    )
}
