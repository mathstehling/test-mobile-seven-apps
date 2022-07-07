import create from 'zustand'

export const useSearchStore = create((set) => ({
    search: null,
    setSearch: (search) => set({ search }),
}))