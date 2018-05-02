import React,{ Component } from 'react';
import { Text,Platform,View,StyleSheet } from 'react-native';

const instructions = Platform.select({
    ios: 'Her name is Hori Miona,\n' +
      'She is member of Nogizaka46 2nd Generation pleased to meet you and only you',
    android: 'Her name is Hori Miona,\n' +
      'She is member of Nogizaka46 2nd Generation pleased to meet you and only you',
  });

class Blink extends Component {
    constructor(props){
      super(props);
      this.state={showText:true}
      setInterval(()=>{
        this.setState(previousState=>{
          return{showText:!previousState.showText};
        })
      },1000)
    }
    render() {
      let disp=this.state.showText ? this.props.text:'';
      return (
        <Text style={styles.instructions}>{disp}</Text>
      );
    }
  }
  class Footer extends Component{
    render(){
        return(
        <View style={{width: 450, height: 70, backgroundColor: 'steelblue'}}>
          <Text style={styles.instructions}>
            {instructions}
          </Text>
          <Blink text='pay attention to the blinking text'/>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    instructions: {
      textAlign: 'center',
      color: 'violet',
    }
  });
  
export default Footer
