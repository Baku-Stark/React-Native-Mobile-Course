import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    Alert.alert('Form Submitted', `Name: ${name}, Email: ${email}`);
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        returnKeyType="next"
        onSubmitEditing={() => this.emailInput.focus()}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        ref={(input) => { this.emailInput = input; }}
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}