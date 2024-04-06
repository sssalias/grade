import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'
import {TeamDto} from 'src/api/dto/team/TeamDto.ts'

export interface ITeamsState {
    step: number
    space: number
    data: TeamDto[]
}

export interface ITeamsActions {
    setTeams: (teams:TeamDto[]) => void
    increaseSpace: () => void
}



export const useTeamsStore = create<ITeamsState & ITeamsActions>()(immer(
    setState => ({
        step: 3,
        space: 5,
        data: [],
        setTeams: (teams) => {
            setState({data: teams})
        },
        increaseSpace: () => {
            setState(state => ({space: state.space + state.step}))
        }
    })
))
