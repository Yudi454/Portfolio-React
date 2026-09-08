import { create } from "zustand";

export const useStore = create((set) => ({
  thema: "oscuro",

  setThema: (thema) => set({ thema }),
}));
