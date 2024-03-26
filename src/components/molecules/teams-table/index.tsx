import Table from 'rc-table'
import { useTeamsTable } from './config'
import { useTeamsStore } from 'src/store'

const TeamsTable = () => {
    const space = useTeamsStore(state => state.space)
    const {columns, data} = useTeamsTable()

    return (
        <Table columns={columns} data={data.slice(0, space)}/>
    )
}

export default TeamsTable