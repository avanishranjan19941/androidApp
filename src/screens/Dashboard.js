import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../styles/GlobalStyles';

const Dashboard = ({ navigate, userType, setUserType }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to your Dashboard!</Text>
      <Text style={styles.text}>User Type: {userType}</Text>
      <Button title="Edit Profile" onPress={() => navigate('EditProfile')} />
    </View>
  );
};

export default Dashboard;
