import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { teiDataLocal } from '../data/data';

interface DataContextProps {
  children: ReactNode;
}

interface DataContextValue {
  data: any[];
  setData: React.Dispatch<React.SetStateAction<any[]>>;
}

const DataContext = createContext<DataContextValue | undefined>(undefined);

const DataContextProvider: React.FC<DataContextProps> = ({ children }) => {
  const [data, setData] = useState<any[]>([teiDataLocal.trackedEntityInstances]);

  useEffect(() => {
    // Fetch data from API and set it
    // ...

    // For the sake of this example, initializing data with dummy values
    // setData([]);
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
