import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Appbar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInputs";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalhundler = (entergoal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random.toString(), value: entergoal },
    ]);
  };

  return (
    <View style={styles.mainViewStyle}>
      <GoalInput onBtnClick={addGoalhundler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainViewStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 50,
    backgroundColor: "#fff",
  },

  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
