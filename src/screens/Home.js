// screens/Home.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/HomeStyles';

export default function Home({ navigate }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mutual lend</Text><br/>
      <Text>Platform for Lending and Borrowing Cash</Text>
      <br/>
      <Button title="Register" onPress={() => navigate('Register')} color="#1E90FF" />
      <Button  style="margin-left:5px; "title="Login" onPress={() => navigate('Login')} color="#1E90FF" />
    </View>
  );
}
