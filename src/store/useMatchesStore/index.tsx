import MatchesService from 'src/api/services/MatchesService'
import {create} from 'zustand'
import { immer } from 'zustand/middleware/immer'


interface MatchesState {
    laoding: boolean
    data: any[]
    step: number
}

interface MatchesActions {
    get: (start:number, end:number) => void
}


export const useMatchesStore = create<MatchesState & MatchesActions>()(immer(setState => ({
    laoding: true,
    data: [],
    step: 2,
    get: async (start, end) => {
        const res = await MatchesService.getData(start, end)
        setState(state => ({data: state.data.length === 0 ? res : [...state.data, ...res], laoding: !(res !== null)}))
    }
})))