import {create} from 'zustand'
import { immer } from 'zustand/middleware/immer'


interface MatchesState {
    data: any[]
    dataDetails: any[],
    step: number,
    start: number,
    end: number
}

interface MatchesActions {
    set: (data: any[]) => void,
    increase: () => void,
    setDetails: (data: any[]) => void
}


export const useMatchesStore = create<MatchesState & MatchesActions>()(immer(setState => ({
    data: [],
    dataDetails: [],
    step: 2,
    start: 0,
    end: 3,
    set: (data) => {
        setState({data})
    },
    increase: () => {
        setState(state => ({ start: state.end, end: state.end + state.step }))
    },
    setDetails: (data) => {
        setState(state => ({dataDetails: [...state.dataDetails, ...data]}))
    }
})))