import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useReducer } from "react";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
 
  return (
    <View style={styles.addGoalStyle}>
      <TextInput
        placeholder="Course Goal"
        style={styles.textInputStyle}
        value={enteredGoal}
        onChangeText={goalInputHandler}
      />
      <Button
        style={styles.addgoalbuttonStyle}
        title="Add"
        onPress={props.onBtnClick.bind(this, enteredGoal)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addGoalStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  textInputStyle: {
    borderBottomColor: "blue",
    borderWidth: 1,
    padding: 10,
    width: 300,
    height: 40,
  },
  addgoalbuttonStyle: {
    height: 50,
    width: 100,
  },
});

export default GoalInput;
