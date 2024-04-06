import Table from 'rc-table'
import { useTeamsTable } from './config'
import {useTeamsStore} from 'src/store'

const TeamsTable = () => {
    const {columns, data} = useTeamsTable()
    const {space} = useTeamsStore()

    return (
        <Table columns={columns} data={data.slice(0, space)}/>
    )
}

export default TeamsTable