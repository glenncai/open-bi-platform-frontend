'use client';

import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import useLoadUserData from '@/hooks/useLoadUserData';
import useNavigatePage from '@/hooks/useNavigatePage';
import Loader from '@/components/loader';

interface ContextProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<ContextProps>({
  sidebarOpen: false,
  setSidebarOpen: (): boolean => false,
});

export default function AppProvider({ children }: { children: React.ReactNode }) {
  const { waitingUserData } = useLoadUserData();
  useNavigatePage(waitingUserData);

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <AppContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {waitingUserData ? <Loader /> : children}
    </AppContext.Provider>
  );
}

export const useAppProvider = () => useContext(AppContext);
