import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

import truck_icon from '../images/truck.png'
import envelop_icon from '../images/messages-icon.png'
import repair_icon from '../images/hammer_and_wrench.png'

class MainPage extends Component {
  onJobButtonPresses () {
    const {navigate} = this.props.navigation;
    navigate('Chat')
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={{
            justifyContent: 'center'}}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={this.onJobButtonPresses.bind(this)}
                style={styles.jobsButton}>
                  <Image source={truck_icon} style={styles.iconImage} />
                  <Text style={styles.welcome}>งานหลัก</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.buttonContainer}>            
              <TouchableOpacity
                onPress={()=> {}}
                style={styles.button}>
                <Image source={envelop_icon} style={styles.iconImage} />
                <Text style={styles.welcome}>ข้อความ</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>            
              <TouchableOpacity
                onPress={()=> {}}
                style={styles.button}>
                <Image source={repair_icon} style={styles.iconImage} />
                <Text style={styles.welcome}>ซ่อมบำรุง</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.buttonContainer}>            
              <TouchableOpacity
                onPress={()=> {}}
                style={styles.button}>
                <Image source={envelop_icon} style={styles.iconImage} /> 
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>            
              <TouchableOpacity
                onPress={()=> {}}
                style={styles.button}>
                <Image source={repair_icon} style={styles.iconImage} /> 
              </TouchableOpacity>
            </View>
          </View>        
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  buttonContainer: {
    flex: 1,
    margin: 10
  },
  iconImage: {
    margin: 10,
  },
  button: {
    flex: 1,
    backgroundColor: 'powderblue',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  jobsButton: {
    backgroundColor: 'gold',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default MainPage
