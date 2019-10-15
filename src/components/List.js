import React from 'react';
import { StyleSheet,View ,Image,Text,TouchableOpacity} from 'react-native';
import SingleList from '../containers/SingleList'


const List = props => {

    const {list}=props;
  
    return(
        <View style={{backgroundColor:"#6FD18A",margin:5,}}>
       
     <TouchableOpacity onPress={()=>{
    listFunction(list.name)
}}>
     <Text style={{fontSize:25,padding:8}}>
            Name :{list.name} , Phone :{list.phoneNumber}
     </Text>
          </TouchableOpacity>
          
          </View>
    );}

    export default List;
