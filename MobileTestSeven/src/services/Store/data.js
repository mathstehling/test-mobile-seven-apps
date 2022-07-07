import create from 'zustand'

export const useDataStore = create((set) => ({
    style: null,
    setStyle: (style) => set({ style }),
}))