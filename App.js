// Tan Wei Hen Isaac (24000923)
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

// // Exercise 1
// const Welcome = () => {
//   return (
//     <View style={styles.container}>
//       <Text>"Welcome to C346 - Mobile App Development</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// };

// // Exercise 2
// class ModuleInfo extends React.Component {
//   render() {
//     return(
//     <View style={styles.container}>
//       <Text>These are my modules this semester:</Text>
//     </View>
//     );
//   };
// };

// Exercise 3
const Welcome = ({code, name}) => {
  return (
    <View style={styles.moduleBox}>
      <Text>Welcome to {code} - {name}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

class ModuleInfo extends React.Component {
  render() {
    return(
    <View style={styles.header}>
      <Text style={styles.title}>My Modules</Text>
      <Text style={styles.subtitle}>These are my modules this semester:</Text>

      <Welcome code="C346" name="Mobile App Development"/>
      <Welcome code="C105" name="Introduction to Programming"/>
      <Welcome code="C337" name="Immersive Technologies"/>
    </View>
    );
  };
};

export default ModuleInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },

  header: {
    backgroundColor: '#2D5986',
    padding: 25,
    paddingTop: 60,
    marginBottom: 15,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 15,
    color: '#FFFFFF',
  },

  moduleBox: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 15,
    marginVertical: 8,
    padding: 20,
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#2D5986',
  },
});
