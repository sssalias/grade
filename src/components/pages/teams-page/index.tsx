import MainTemplate from 'src/components/templates/main-template'
import TeamsTable from 'src/components/molecules/teams-table'

const TeamsPage = () => {
    
    return (
        <MainTemplate title='СПИСОК КОМАНД'>
            <TeamsTable/>
        </MainTemplate>
    )
}

export default TeamsPage