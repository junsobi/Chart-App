import React, { useState, ReactNode } from "react";

interface SelectedIdContextProps {
  selectedButton: string | null;
  setSelectedButton: (
    value: string | null | ((prevVar: string | null) => string | null)
  ) => void;
}

const defaultState: SelectedIdContextProps = {
  selectedButton: null,
  setSelectedButton: () => {},
};

export const SelectedIdContext =
  React.createContext<SelectedIdContextProps>(defaultState);

interface ProviderProps {
  children: ReactNode;
}

export const SelectedIdProvider = ({ children }: ProviderProps) => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  return (
    <SelectedIdContext.Provider value={{ selectedButton, setSelectedButton }}>
      {children}
    </SelectedIdContext.Provider>
  );
};
