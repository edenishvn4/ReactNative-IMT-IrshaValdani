import React,{ Component } from 'react';
import { Text,View,StyleSheet } from 'react-native';

class Greeting extends Component {
    render() {
      return (
        <Text style={styles.welcome}>WELCOME {this.props.name}!!!</Text>
      );
    }
  }

class Header extends Component{
    render(){
        return(
            <View style={{width: 450, height: 200, backgroundColor: 'powderblue'}}>
              <Greeting name='Irsha' style={styles.welcome}/>
              <Text style={styles.text}> tes hello {kata('Irsha boi')}</Text>
                <Text style={styles.instructions}>
                  This Is Irsha's Future Girlfriend:
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    welcome: {
      fontWeight: 'bold',
      fontSize: 40,
      textAlign: 'center',
      color:'violet',
    },
    instructions: {
      textAlign: 'center',
      color: 'violet',
    },
    text:{
      color:'violet',
      backgroundColor:'purple',
      padding:25,
      margin:15,
      fontSize: 30,
      textAlign:'center'
    }
  });
  
export default Header;