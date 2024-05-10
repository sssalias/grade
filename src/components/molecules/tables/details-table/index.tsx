import Table from 'rc-table'
import { useDetailsTable } from './config'

type PropsType = {
    isRadiant: boolean
}


const DetailsTable = ({isRadiant}:PropsType) => {
    const {columns, caption, data} = useDetailsTable(isRadiant)
    return (
        <Table className='details__table' columns={columns} caption={caption} data={data?.players.filter(el => el.isRadiant === isRadiant)}/>
    )
}

export default DetailsTable