import { useEffect, useState } from 'react'
import MatchesService from 'src/api/services/MatchesService'
import { useMatchesStore } from 'src/store/useMatchesStore'

export const useMatchesDetailsFetchHook = () => {
    const {data, start, end, setDetails} = useMatchesStore()
    
    const [loading, setLoading] = useState(true)

    useEffect(() => {        
        if (data.length > 0) {
            MatchesService.getMatchesDetails(data.slice(start, end))
                .then(res => {
                    setLoading(false)
                    setDetails(res)
                })
        }
    }, [data, end])
    
    return {loading}
}