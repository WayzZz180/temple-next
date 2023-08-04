import React, { createContext, useState, useContext } from 'react';

const NumberContext = createContext();

export function NumberProvider({ children }) {
  const [number, setNumber] = useState(''); // Initial value is 15

  return (
    <NumberContext.Provider value={{ number, setNumber }}>
      {children}
    </NumberContext.Provider>
  );
}

export function useNumber() {
  return useContext(NumberContext);
}
