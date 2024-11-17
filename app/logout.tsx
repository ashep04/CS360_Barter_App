import React from 'react';
import { View, Button } from 'react-native';
import { useAuth } from '@/components/AuthContext';

export default function Profile() {
  const { logout } = useAuth();

  return (
    <View>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
