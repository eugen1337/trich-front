import { create } from "zustand";
import { BASE_URL } from "../env";

type Section = {
  id: number;
  name: string;
  image?: string;
};

interface SectionsState {
  sections: Section[];
  currentSection: Section | null;
  setCurrentSection: (section: Section) => void;
  getSections: () => void;
  getSection: (id: string) => void;
  sendNewThread: (id: string, threadData: ThreadData) => void;
  //   increase: (by: number) => void;
  error: boolean;
  isLoading: boolean;
}

export type ThreadData = {
  title: string;
  tags?: string[];
  content: {
    text: string;
    images?: File[];
  };
};
export const useSectionsStore = create<SectionsState>()((set) => ({
  sections: [],
  currentSection: null,
  setCurrentSection: (section: Section) => {
    set({ currentSection: section });
  },
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

  getSection: async (id: string) => {
    set({ isLoading: true });
    try {
      const response = await fetch(`${BASE_URL}/sections/${id}`);
      const data = await response.json();
      console.log(data);

      set({ currentSection: data });
    } catch (error) {
      set({ error: true, isLoading: false });
    }
  },

  sendNewThread: async (id: string, threadData: ThreadData) => {
    set({ isLoading: true });
    try {
      console.log(JSON.stringify(threadData));
      const response = await fetch(`${BASE_URL}/sections/${id}/threads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(threadData),
      });
      const data = await response.json();
      console.log(data);

      set({ currentSection: data });
    } catch (error) {
      set({ error: true, isLoading: false });
    }
  },
}));

type Thread = {
  id_: number;
  section: number;
  title: string;
  tags: string[];
  content: {
    text: string;
    images: string[];
  };
};

interface ThreadsState {
  threads: Thread[];
  getThreads: (id: string) => void;
  error: boolean;
  isLoading: boolean;
}

export const useThreadsState = create<ThreadsState>()((set) => ({
  threads: [],
  error: false,
  isLoading: false,
  //   increase: (by) => set((state) => ({ bears: state.bears + by })),
  getThreads: async (id: string) => {
    set({ isLoading: true });
    try {
      const response = await fetch(`${BASE_URL}/sections/${id}/threads`);
      const data = await response.json();
      console.log(data);

      set({ threads: data });
    } catch (error) {
      set({ error: true, isLoading: false });
    }
  },
}));
