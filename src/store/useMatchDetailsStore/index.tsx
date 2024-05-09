import { MatchDto } from 'src/api/dto/match'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'


interface State {
    data: MatchDto | null
}

interface Actions {
    set: (data: MatchDto) => void
}

export const useMatchDetailsStore = create<State & Actions>()(immer(setState => ({
    data: null,
    set: (data) => {
        setState({data: data})
    }
})))
