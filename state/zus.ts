import { create } from 'zustand'

export const useStore = create((set) => ({
    count: 0,
    inc: () => set((state: any) => ({ count: state.count + 0.1 })),
    clear: () => set((state: any) => ({ count: 0 })),
}))