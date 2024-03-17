import { create } from 'zustand'

interface UiState {
  isSidebarOpen: boolean;
  // openSidebar: () => void;
  // closeSidebar: () => void;
  toggleSidebar: () => void;
}

export const useUiStore = create<UiState>()((set) => ({
  isSidebarOpen: false,

  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  // openSidebar: () => set({ isSidebarOpen: true }),
  // closeSidebar: () => set({ isSidebarOpen: false }),
}))