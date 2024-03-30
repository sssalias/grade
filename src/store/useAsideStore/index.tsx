import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'


interface IAsideState {
    isOpen: boolean
}

interface IAsideActions {
    onOpen: () => void
    onClose: () => void
}


export const useAsideStore = create<IAsideState & IAsideActions>()(immer(setState => ({
    isOpen: false,
    onOpen: () => setState({ isOpen: true }),
    onClose: () => setState({ isOpen: false }),
})))