// src/components/history/HistoryContext.tsx

import React, { createContext, useState, useContext } from 'react';

export const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const addHistoryEntry = (entry) => {
    setHistory([...history, entry]);
  };

  return (
    <HistoryContext.Provider value={{ history, addHistoryEntry }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => useContext(HistoryContext);
