import {useQuery } from 'react-query'

import MatchesService from 'src/api/services/MatchesService'
import { useMatchesStore } from 'src/store/useMatchesStore'

export const useMatchesFetchHook = () => {

    const {set} = useMatchesStore()

    
    return useQuery(
        'matches',
        async () => await MatchesService.getData(),
        {
            onSuccess: ({data}) => set(data)
        }
    )
}
