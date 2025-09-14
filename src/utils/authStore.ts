import { create } from "zustand";
import {persist} from 'zustand/middleware'
import { User } from "../models/user.model";

interface AuthState {
  currentUser: User | null;
  setCurrentUser: (newUser: User) => void;
  removeCurrentUser: () => void;
  updateCurrentUser: (updatedUser: User) => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      currentUser: null,
      setCurrentUser: (newUser) => set({ currentUser: newUser }),
      removeCurrentUser: () => set({ currentUser: null }),
      updateCurrentUser: (updatedUser) => set({ currentUser: updatedUser }),
    }),
    {
      name: "auth-storage", // key trong localStorage
    }
  )
);

export default useAuthStore;