import { create } from "zustand";

export const useStore = create((set) => ({
  tema: "oscuro",

  setTema: (tema) => set({ tema }),
}));
