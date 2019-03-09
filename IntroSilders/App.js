import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IndicatorViewPager, 
  PagerDotIndicator} from 'rn-viewpager';

import { Ionicons, Entypo } from '@expo/vector-icons';

//const VIEWPAGER_REF = 'viewPager'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      VIEWPAGER_REF:'viewPager'
    }
  }

 
  render() {
  
    return (
      <View style={{ flex: 1}}>
      
        <IndicatorViewPager
          ref={this.state.VIEWPAGER_REF}
          style={{ flex:1 }}
          indicator={this._renderDotIndicator(3)}>
        
          <View style={styles.viewpagerContainer}>
            <Ionicons name="ios-bulb" size={120} color="white"/>
            <Text style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>INNOVATE IDEAS</Text>
            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Innovation distinguishes between a leader and follower.</Text>
            <Text style={{ position: "absolute", color: 'white', fontSize: 20, bottom: 0, right: 0, margin: 16}}
            onPress={() => this.refs[this.state.VIEWPAGER_REF].setPage(1)}>Next</Text>
          </View>

          <View style={styles.viewpagerContainer}>
            <Entypo name="location-pin" size={120} color="white"/>
            <Text style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>MAKE A MARK</Text>
            <Text style={{ color: 'white', fontSize: 20 , textAlign: 'center'}}>Discover and tag places, earn points to get listed in the top of leaderboard.</Text>
            <Text style={{ position: "absolute", color: 'white', fontSize: 20, bottom: 0, left: 0, margin: 16}}
            onPress={() => this.refs[this.state.VIEWPAGER_REF].setPage(0)}>Previous</Text>
            <Text style={{ position: "absolute", color: 'white', fontSize: 20, bottom: 0, right: 0, margin: 16}}
            onPress={() => this.refs[this.state.VIEWPAGER_REF].setPage(2)}>Next</Text>
          </View>

          <View style={styles.viewpagerContainer}>
            <Entypo name="camera" size={120} color="white"/>
            <Text style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>CAPTURE AND SHARE</Text>
            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Good things happens to those who hustel.</Text>
            <Text style={{ position: "absolute", color: 'white', fontSize: 20, bottom: 0, right: 0, margin: 16}}
            onPress={() => this.refs[this.state.VIEWPAGER_REF].setPage(0)}>Done</Text>
          </View>

        </IndicatorViewPager>
      
       
      </View>
    );
  }
 
  _renderDotIndicator(pageIndex) {
    return <PagerDotIndicator pageCount={pageIndex}/>;
  }

  
}

const styles = StyleSheet.create({
  viewpagerContainer : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2661B1'
  }
})


