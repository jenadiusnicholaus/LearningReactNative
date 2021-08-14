import { StatusBar } from 'expo-status-bar';
import React, {useState,} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] =useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalhundler = () => {
    setCourseGoals(currentGoals =>[...currentGoals, enteredGoal]);
  }

  return (
    <View style={styles.mainViewStyle}>

      <View style={styles.addGoalStyle}>
        <TextInput placeholder='Course Goal' style={styles.textInputStyle} value={enteredGoal} onChangeText ={goalInputHandler}/>
        <Button style ={styles.addgoalbuttonStyle} title='Add' onPress= {addGoalhundler}/>
      </View>

      <ScrollView>
        {courseGoals.map((goal) => <View key={goal} style ={styles.listItemsStyle}><Text >{goal}</Text></View>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainViewStyle : {
   paddingLeft:10,
   paddingRight:10,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  addGoalStyle:{
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems:'center' },

  textInputStyle: {
      borderBottomColor:'blue' ,
      borderWidth:1,padding:10,
      width:300,
      height:40
  },
  addgoalbuttonStyle: {
    height:50,
    width: 100,
  },
  listItemsStyle :{
    padding:10,
    backgroundColor:'#ccc',
    borderRadius:10,
    borderRadius:1,
    borderColor:'blue',
    marginTop:10,

  }
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
