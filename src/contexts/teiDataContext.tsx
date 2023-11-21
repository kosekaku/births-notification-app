import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

interface DataContextProps {
  children: ReactNode;
}

interface DataContextValue {
  data: any[]; // Replace any with the actual type of your data
  setData: React.Dispatch<React.SetStateAction<any[]>>;
}

const DataContext = createContext<DataContextValue | undefined>(undefined);

const DataContextProvider: React.FC<DataContextProps> = ({ children }) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // Fetch data from API and set it
    // ...

    // For the sake of this example, initializing data with dummy values
    setData([
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
    ]);
  }, []);

  const value: DataContextValue = { data, setData };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

const useDataContext = (): DataContextValue => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataContextProvider');
  }
  return context;
};

export { DataContextProvider, useDataContext };
