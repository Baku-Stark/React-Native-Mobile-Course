import { ScrollView, Text, View, StyleSheet } from 'react-native';

const MyScrollView = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.text}>Item 1</Text>
        <Text style={styles.text}>Item 2</Text>
        <Text style={styles.text}>Item 3</Text>
        <Text style={styles.text}>Item 4</Text>
        <Text style={styles.text}>Item 5</Text>
        <Text style={styles.text}>Item 6</Text>
        <Text style={styles.text}>Item 7</Text>
        <Text style={styles.text}>Item 8</Text>
        <Text style={styles.text}>Item 9</Text>
        <Text style={styles.text}>Item 10</Text>
        <Text style={styles.text}>Item 1</Text>
        <Text style={styles.text}>Item 2</Text>
        <Text style={styles.text}>Item 3</Text>
        <Text style={styles.text}>Item 4</Text>
        <Text style={styles.text}>Item 5</Text>
        <Text style={styles.text}>Item 6</Text>
        <Text style={styles.text}>Item 7</Text>
        <Text style={styles.text}>Item 8</Text>
        <Text style={styles.text}>Item 9</Text>
        <Text style={styles.text}>Item 10</Text>
        <Text style={styles.text}>Item 1</Text>
        <Text style={styles.text}>Item 2</Text>
        <Text style={styles.text}>Item 3</Text>
        <Text style={styles.text}>Item 4</Text>
        <Text style={styles.text}>Item 5</Text>
        <Text style={styles.text}>Item 6</Text>
        <Text style={styles.text}>Item 7</Text>
        <Text style={styles.text}>Item 8</Text>
        <Text style={styles.text}>Item 9</Text>
        <Text style={styles.text}>Item 10</Text>
        <Text style={styles.text}>Item 1</Text>
        <Text style={styles.text}>Item 2</Text>
        <Text style={styles.text}>Item 3</Text>
        <Text style={styles.text}>Item 4</Text>
        <Text style={styles.text}>Item 5</Text>
        <Text style={styles.text}>Item 6</Text>
        <Text style={styles.text}>Item 7</Text>
        <Text style={styles.text}>Item 8</Text>
        <Text style={styles.text}>Item 9</Text>
        <Text style={styles.text}>Item 10</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  container: {
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default MyScrollView;
