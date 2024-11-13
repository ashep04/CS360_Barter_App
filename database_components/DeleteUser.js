import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const DeleteUser = () => {
  const [userId, setUserId] = useState('');

  const handleDeleteUser = async () => {
    if (!userId) {
      Alert.alert('Error', 'User ID is required');
      return;
    }

    try {
      const response = await axios.post('http://172.29.219.41:3000/deleteUser', { id: userId });
      Alert.alert('Success', 'User deleted successfully');
      setUserId('');
    } catch (error) {
      Alert.alert('Error', 'Failed to delete user');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter User ID"
        value={userId}
        onChangeText={setUserId}
      />
      <Button title="Delete User" onPress={handleDeleteUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 8,
  },
});

export default DeleteUser;
