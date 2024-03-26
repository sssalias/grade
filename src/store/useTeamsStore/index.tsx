import TeamService from 'src/api/services/TeamService'
import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'

export interface ITeamsState {
    step: number
    space: number
    data: any[]
}

export interface ITeamsActions {
    get: () => void
    increaseSpace: () => void
}

export const useTeamsStore = create<ITeamsState & ITeamsActions>()(immer(setState => ({
    step: 3,
    space: 5,
    data: [],
    get: async () => {
        const data = await TeamService.getData()
        setState({data})      
    },
    increaseSpace: () => {
        setState(state => ({space: state.space + state.step}))
    },
})))