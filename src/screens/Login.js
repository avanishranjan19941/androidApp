// screens/Login.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles/LoginStyles';

export default function Login({ navigate }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleLogin = () => {
    // Placeholder for login logic
    console.log('Logging in with:', { phoneNumber, otp });
    navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="OTP"
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} color="#1E90FF" />
      <Button title="Back to Home" onPress={() => navigate('Home')} color="#FFD700" />
    </View>
  );
}
