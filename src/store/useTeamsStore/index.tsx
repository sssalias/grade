import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'

export interface ITeamsState {
    data: any[]
}

export interface ITeamsActions {
    get: () => any
}

export const useTeamsStore = create<ITeamsState & ITeamsActions>()(immer(setState => ({
    data: [],
    get: async () => {}
})))