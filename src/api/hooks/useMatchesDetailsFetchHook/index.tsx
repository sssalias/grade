import { useEffect, useState } from 'react'
import MatchesService from 'src/api/services/MatchesService'
import { useMatchesStore } from 'src/store/useMatchesStore'

export const useMatchesDetailsFetchHook = () => {
    const {data, start, end, setDetails} = useMatchesStore()
    
    const [loading, setLoading] = useState(true)

    console.log(start, end);
    

    useEffect(() => {      
        MatchesService.getMatchesDetails(data.slice(start, end))
            .then(res => {
                setDetails(res)
                setLoading(false) 
            })
    }, [data, end])
    
    return {loading}
}