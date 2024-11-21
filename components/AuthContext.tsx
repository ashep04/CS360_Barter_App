import React, { useEffect, createContext, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

type AuthContextType = {
  isLoggedIn: boolean;
  role: 'BarterBuy' | 'BarterSell' | null;
  login: (role: 'BarterBuy' | 'BarterSell') => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState<'BarterBuy' | 'BarterSell' | 'admin' | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    // Check if user is logged in on app start
    const checkUserStatus = async () => {
      const userRole = await AsyncStorage.getItem('role');
      const userLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      if (userLoggedIn === 'true') {
        setIsLoggedIn(true);
        setRole(userRole as 'BarterBuy' | 'BarterSell' | null);
      }
    };
    checkUserStatus();
  }, []);

  // No need to load from SecureStore anymore, so just initialize as false
  const login = async (role: 'BarterBuy' | 'BarterSell') => {
    setIsLoggedIn(true);
    setRole(role);
    await AsyncStorage.setItem('isLoggedIn', 'true');
    await AsyncStorage.setItem('role', role);
  };

  const logout = async () => {
    setIsLoggedIn(false);
    setRole(null);
    await AsyncStorage.removeItem('isLoggedIn');
    await AsyncStorage.removeItem('role');
    navigation.navigate('index');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};



// import React, { createContext, useState, useEffect, useContext } from 'react';
// import { saveAuthData, getAuthData, clearAuthData } from '../utils/secureStore';

// type AuthContextType = {
//   isLoggedIn: boolean;
//   role: 'BarterBuy' | 'BarterSell' | null;
//   login: (role: 'BarterBuy' | 'BarterSell') => void;
//   logout: () => void;
// };

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [role, setRole] = useState<'BarterBuy' | 'BarterSell' | null>(null);

//   // Load auth data on app start
//   useEffect(() => {
//     const loadAuthData = async () => {
//       const storedRole = await getAuthData();
//       if (storedRole) {
//         setIsLoggedIn(true);
//         setRole(storedRole as 'BarterBuy' | 'BarterSell');
//       }
//       else
//       {
//         setIsLoggedIn(false);
//         setRole(null);
//       }
//         // setIsLoggedIn(false);
//         // setRole(null);
//     };

//     loadAuthData();
//   }, []);

//   const login = async (role: 'BarterBuy' | 'BarterSell') => {
//     setIsLoggedIn(true);
//     setRole(role);
//     await saveAuthData(role); // Persist role in SecureStore
//   };

//   const logout = async () => {
//     setIsLoggedIn(false);
//     setRole(null);
//     await clearAuthData(); // Clear data from SecureStore
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, role, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };
