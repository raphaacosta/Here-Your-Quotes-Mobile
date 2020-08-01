import React, {createContext, useState} from 'react';

interface ListContextData {
  occurrence: number;
  handleChanges(): void;
}

const ListContext = createContext<ListContextData>({} as ListContextData);

export const ContextProvider: React.FC = ({children}) => {
  const [occurrence, setOccurrence] = useState(0);

  const handleChanges = () => {
    setOccurrence(Math.floor(Math.random() * 1000 + 1));
  }
  
  return (
    <ListContext.Provider value={{occurrence, handleChanges}}>
      {children}
    </ListContext.Provider>
  );
}

export default ListContext;