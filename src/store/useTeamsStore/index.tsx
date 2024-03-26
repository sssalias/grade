import TeamService from 'src/api/services/TeamService'
import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'

export interface ITeamsState {
    loading: boolean
    step: number
    space: number
    data: any[]
}

export interface ITeamsActions {
    get: () => void
    increaseSpace: () => void
}

export const useTeamsStore = create<ITeamsState & ITeamsActions>()(immer(setState => ({
    loading: true,
    step: 3,
    space: 5,
    data: [],
    get: async () => {
        const data = await TeamService.getData()        
        setState({data, loading: !(data !== null)})      
    },
    increaseSpace: () => {
        setState(state => ({space: state.space + state.step}))
    },
})))