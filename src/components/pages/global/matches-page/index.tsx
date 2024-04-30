import { useMatchesDetailsFetchHook } from 'src/api/hooks/useMatchesDetailsFetchHook'
import { useMatchesFetchHook } from 'src/api/hooks/useMatchesFetchHook'
import Button from 'src/components/atoms/button'
import MatchesTable from 'src/components/molecules/matches-table'
import MainTemplate from 'src/components/templates/main-template'
import { useMatchesStore } from 'src/store/useMatchesStore'


const MatchesPage = () => {
    useMatchesFetchHook()
    const {increase} = useMatchesStore()
    const {loading} = useMatchesDetailsFetchHook()
    return (
        <MainTemplate title='Список матчей' loading={loading}>
            <MatchesTable/>
            <Button onClick={increase} variant='filled_normal'>Загрузить ещё</Button>
        </MainTemplate>
    )
}

export default MatchesPage