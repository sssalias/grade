import MainTemplate from 'src/components/templates/main-template'
import TeamsTable from 'src/components/molecules/teams-table'
import { useTeamsStore } from 'src/store'
import { useEffect } from 'react'
import Button from 'src/components/atoms/button'

const TeamsPage = () => {

    const get = useTeamsStore(state => state.get)
    const increaseSpace = useTeamsStore(state => state.increaseSpace)

    useEffect(() => {
        get()
    }, [])

    
    return (
        <MainTemplate title='СПИСОК КОМАНД'>
            <TeamsTable/>
            <Button variant='filled_normal' onClick={increaseSpace}>Загрузить ещё</Button>
        </MainTemplate>
    )
}

export default TeamsPage