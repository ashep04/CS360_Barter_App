// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const setRefreshFlag = async (value) => {
//   try {
//     await AsyncStorage.setItem('refresh', value ? 'true' : 'false');
//   } catch (e) {
//     console.error('Failed to save refresh flag:', e);
//   }
// };

// export const getRefreshFlag = async () => {
//   try {
//     const value = await AsyncStorage.getItem('refresh');
//     return value === 'true'; // Return boolean
//   } catch (e) {
//     console.error('Failed to load refresh flag:', e);
//     return false;
//   }
// };

// export const clearRefreshFlag = async () => {
//   try {
//     await AsyncStorage.removeItem('refresh');
//   } catch (e) {
//     console.error('Failed to clear refresh flag:', e);
//   }
// };