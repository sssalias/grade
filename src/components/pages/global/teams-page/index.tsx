import MainTemplate from 'src/components/templates/main-template'
import TeamsTable from 'src/components/molecules/tables/teams-table'
import Button from 'src/components/atoms/button'
import {useTeamsStore} from 'src/store/useTeamsStore'
import {useTeamsFetchHook} from 'src/api/hooks/useTeamsFetchHook'

const TeamsPage = () => {

    const {increaseSpace} = useTeamsStore()
    const {isLoading} = useTeamsFetchHook()

    return (
        <MainTemplate title='СПИСОК КОМАНД' loading={isLoading}>
            <TeamsTable/>
            <Button variant='filled_normal' onClick={increaseSpace}>Загрузить ещё</Button>
        </MainTemplate>
    )
}

export default TeamsPage
