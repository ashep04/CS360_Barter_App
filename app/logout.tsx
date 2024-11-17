import React from 'react';
import {StyleSheet, View, Text, Button } from 'react-native';
import { useAuth } from '@/components/AuthContext';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useRouter } from "expo-router";

export default function Profile() {
  const { logout } = useAuth();
  const navigation = useNavigation();
  const router = useRouter();
  const handleLogout = async () => 
  {
    logout();
    router.push("/(startTabs)");
    //navigation.navigate('index');
  }

  return (
    <View>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 8,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    //padding: 20,
  },
  headerImage: {
      alignSelf: 'center',
      marginTop: 100,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    paddingTop: 20,
  },
  loginContainer: {
    padding: 20,
  },
  errorText: {
    color: 'red',
    bottom: 18,
    fontSize: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    backgroundColor: '#fff',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#577399',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  navigation: {
    alignSelf: 'center',
    paddingTop: 20,
  },
  footer: {
    //backgroundColor: '#2F242C',
    gap: 4,
    marginBottom: 2,
    justifyContent: 'flex-end',
  },
  baseText: {},
});