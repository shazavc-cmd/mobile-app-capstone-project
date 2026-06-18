import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key, value) => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

export const getData = async (key) => {
  const data = await AsyncStorage.getItem(key);
  return JSON.parse(data);
};
