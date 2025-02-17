import { create } from 'zustand';

interface PeopleStore {
  search: string;
  page: number;
  count: number;
  setSearch: (search: string) => void;
  setPage: (page: number) => void;
  setCount: (count: number) => void;
}

export const usePeopleStore = create<PeopleStore>((set) => ({
  search: '',
  page: 1,
  count: 1,
  setSearch: (search) => set({ search, page: 1 }),
  setPage: (page) => set({ page }),
  setCount: (count) => set({ count }),
}));
