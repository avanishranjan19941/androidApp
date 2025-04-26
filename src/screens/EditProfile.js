import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from '../styles/GlobalStyles';

const EditProfile = ({ navigate, userType }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    console.log('Profile Saved:', { name, email });
    navigate('Dashboard'); // Go back to Dashboard after saving
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Your Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Save Changes" onPress={handleSave} />
    </View>
  );
};

export default EditProfile;
