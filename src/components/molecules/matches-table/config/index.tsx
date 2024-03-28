import { useMatchesStore } from 'src/store/useMatchesStore'

export const useMatchesTable = () => {
    const columns = [
        {}
    ]
    const data = useMatchesStore(state => state.data)


    return {
        columns,
        data
    }
}