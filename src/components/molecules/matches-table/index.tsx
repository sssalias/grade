import Table from 'rc-table'
import { useMatchesTable } from './config'

const MatchesTable = () => {
    const {data, columns} = useMatchesTable()
    return (
        <Table columns={columns} data={data}/>
    )
}

export default MatchesTable