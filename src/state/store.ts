import { create } from "zustand";
import { BASE_URL } from "../env";

type Section = {
  id: number;
  name: string;
};

interface SectionsState {
  sections: Section[];
  getSections: () => void;
  //   increase: (by: number) => void;
  error: boolean;
  isLoading: boolean;
}

export const useSectionsStore = create<SectionsState>()((set) => ({
  sections: [],
  error: false,
  isLoading: false,
  //   increase: (by) => set((state) => ({ bears: state.bears + by })),
  getSections: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch(`${BASE_URL}/sections`);
      const data = await response.json();
      console.log(data);

      set({ sections: data });
    } catch (error) {
      set({ error: true, isLoading: false });
    }
  },
}));

