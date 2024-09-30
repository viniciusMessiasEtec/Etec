import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      position:"relative",
    },  
    button:{
      justifyContent:'center',
      padding:5,
      margin:10,
      Color:'#000'
    },
    usuario:
    {
      fontSize: 20,
      color: '#000',
      borderColor: '#000',
      borderStyle:'solid',
      borderWidth: 1,
      width:'90%',
      padding:10
      
    }
});

export {style};