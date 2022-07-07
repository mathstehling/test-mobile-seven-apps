import create from 'zustand'

export const usePlaylistStore = create((set) => ({
    playlist: null,
    setPlaylist: (playlist) => set({ playlist }),
}))