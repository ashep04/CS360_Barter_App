import React, { useEffect, createContext, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

type AuthContextType = {
  isLoggedIn: boolean;
  role: 'BarterBuy' | 'BarterSell' | 'admin' | null;
  username: string | null;
  userId: string | null;
  password: string | null;
  login: (role: 'BarterBuy' | 'BarterSell' | 'admin', username: string, userId: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<{
    isLoggedIn: boolean;
    role: 'BarterBuy' | 'BarterSell' | 'admin' | null;
    username: string | null;
    userId: string | null;
    password: string | null;
  }>({
    isLoggedIn: false,
    role: null,
    username: null,
    userId: null,
    password: null,
  });

  const navigation = useNavigation();

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        const [isLoggedIn, role, username, userId, password] = await AsyncStorage.multiGet([
          'isLoggedIn',
          'role',
          'username',
          'userId',
          'password',
        ]);

        if (isLoggedIn[1] === 'true') {
          setAuthState({
            isLoggedIn: true,
            role: role[1] as 'BarterBuy' | 'BarterSell' | 'admin' | null,
            username: username[1],
            userId: userId[1],
            password: password[1],
          });
        }
      } catch (error) {
        console.error('Error checking user status:', error);
      }
    };

    checkUserStatus();
  }, []);

  const login = async (
    role: 'BarterBuy' | 'BarterSell' | 'admin',
    username: string,
    userId: string,
    password: string,
  ) => {
    try {
      const updatedState = {
        isLoggedIn: true,
        role,
        username,
        userId,
        password,
      };

      setAuthState(updatedState);

      await AsyncStorage.multiSet([
        ['isLoggedIn', 'true'],
        ['role', role],
        ['username', username],
        ['userId', userId],
        ['password', password], // Consider encrypting sensitive data
      ]);
      
      useEffect(() => {
        const debugAsyncStorage = async () => {
          const allData = await AsyncStorage.multiGet([
            'isLoggedIn',
            'role',
            'username',
            'userId',
            'password',
          ]);
          console.log('AsyncStorage contents:', allData);
        };
      
        debugAsyncStorage();
      }, []);
      
      console.log('Login data saved successfully!');
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const logout = async () => {
    try {
      setAuthState({
        isLoggedIn: false,
        role: null,
        username: null,
        userId: null,
        password: null,
      });

      await AsyncStorage.multiRemove(['isLoggedIn', 'role', 'username', 'userId', 'password']);

      navigation.navigate('index');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
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


// import React, { useEffect, createContext, useState, useContext } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation, useFocusEffect } from '@react-navigation/native';

// type AuthContextType = {
//   isLoggedIn: boolean;
//   role: 'BarterBuy' | 'BarterSell' | 'admin' | null;
//   username: string | null;
//   userId: string | null;
//   password: string | null;
//   // login: (role: 'BarterBuy' | 'BarterSell' | 'admin') => void;
//   login: (role: 'BarterBuy' | 'BarterSell' | 'admin', username: string, userId: string, password: string) => void;
//   logout: () => void;
// };

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [role, setRole] = useState<'BarterBuy' | 'BarterSell' | 'admin' | null>(null);
//   const [userId, setUserId] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigation = useNavigation();
//   // const account = dataAccounts.find(
//   //   (acc) => (acc.id === userId || acc.username === username) && acc.password === password
//   // );

//   // if (account) {
//   //   //setRole(account.role);
//   //   //setIsLoggedIn(true);
//   //   login(account.role, account.username, account.userId, account.password);

//   useEffect(() => {
//     // Check if user is logged in on app start
//     const checkUserStatus = async () => {
//       const userRole = await AsyncStorage.getItem('role');
//       const userLoggedIn = await AsyncStorage.getItem('isLoggedIn');
//       if (userLoggedIn === 'true') {
//         setIsLoggedIn(true);
//         setRole(userRole as 'BarterBuy' | 'BarterSell' |'admin'| null);
//       }
//     };
//     checkUserStatus();
//   }, []);

//   // No need to load from SecureStore anymore, so just initialize as false
//   const login = async (
//     role: 'BarterBuy' | 'BarterSell' | 'admin',
//     username: string,
//     userId: string,
//     password: string,
//   ) => {
//     try {
//       setIsLoggedIn(true);
//       setRole(role);
//       setUserId(userId);
//       setUsername(username);
//       setPassword(password);
//       await AsyncStorage.multiSet([
//         ['isLoggedIn', 'true'],
//         ['role', role],
//         ['username', username],
//         ['userId', userId],
//         ['password', password], // Consider encrypting sensitive information like passwords
//       ]);
//       console.log('Login data saved successfully!');
//     } catch (error)
//     {
//       console.error('Error saving login data:', error);
//     }
//     // await AsyncStorage.setItem('isLoggedIn', 'true');
//     // await AsyncStorage.setItem('role', role);
    
//   };

//   const logout = async () => {
//     setIsLoggedIn(false);
//     setRole(null);
//     await AsyncStorage.removeItem('isLoggedIn');
//     await AsyncStorage.removeItem('role');
//     await AsyncStorage.removeItem('username');
//     await AsyncStorage.removeItem('userId');
//     await AsyncStorage.removeItem('password');

//     navigation.navigate('index');
//   };
//   return (
//   <AuthContext.Provider value={{ isLoggedIn, role, username, userId, password, login, logout }}>
//       {children}
//   </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

