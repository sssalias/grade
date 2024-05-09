import { useEffect } from 'react'
import { useMatchesDetailsFetchHook } from 'src/api/hooks/useMatchesDetailsFetchHook'
import { useMatchesFetchHook } from 'src/api/hooks/useMatchesFetchHook'
import Button from 'src/components/atoms/button'
import MatchesTable from 'src/components/molecules/matches-table'
import MainTemplate from 'src/components/templates/main-template'
import { useMatchesStore } from 'src/store/useMatchesStore'


const MatchesPage = () => {


    useMatchesFetchHook()
    const {increase, clearData} = useMatchesStore()
    const {loading} = useMatchesDetailsFetchHook()


    useEffect(() => {
        return () => {
            clearData()
        }
    }, [loading])


    return (
        <MainTemplate title='Список матчей' loading={loading}>
            <MatchesTable/>
            <Button onClick={increase} variant='filled_normal'>Загрузить ещё</Button>
        </MainTemplate>
    )
}

export default MatchesPage