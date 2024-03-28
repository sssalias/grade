import Table from 'rc-table'
import { useMatchesTable } from './config'

const MatchesTable = () => {

    const {data, columns} = useMatchesTable()

    console.log(data)
    


    return (
        <Table columns={columns}/>
    )
}

export default MatchesTable