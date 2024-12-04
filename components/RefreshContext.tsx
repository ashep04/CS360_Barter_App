// import React, { createContext, useState, ReactNode, useContext } from 'react';

// // Define the type for the context value
// type RefreshContextType = {
//   refresh: boolean;
//   setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
// }

// // Create the context with a default value of undefined (will be populated later)
// const RefreshContext = createContext<RefreshContextType | undefined>(undefined);

// type RefreshProviderProps {
//   children: ReactNode; // Use ReactNode for the children prop type
// }

// export const RefreshProvider = ({ children }: RefreshProviderProps) => {
//   const [refresh, setRefresh] = useState(false);

//   return (
//     <RefreshContext.Provider value={{ refresh, setRefresh }}>
//       {children}
//     </RefreshContext.Provider>
//   );
// };

// export const useRefresh = () => {
//   const context = useContext(RefreshContext);

//   if (!context) {
//     throw new Error('useRefresh must be used within a RefreshProvider');
//   }

//   return context;
// };
