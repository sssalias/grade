import { useEffect, useState } from 'react'
import Button from 'src/components/atoms/button'
import MatchesTable from 'src/components/molecules/matches-table'
import MainTemplate from 'src/components/templates/main-template'
import { useMatchesStore } from 'src/store/useMatchesStore'

const MatchesPage = () => {

    const get = useMatchesStore(state => state.get)

    const [startValue, setStartValue] = useState(0)
    const [endValue, setEndValue] = useState(3)

    const step = useMatchesStore(state => state.step)

    const handleClick = () => {
        setStartValue(endValue)
        setEndValue(endValue + step)
    }

    useEffect(() => { get(startValue, endValue), [] })

    return (
        <MainTemplate title='Список матчей'>
            <MatchesTable/>
            <Button variant='filled_normal' onClick={handleClick}>Загрузить ещё</Button>
        </MainTemplate>
    )
}

export default MatchesPage