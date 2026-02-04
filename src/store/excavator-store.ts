import { create } from 'zustand';

interface ExcavatorState {
    exploded: boolean;
    toggleExploded: () => void;

    viewMode: 'default' | 'cabin' | 'tracks' | 'engine';
    setViewMode: (mode: 'default' | 'cabin' | 'tracks' | 'engine') => void;

    selectedPart: string | null;
    setSelectedPart: (part: string | null) => void;

    hydraulicSimulation: boolean;
    toggleHydraulicSimulation: () => void;
}

export const useExcavatorStore = create<ExcavatorState>((set) => ({
    exploded: false,
    toggleExploded: () => set((state) => ({ exploded: !state.exploded })),

    viewMode: 'default',
    setViewMode: (mode) => set({ viewMode: mode }),

    selectedPart: null,
    setSelectedPart: (part) => set({ selectedPart: part }),

    hydraulicSimulation: false,
    toggleHydraulicSimulation: () => set((state) => ({ hydraulicSimulation: !state.hydraulicSimulation })),
}));
