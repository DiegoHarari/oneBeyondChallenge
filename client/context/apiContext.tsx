import React, {useState, useContext, useEffect} from 'react';
import axios, {AxiosResponse} from 'axios';

export interface ContextProps {
  data?: string[] | any;
  isLoading?: boolean;
}

export const APIContext = React.createContext<ContextProps>({} as ContextProps);

export const APIContextProvider: React.FC<ContextProps> = ({children}) => {
  const [data, setData] = useState<AxiosResponse[] | any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const url: string = 'http://localhost:3000/phones';
    axios
      .get(url)
      .then(response => {
        setData(response);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [isLoading]);

  return (
    <APIContext.Provider value={{data, isLoading}}>
      {children}
    </APIContext.Provider>
  );
};

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error('Context must be used within a Provider');
  }
  return context;
}
