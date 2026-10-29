import { useLocale } from "next-intl";
import { create } from "zustand";

export const useStore = create((set) => ({
  tema: "claro",
  setTema: (tema) => set({ tema }),
}));
