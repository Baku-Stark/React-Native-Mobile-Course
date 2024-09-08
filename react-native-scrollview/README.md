# Scroll View Base

```js
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function MyScrollView() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Item 1</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Item 2</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Item 3</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Item 4</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Item 5</Text>
      </View>
      {/* Continue adicionando mais elementos */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  box: {
    backgroundColor: 'lightblue',
    padding: 30,
    marginVertical: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
  },
});
```
