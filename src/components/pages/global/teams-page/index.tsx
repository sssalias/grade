import MainTemplate from 'src/components/templates/main-template'
import TeamsTable from 'src/components/molecules/teams-table'
import { useTeamsStore } from 'src/store'
import { useEffect, useRef } from 'react'
import Button from 'src/components/atoms/button'

const TeamsPage = () => {

    const get = useTeamsStore(state => state.get)
    const loading = useTeamsStore(state => state.loading)
    const increaseSpace = useTeamsStore(state => state.increaseSpace)

    const btn = useRef<null | HTMLButtonElement>(null)

 
    
    useEffect(() => { get() }, [])


    useEffect(() => {
        console.log(btn.current)
    }, [btn])

    return (
        <MainTemplate title='СПИСОК КОМАНД' loading={loading}>
            <TeamsTable/>
            <Button ref={btn} variant='filled_normal' onClick={increaseSpace}>Загрузить ещё</Button>
        </MainTemplate>
    )
}

export default TeamsPage
