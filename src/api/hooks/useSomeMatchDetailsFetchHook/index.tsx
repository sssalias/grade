import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { MatchDto } from 'src/api/dto/match'
import MatchesService from 'src/api/services/MatchesService'
import { useMatchDetailsStore } from 'src/store/useMatchDetailsStore'


type ParamsType = {
    id: string
}

export const useSomeMatchDetailsFetchHook = () => {
    const {id} = useParams<ParamsType>()

    const {set} = useMatchDetailsStore()

    return useQuery(
        'match-details',
        async () => {
            return await MatchesService.getSomeMatchDetails(id)
        },
        {
            onSuccess: ({data}) => {
                set(data as MatchDto)
            }
        }
    )
}