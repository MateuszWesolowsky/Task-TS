import { create } from 'zustand';

interface PeopleStore {
  search: string;
  page: number;
  setSearch: (search: string) => void;
  setPage: (page: number) => void;
}

export const usePeopleStore = create<PeopleStore>((set) => ({
  search: '',
  page: 1,
  setSearch: (search) => set({ search, page: 1 }),
  setPage: (page) => set({ page }),
}));
