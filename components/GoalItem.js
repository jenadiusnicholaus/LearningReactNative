import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.listItemsStyle}>
      <Text>{props.title}</Text>
    </View>
  );
};
export default GoalItem;

const styles = StyleSheet.create({
  listItemsStyle: {
    padding: 10,
    backgroundColor: "#ccc",
    borderRadius: 10,
    borderRadius: 1,
    borderColor: "blue",
    marginTop: 10,
  },
});
